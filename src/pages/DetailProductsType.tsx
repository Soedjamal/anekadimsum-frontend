import ProductSection from "@/components/custom/products/ProductSection";
import { useParams } from "react-router-dom";

const DetailProductsByType = () => {
  const { slug } = useParams();

  return (
    <>
      {slug == "semua-produk" ? (
        <div className="main-content bg-neutral-50 ">
          <section
            id="products"
            className="flex flex-col w-full md:justify-start md:px-36
          items-center md:pt-20 py-20 min-h-screen"
          >
            <div className="md:w-full w-[350px] mt-10">
              <div className="flex items-center w-full">
                <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                  Semua Produk
                </h1>
              </div>

              <div className="mt-6">
                <ProductSection scrollDirection="auto" />
              </div>
            </div>
          </section>
        </div>
      ) : slug == "paket-hemat" ? (
        <div className="main-content bg-neutral-50">
          <section
            id="products"
            className="flex flex-col w-full md:justify-start md:px-36
          items-center md:pt-20 py-20 min-h-screen"
          >
            <div className="md:w-full w-[350px] mt-10">
              <div className="flex items-center w-full">
                <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                  Paket Hemat
                </h1>
              </div>

              <div className="mt-6">
                <ProductSection scrollDirection="auto" filter="byPrice" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="main-content bg-neutral-50">
          <section
            id="products"
            className="flex flex-col w-full md:justify-start md:px-36
          items-center md:pt-20 py-20 min-h-screen"
          >
            <div className="md:w-full w-[350px] mt-10">
              <div className="flex items-center w-full">
                <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                  Terlaris
                </h1>
              </div>

              <div className="mt-6">
                <ProductSection scrollDirection="auto" filter="bySold" />
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default DetailProductsByType;
