import CheckoutProduct from "@/components/custom/products/CheckoutProduct";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
  const [checkoutMenu, setCheckoutMenu] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async () => {
    const res = await axiosInstance.get(`/api/products/${id}`);
    return res.data;
  };

  const { data: productData = [] } = useQuery({
    queryFn: getProductById,
    queryKey: ["product"],
  });

  console.log(productData);

  return (
    <>
      <div className="bg-neutral-50 px-7 py-7 ">
        <ArrowLeft
          size={"2rem"}
          className="bg-neutral-50"
          onClick={() => navigate("/products")}
        />
      </div>

      <div className="flex relative w-full bg-neutral-50 pb-10 min-h-screen overflow-hidden">
        <div
          className="flex flex-col md:flex-row w-full px-7
        
        gap-8 md:px-36"
        >
          <div className="w-full h-[300px] md:w-[420px] md:h-[420px]  bg-neutral-200 overflow-hidden rounded-lg border-[1px]">
            <img
              className="object-cover w-full h-full"
              src={productData.thumbnail}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(productData.price)}
            </h1>
            <h1 className="font-normal text-xl mt-2">{productData.name}</h1>
            <h1 className="font-normal  mt-2">Stok : {productData.stock}</h1>
            <div className="action w-full md:flex justify-center hidden">
              <div className="py-5 w-full">
                <Button
                  color="#"
                  className="w-full"
                  onClick={() => setCheckoutMenu((prev) => !prev)}
                >
                  Beli Sekarang
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="action w-full flex justify-between items-center px-7 gap-2
          fixed bg-neutral-200 border-t-[1px] border-neutral-400 bottom-0 md:hidden"
        >
          <div className="py-5 min-w-full">
            <Button
              color="#"
              className="w-full"
              onClick={() => setCheckoutMenu((prev) => !prev)}
            >
              Beli Sekarang
              <ShoppingCart />
            </Button>
          </div>
        </div>

        {checkoutMenu ? (
          <>
            <div className="w-full h-screen bg-neutral-700 opacity-55 fixed top-0"></div>
            <div
              className="fixed bottom-[-20%] md:bottom-[20%] md:flex md:justify-center
             rounded-t-lg w-full h-screen md:h-3/4 md:bg-transparent transition-all
              duration-300 ease-out"
            >
              <CheckoutProduct
                name={productData.name}
                thumbnail={productData.thumbnail}
                stock={productData.stock}
                product_id={productData._id}
                price={productData.price}
                menu={() => setCheckoutMenu((prev) => !prev)}
              />
            </div>
          </>
        ) : (
          <div className="fixed bottom-[-100%] w-full transition-all duration-300 ease-linear">
            <CheckoutProduct
              name={productData.name}
              thumbnail={productData.thumbnail}
              stock={productData.stock}
              product_id={productData._id}
              price={productData.price}
              menu={() => setCheckoutMenu((prev) => !prev)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DetailProduct;
