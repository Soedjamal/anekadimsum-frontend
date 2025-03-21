import { CarouselPlugin } from "@/components/custom/content/Carousel";
import { BestSellerProductsCarousel } from "@/components/custom/products/ProductBestSellerCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-content w-full">
        <section
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50 justify-center 
          items-center md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex md:flex-row flex-col items-center h-fit gap-8 md:mt-36">
            <div className="hero-img w-[350px] md:max-w-[400px] h-[350px] bg-[#543017] rounded-lg">
              <img src="" alt="" />
            </div>

            <div className="">
              <div className="hero-title">
                <h1 className="text-5xl font-bold text-[#543017]">Aneka</h1>
                <h1 className="text-5xl font-bold text-[#AD8862]">Dimsum</h1>
              </div>

              <p className="hero-description md:max-w-[400px] w-[350px] md:text-lg mt-4">
                Dimsum fresh, lezat, dan halal dengan isian melimpah! Dibuat
                dari bahan berkualitas dan bumbu autentik, siap menemani setiap
                momen spesialmu. Pesan sekarang dan nikmati kelezatannya!
              </p>

              <Button className=" mt-5" onClick={() => navigate("/products")}>
                Order Sekarang
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="flex w-full bg-neutral-50 pb-36 md:px-36 md:justify-start justify-center
          md:pt-0 pt-20 gap-8 min-h-screen"
        >
          <div className="flex flex-col md:flex-row md:gap-20 md:max-w-[400px] w-[350px] text-[#AD8862]">
            <div>
              <h1 className="text-5xl font-bold mt-16 w-64 text-foreground">
                Dimsum Best Seller
              </h1>

              <p className="hero-description md:max-w-[400px] w-[350px] md:text-lg mt-4">
                Dimsum best seller adalah hidangan favorit dengan isian lezat
                seperti ayam, udang, atau jamur, dibungkus kulit tipis dan
                dikukus hingga lembut. Rasanya gurih, teksturnya kenyal, dan
                sangat menggugah selera.
              </p>

              <Button className=" mt-10" onClick={() => navigate("/products")}>
                Cek Produk Selengkapnya
              </Button>
            </div>
            <div className="carousel mt-10">
              <BestSellerProductsCarousel />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50 justify-center items-center
          md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex md:flex-row flex-col items-center h-fit gap-8 md:mt-36">
            <div className="hero-img w-[350px] md:max-w-[450px] h-[350px] bg-[#543017] rounded-lg">
              <img src="" alt="" />
            </div>

            <div className="">
              <div className="hero-title">
                <h1 className="text-5xl font-bold text-[#543017]">
                  Tentang Kami
                </h1>
              </div>

              <p className="hero-description lg:max-w-[400px] w-[350px] md:text-lg mt-4">
                Dimsum fresh, lezat, dan halal dengan isian melimpah! Dibuat
                dari bahan berkualitas dan bumbu autentik, siap menemani setiap
                momen spesialmu. Pesan sekarang dan nikmati kelezatannya!
              </p>

              <Button className=" mt-5">
                Order Sekarang
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50
           justify-center items-center md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex md:flex-row flex-col items-center h-fit gap-8 md:mt-36">
            <div className="">
              <div className="hero-title">
                <h1 className="text-5xl font-bold text-[#543017]">
                  Hubungi Kami
                </h1>
              </div>

              <form className="flex flex-col mt-8 gap-4">
                <label>
                  Nama Pengirim:
                  <Input type="text" placeholder="masukkan nama" />
                </label>
                <label>
                  Email Pengirim
                  <Input type="text" placeholder="masukkan email" />
                </label>
                <label>
                  Pesan:
                  <Textarea
                    placeholder="tulis pesan"
                    name=""
                    id=""
                    className="min-h-[100px] max-h-[250px] w-full"
                  ></Textarea>
                </label>
                <Button className="w-full mt-4">Kirim</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
