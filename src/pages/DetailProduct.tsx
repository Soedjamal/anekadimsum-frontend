import CheckoutProduct from "@/components/custom/products/CheckoutProduct";
import MessageCS from "@/components/custom/utils/MessageCS";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Dot,
  LoaderCircle,
  MessageSquare,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
  const [checkoutMenu, setCheckoutMenu] = useState(false);
  const [messageCS, setMessageCS] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async () => {
    const res = await axiosInstance.get(`/api/products/${id}`);
    return res.data;
  };

  const { data: productData, isLoading } = useQuery({
    queryFn: getProductById,
    queryKey: ["product"],
  });

  return (
    <>
      {messageCS ? (
        <div className="fixed bottom-14 left-10 z-10 transition-all duration-300">
          <MessageCS productName={productData?.name} />
        </div>
      ) : (
        <div className="fixed bottom-[-100%] transition-all duration-300 left-10 z-10">
          <MessageCS productName={productData?.name} />
        </div>
      )}

      {isLoading ? (
        <div className="flex min-h-screen justify-center items-center">
          <LoaderCircle className="animate-spin text-primary" size="3rem" />
        </div>
      ) : (
        <div className="w-full bg-neutral-50">
          <div className="bg-neutral-50 px-7 py-7 w-full max-w-4xl mx-auto">
            <ArrowLeft
              size={"2rem"}
              className="bg-neutral-50"
              onClick={() => navigate("/products")}
            />
          </div>

          <div
            className="flex relative w-full  bg-neutral-50 pb-10 
              min-h-screen overflow-hidden"
          >
            <div
              className="flex flex-col md:flex-row px-7 
                gap-8 bg-neutral-50 w-full max-w-4xl mx-auto"
            >
              <div
                className="w-full h-[300px] md:w-[420px] md:h-[420px]  bg-neutral-200 
                  overflow-hidden rounded-lg border-[1px]"
              >
                <img
                  className="object-cover w-full h-full"
                  src={productData?.thumbnail}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-semibold text-3xl">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(Number(productData?.price))}
                </h1>
                <h1 className="font-normal text-xl mt-1">
                  {productData?.name}
                </h1>
                <div className="flex items-center mt-4">
                  {/* <div className="flex gap-1 items-center"> */}
                  {/*   <h4>5.0</h4> */}
                  {/*   <div className="flex"> */}
                  {/*     <StarIcon className="fill-yellow-400" size="1rem" /> */}
                  {/*     <StarIcon className="fill-yellow-400" size="1rem" /> */}
                  {/*     <StarIcon className="fill-yellow-400" size="1rem" /> */}
                  {/*     <StarIcon className="fill-yellow-400" size="1rem" /> */}
                  {/*     <StarIcon className="fill-yellow-400" size="1rem" /> */}
                  {/*   </div> */}
                  {/* </div> */}
                  {/* <Dot /> */}
                  <h1 className="font-normal text-sm">
                    Stok: {productData?.stock}
                  </h1>
                  <Dot />
                  <h1 className="font-normal text-sm">
                    {productData?.sold} Terjual
                  </h1>
                </div>

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
              <div className="py-5 flex min-w-full gap-4">
                <div
                  onClick={() => setMessageCS(!messageCS)}
                  className="bg-primary flex justify-center items-center px-2 rounded-lg"
                >
                  <MessageSquare />
                </div>
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
            <div className="w-full absolute flex justify-center">
              {checkoutMenu ? (
                <>
                  <div
                    onClick={() => setCheckoutMenu(false)}
                    className="w-full h-screen bg-neutral-700 opacity-55 fixed top-0"
                  ></div>

                  <div
                    className="fixed bottom-[-20%] md:top-[0] md:flex md:justify-center
             rounded-t-lg w-full max-w-4xl mx-auto h-screen md:h-fit md:py-8 md:bg-transparent transition-all
              duration-300 ease-out"
                  >
                    <CheckoutProduct
                      name={productData?.name}
                      thumbnail={productData?.thumbnail}
                      stock={productData.stock}
                      product_id={productData?._id}
                      price={Number(productData?.price)}
                      menu={() => setCheckoutMenu((prev) => !prev)}
                    />
                  </div>
                </>
              ) : (
                <div className="fixed bottom-[-100%] w-full transition-all duration-300 ease-linear">
                  <CheckoutProduct
                    name={productData?.name}
                    thumbnail={productData?.thumbnail}
                    stock={productData.stock}
                    product_id={productData?._id}
                    price={Number(productData?.price)}
                    menu={() => setCheckoutMenu((prev) => !prev)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
