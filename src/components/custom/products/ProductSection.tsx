import { axiosInstance } from "@/lib/axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

type ProductType = {
  _id?: number;
  name: string;
  price: number;
  stock: number;
  sold: number;
  thumbnail: string;
  cloudinary_id: string;
};

type ProductSectionProps = {
  scrollDirection: "x" | "auto";
  filter?: "bySold" | "byPrice";
};

const ProductSection = ({ scrollDirection, filter }: ProductSectionProps) => {
  const getProducts = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
  };

  const { data: productData = [] } = useQuery<ProductType[]>({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  const filteredBySold = productData.filter((data) => data.sold > 0);
  const filteredByPrice = productData.filter((data) => data.price <= 20000);

  return (
    <>
      <div className="flex w-full h-auto">
        <div
          className={`${scrollDirection == "x" ? "overflow-x-auto h-[350px]" : "flex-wrap gap-4"} product-scrollX  flex w-full gap-x-4`}
        >
          {filter == "bySold"
            ? filteredBySold?.map((product, index) => (
                <ProductCard
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                  sold={product.sold}
                  imageUrl={product.thumbnail}
                  key={index}
                />
              ))
            : filter == "byPrice"
              ? filteredByPrice?.map((product, index) => (
                  <ProductCard
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    sold={product.sold}
                    imageUrl={product.thumbnail}
                    key={index}
                  />
                ))
              : productData?.map((product, index) => (
                  <ProductCard
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    sold={product.sold}
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
