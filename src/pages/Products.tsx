import { CarouselPlugin } from "@/components/custom/Carousel";
import ProductSection from "@/components/custom/ProductSection";

const Products = () => {
  return (
    <>
      <div className="main-content">
        <section
          id="products"
          className="flex flex-col w-full md:justify-start md:px-36 justify-center items-center md:pt-20 py-20 gap-8 min-h-screen"
        >
          <div className="md:w-full w-[350px] text-[#AD8862]">
            <h1 className="text-5xl font-bold mt-16 w-64">Dimsum Ayam</h1>
            <div className="carousel mt-10">
              <ProductSection />
            </div>
          </div>

          <div className="md:w-full w-[350px] text-[#AD8862]">
            <h1 className="text-5xl font-bold mt-16 w-64">Dimsum Juwamur</h1>
            <div className="carousel mt-10">
              <ProductSection />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
