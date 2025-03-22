import ProductSection from "@/components/custom/products/ProductSection";
import { ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DetailProductsByType = () => {
  const { slug } = useParams();

  return (
    <>
      {slug == "paket-hemat" ? (
        <div className="main-content">
          <section
            id="products"
            className="flex flex-col w-full md:justify-start md:px-36
          items-center md:pt-20 py-20 min-h-screen"
          >
            <div className="md:w-full w-[350px]">
              <div className="flex items-center w-full">
                <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                  Paket Hemat
                </h1>
              </div>
              <div className="mt-6">
                <ProductSection scrollDirection="auto" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="main-content">
          <section
            id="products"
            className="flex flex-col w-full md:justify-start md:px-36 justify-center
          items-center md:pt-20 py-20 min-h-screen"
          >
            <div className="md:w-full w-[350px] ">
              <div className="flex items-center w-full justify-between">
                <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                  Terlaris
                </h1>
              </div>

              <div className="mt-6">
                <ProductSection scrollDirection="auto" />
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default DetailProductsByType;
