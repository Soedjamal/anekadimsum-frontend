import { BestSellerProductsCarousel } from "@/components/custom/products/ProductBestSellerCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKEY = import.meta.env.VITE_PUBLIC_KEY;

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKEY,
      );
      console.log("success", response.status, response.text);

      setStatus("Message send successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("failed", error);
      setStatus("Failed to send message, Please try again later");
    }
  };

  return (
    <>
      <div className="main-content w-full">
        <section
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50 justify-center lg:justify-start 
          items-center md:items-center md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex md:flex-row-reverse flex-col items-center h-fit gap-8 md:mt-36">
            <div className="hero-img w-[350px] md:max-w-[400px] h-[350px] rounded-lg">
              <img src="/images/dimsum-hero.png" alt="" />
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
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50 justify-center lg:justify-start
          items-center md:items-center md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex md:flex-row-reverse flex-col-reverse items-center h-fit  gap-8 md:mt-36">
            <div className="hero-img w-[350px] md:max-w-[400px] h-auto rounded-lg">
              <BestSellerProductsCarousel />
            </div>

            <div className="">
              <div className="hero-title">
                <h1 className="text-5xl font-bold w-64 text-foreground">
                  Dimsum Best Seller
                </h1>
              </div>

              <p className="hero-description md:max-w-[400px] w-[350px] md:text-lg mt-4">
                Dimsum best seller adalah hidangan favorit dengan isian lezat
                seperti ayam, udang, atau jamur, dibungkus kulit tipis dan
                dikukus hingga lembut. Rasanya gurih, teksturnya kenyal, dan
                sangat menggugah selera.
              </p>

              <Button className=" mt-5" onClick={() => navigate("/products")}>
                Cek Produk Selengkapnya
              </Button>
            </div>
          </div>
        </section>

        {/* <section */}
        {/*   id="products" */}
        {/*   className="flex w-full bg-neutral-50 pb-36 md:px-36 md:justify-start justify-center border-2 */}
        {/*   md:pt-0 pt-20 gap-8 min-h-screen relative" */}
        {/* > */}
        {/*   <div */}
        {/*     className="flex flex-col md:flex-row md:gap-20 md:max-w-[400px] w-[350px] */}
        {/*     border-2 border-red-300 text-[#AD8862]" */}
        {/*   > */}
        {/*     <div> */}
        {/*       <h1 className="text-5xl font-bold mt-16 w-64 text-foreground"> */}
        {/*         Dimsum Best Seller */}
        {/*       </h1> */}
        {/**/}
        {/*       <p className="hero-description md:max-w-auto w-[350px] md:text-lg mt-4"> */}
        {/* Dimsum best seller adalah hidangan favorit dengan isian lezat */}
        {/* seperti ayam, udang, atau jamur, dibungkus kulit tipis dan */}
        {/* dikukus hingga lembut. Rasanya gurih, teksturnya kenyal, dan */}
        {/* sangat menggugah selera. */}
        {/*       </p> */}
        {/**/}
        {/*       <Button className=" mt-10" onClick={() => navigate("/products")}> */}
        {/*         Cek Produk Selengkapnya */}
        {/*       </Button> */}
        {/*     </div> */}
        {/*     <div className="mt-10"> */}
        {/*       <BestSellerProductsCarousel /> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </section> */}

        <section
          id="about"
          className="hero flex w-full md:px-36 md:justify-start bg-neutral-50 justify-center items-center
          md:pt-0 pt-20 gap-8 py-20 min-h-screen"
        >
          <div className="hero-content flex flex-col items-center h-fit gap-8 md:mt-36 w-full">
            <div className="hero-title w-full text-center">
              <h1 className="text-5xl font-bold text-[#543017]">
                Tentang Kami
              </h1>
            </div>
            <div className="hero-img w-auto h-auto md:w-full relative">
              <img
                className="w-full h-[200px] object-cover aspect-video"
                src="/images/about-img.jpg"
                alt=""
              />
              <div className="absolute w-full h-[200px] p-4 md:p-6 bg-black bg-opacity-70 top-0">
                <h2 className="text-white text-xl font-bold">Aneka Dimsum</h2>
                <h2 className="text-white text-lg font-bold leading-5 mt-3 md:w-3/4">
                  Lebih dari sekedar makanan. ini tentang pengalaman rasa yang
                  tak terlupakan
                </h2>
              </div>
            </div>

            <div className="md:text-center">
              <p
                className="hero-description md:w-full
                w-[350px] md:text-lg mt-4 text-start"
              >
                Selamat datang di Aneka Dimsum, tempat terbaik untuk menikmati
                dimsum homemade berkualitas! Kami menyajikan dimsum segar dengan
                bahan pilihan, kulit lembut, dan isian melimpah. Nikmati
                berbagai pilihan rasa dengan saus khas yang menggugah selera.
                Cocok untuk camilan atau makan bersama keluarga.
              </p>

              <div
                className="card-info mt-6 flex flex-col 
                md:flex-row gap-8  md:w-full items-center md:justify-between"
              >
                <div
                  className="icon bg-primary
                  flex flex-col justify-center items-center
                  w-[350px] h-[350px] md:max-w-[300px] md:max-h-[300px] border-2 rounded-lg p-4"
                >
                  <div className="logo">
                    <img
                      className="w-24"
                      src="/images/hand-money-income-dollar-icon.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl font-bold">Harga Bersahabat</h1>
                  <p className="text-center mt-2">
                    Kelezatan premium dengan harga yang tetap terjangkau
                  </p>
                </div>

                <div
                  className="icon bg-primary
                  flex flex-col justify-center items-center
                  w-[350px] h-[350px] md:max-w-[300px] md:max-h-[300px] border-2 rounded-lg p-4"
                >
                  <div className="logo">
                    <img
                      className="w-24"
                      src="/images/fruit-basket-icon.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl font-bold">Fresh Setiap Hari</h1>
                  <p className="text-center mt-2">
                    Dibuat dengan bahan pilihan
                  </p>
                </div>

                <div
                  className="icon bg-primary
                  flex flex-col justify-center items-center
                  w-[350px] h-[350px] md:max-w-[300px] md:max-h-[300px] border-2 rounded-lg p-4"
                >
                  <div className="logo">
                    <img
                      className="w-24"
                      src="/images/family-icon.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl font-bold">Pelayanan Ramah</h1>
                  <p className="text-center mt-2">
                    Kepuasan & Kenyamanan pelanggan adalah prioritas kami
                  </p>
                </div>
              </div>
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
                <p className="w-[350px] md:w-full mt-4">
                  Tertarik dengan dimsum lezat kami? Jangan ragu untuk
                  menghubungi kami! Baik untuk pemesanan, kerja sama, atau
                  sekadar bertanya, kami siap melayani Anda. Hubungi kami
                  melalui WhatsApp, email, atau media sosial. Kami senang bisa
                  membantu!
                </p>
              </div>

              <div className="flex mt-8">
                <form
                  className="flex flex-col gap-4 w-full lg:w-1/2"
                  onSubmit={handleSubmit}
                >
                  <label>
                    Nama Pengirim:
                    <Input
                      name="name"
                      value={formData.name}
                      className="mt-3"
                      type="text"
                      placeholder="Masukkan nama mu"
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Email Pengirim
                    <Input
                      name="email"
                      value={formData.email}
                      className="mt-3"
                      type="email"
                      placeholder="Masukkan email mu"
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Pesan:
                    <Textarea
                      value={formData.message}
                      placeholder="Tulis pesan mu"
                      name="message"
                      className="min-h-[100px] max-h-[250px] w-full mt-3"
                      onChange={handleChange}
                    ></Textarea>
                  </label>
                  <Button className="w-full mt-4" type="submit">
                    Kirim
                  </Button>
                  {status && (
                    <p
                      className={`text-center mt-4 text-sm ${
                        status.includes("successfully")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>

                <div className="hidden lg:flex">
                  <Phone />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
