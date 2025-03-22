import { axiosInstance } from "@/lib/axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

type ProductType = {
  _id?: number;
  name: string;
  price: number;
  stock: number;
  thumbnail: string;
  cloudinary_id: string;
};

type ProductSectionProps = {
  scrollDirection: "x" | "auto";
};

const ProductSection = ({ scrollDirection }: ProductSectionProps) => {
  const getProducts = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
  };

  const { data: productData = [] } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return (
    <>
      <div className="flex w-full h-auto">
        <div
          className={`${scrollDirection == "x" ? "overflow-x-auto h-[350px]" : "flex-wrap"} product-scrollX  flex w-full gap-x-4`}
        >
          {productData?.map((product: ProductType, index: number) => (
            <ProductCard
              id={product._id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              imageUrl={product.thumbnail}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
