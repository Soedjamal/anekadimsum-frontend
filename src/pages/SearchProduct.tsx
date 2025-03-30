import ProductCard from "@/components/custom/products/ProductCard";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Products from "./Products";
import { ArrowLeft } from "lucide-react";
import { ProductType } from "@/types/ProductType";

const SearchProduct = () => {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  const query = searchParam.get("q") || "";

  const getProducts = async () => {
    const response = await axiosInstance("/api/products");
    return response.data;
  };

  const { data: productData = [] } = useQuery<ProductType[]>({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  const filteredProducts = productData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="w-full bg-neutral-50 min-h-screen">
        {query.length > 0 ? (
          filteredProducts.length > 0 ? (
            <div
              className="flex w-full max-w-4xl flex-col relative md:items-start
          pb-20 items-start px-7 mx-auto"
            >
              <div className="flex justify-start w-[350px] mt-10">
                <div
                  className="mt-20 mb-8 rounded-lg relative
                    left-0 flex items-center gap-2 w-fit  bg-neutral-50"
                  onClick={() => navigate("/products")}
                >
                  <ArrowLeft size={"2rem"} />
                  <h4>Kembali</h4>
                </div>
              </div>

              <div className="flex flex-wrap w-full gap-8">
                {filteredProducts.map((product) => (
                  <div key={product._id} className=" bg-neutral-50">
                    <ProductCard
                      id={product._id}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.thumbnail}
                      stock={product.stock}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="min-h-screen flex flex-col gap-4 items-center w-full justify-center">
              <h1 className="text-foreground">
                Maaf produk yang anda cari tidak ada
              </h1>
              <Link className="px-4 py-2 bg-primary rounded-lg" to="/products">
                Kembali
              </Link>
            </div>
          )
        ) : (
          <Products />
        )}
      </div>
    </>
  );
};

export default SearchProduct;
