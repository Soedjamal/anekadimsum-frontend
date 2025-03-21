import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
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
      <ArrowLeft
        size={"2rem"}
        className="ml-7 mt-5 mb-7"
        onClick={() => navigate("/products")}
      />
      <div className=" w-full px-7">
        <div className="w-full h-[300px] bg-neutral-200 mb-8 overflow-hidden rounded-lg">
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
        </div>
      </div>
      <div className="action w-full flex justify-center absolute bottom-0">
        <div className="px-7 pb-5 w-full">
          <Button color="#" className="w-full">
            Beli Sekarang
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
