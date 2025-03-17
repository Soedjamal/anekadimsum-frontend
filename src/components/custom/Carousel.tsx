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

const productData = [
  {
    name: "Dimsum ..",
    price: 10000,
  },
  {
    name: "Dimsum ...",
    price: 10000,
  },
  {
    name: "Dimsum ....",
    price: 10000,
  },
  {
    name: "Dimsum .....",
    price: 10000,
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="md:w-[450px] w-[350px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {productData.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center bg-[#543017] justify-center p-6">
                  <span className="text-4xl font-semibold ">
                    {product.name}
                  </span>
                  <p>
                    {Intl.NumberFormat("id-ID", {
                      currency: "IDR",
                      style: "currency",
                      minimumFractionDigits: 0,
                    }).format(product.price)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
