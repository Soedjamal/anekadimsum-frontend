import { CarouselPlugin } from "@/components/custom/Carousel";

const Home = () => {
  return (
    <>
      <section className="hero flex w-full md:px-36 md:justify-start from-white to-[#F8F4E1] bg-gradient-to-br justify-center items-center md:pt-0 pt-20 gap-8 py-20 min-h-screen">
        <div className="hero-content flex lg:flex-row flex-col items-center h-fit gap-16 mt-36">
          <div className="hero-img w-[350px] h-[350px] bg-[#543017] rounded-lg">
            <img src="" alt="" />
          </div>

          <div className="">
            <div className="hero-title">
              <h1 className="text-5xl font-bold text-[#543017]">Aneka</h1>
              <h1 className="text-5xl font-bold text-[#AD8862]">Dimsum</h1>
            </div>

            <p className="hero-description lg:w-[400px] w-[350px] md:first-line:text-lg mt-4">
              Dimsum fresh, lezat, dan halal dengan isian melimpah! Dibuat dari
              bahan berkualitas dan bumbu autentik, siap menemani setiap momen
              spesialmu. Pesan sekarang dan nikmati kelezatannya!
            </p>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="flex w-full md:px-36 md:justify-start justify-center items-center md:pt-0 pt-20 gap-8 min-h-screen"
      >
        <div className="md:w-[400px] w-[350px]">
          <h1 className="text-5xl font-bold mt-16">Dimsum Terfavorit</h1>
          <div className="carousel mt-10">
            <CarouselPlugin />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
