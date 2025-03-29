import ProductSection from "@/components/custom/products/ProductSection";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-content w-full">
        <section
          id="products"
          className="flex flex-col w-full md:justify-start max-w-4xl mx-auto justify-center
          items-center md:pt-20 py-20 min-h-screen bg-neutral-50"
        >
          <div className="md:w-full w-[350px] mt-10">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                Semua Produk
              </h1>
              <div
                className="flex items-center gap-2 w-fit justify-end"
                onClick={() => navigate(`/products/semua-produk`)}
              >
                <h4 className="text-sm tracking-tight">Lihat semua</h4>{" "}
                <ChevronRight />
              </div>
            </div>

            <div className="carousel mt-6">
              <ProductSection scrollDirection="x" />
            </div>
          </div>

          <div className="md:w-full w-[350px] mt-10">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                Paket Hemat
              </h1>
              <div
                className="flex items-center gap-2 w-fit justify-end"
                onClick={() => navigate(`/products/paket-hemat`)}
              >
                <h4 className="text-sm tracking-tight">Lihat semua</h4>{" "}
                <ChevronRight />
              </div>
            </div>

            <div className="carousel mt-6">
              <ProductSection scrollDirection="x" filter="byPrice" />
            </div>
          </div>

          <div className="md:w-full w-[350px] mt-8">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-2xl font-semibold w-1/2 text-[#543017]">
                Terlaris
              </h1>
              <div
                className="flex items-center gap-2 w-fit justify-end"
                onClick={() => navigate(`/products/terlaris`)}
              >
                <h4 className="text-sm tracking-tight">Lihat semua</h4>{" "}
                <ChevronRight />
              </div>
            </div>
            <div className="carousel mt-6">
              <ProductSection scrollDirection="x" filter="bySold" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
