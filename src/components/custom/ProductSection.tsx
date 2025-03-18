import { axiosInstance } from "@/lib/axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// type ProductType = {
//   _id?: number;
//   name: string;
//   price: number;
// };

const ProductSection = () => {
  // const [productData, setProductData] = useState([]);

  const getProducts: any = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { data: productData } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  console.log(productData);

  return (
    <>
      <div className="flex w-full">
        <div className="product-scrollX flex w-full gap-x-4 overflow-x-auto">
          {productData.map((product: any, index: any) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl=""
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
