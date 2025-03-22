const Footer = () => {
  return (
    <div className="flex w-full p-10  bg-neutral-800 text-white">
      &copy; {new Date().getFullYear()} Aneka Dimsum, All rights reserved{" "}
    </div>
  );
};

export default Footer;
