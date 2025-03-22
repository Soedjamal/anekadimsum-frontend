import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

type ProductType = {
  _id?: number;
  name: string;
  price: number;
  stock: number;
  thumbnail: string;
  cloudinary_id: string;
};

export function BestSellerProductsCarousel() {
  const getProducts = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
  };

  const { data: productData = [] } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="md:max-w-[450px] w-[350px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {productData.map((product: ProductType, index: number) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="w-full md:max-w-[400px] h-[400px]">
                <img
                  src={product.thumbnail}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:ml-0 ml-7" />
      <CarouselNext className="md:mr-0 mr-7" />
    </Carousel>
  );
}
