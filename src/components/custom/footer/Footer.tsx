import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row md:items-start md:justify-between
        px-7 md:px-36 py-10 border-t-[1px] bg-neutral-50"
      >
        <div className="w-fit md:w-1/3 ">
          <div className="flex items-center h-12 overflow-hidden w-fit ">
            <img className="w-24" src="/images/anekadimsum-logo.png" alt="" />
          </div>
          <h4 className="w-1/2 md:w-full mt-2 text-foreground">
            Menyediakan dimsum homemade berkualitas, partner terpercaya untuk
            kebutuhan dimsum anda
          </h4>
        </div>
        <div className="mt-10 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <div className="flex flex-col mt-3 gap-2">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <Link to="/products">Products</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex mt-3 gap-2">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
      <div
        className="flex w-full px-10 py-4
      bg-neutral-50  border-t-[1px]
      justify-center text-white"
      >
        <h4 className="text-neutral-800">
          &copy; {new Date().getFullYear()} Aneka Dimsum, All rights reserved{" "}
        </h4>
      </div>
    </>
  );
};

export default Footer;
