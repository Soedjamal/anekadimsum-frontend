import { axiosInstance } from "@/lib/axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

type ProductType = {
  _id?: number;
  name: string;
  price: number;
  thumbnail: string;
  cloudinary_id: string;
};

const ProductSection = () => {
  // const [productData, setProductData] = useState([])

  const getProducts = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
    // setProductData()
  };

  //   useEffect(() => {
  // getProducts()
  //   }, [])

  const { data: productData = [] } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return (
    <>
      <div className="flex w-full h-auto">
        <div className="product-scrollX h-[350px] flex w-full gap-x-4 overflow-x-auto">
          {productData?.map((product: ProductType, index: number) => (
            <ProductCard
              id={product._id}
              name={product.name}
              price={product.price}
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
