import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../content/SearchInput";
import { DropdownMenuDemo } from "../content/DropdownMenu";

type NavType = {
  pathHref: string;
  title: string;
};

const navData: NavType[] = [
  { pathHref: "/", title: "Home" },
  { pathHref: "#about", title: "About" },
  { pathHref: "/products", title: "Products" },
  { pathHref: "#contact", title: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 5);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` flex justify-between z-10 md:px-36 md:py-6 px-8  py-4 w-full gap-8 fixed items-center transition-all duration-300 ${
        scroll ? "bg-white shadow-md md:px-24 md:py-4" : "bg-transparent"
      }
`}
    >
      <div className="flex items-center gap-0 md:gap-8">
        <div className="nav-logo w-9 h-9  rounded-md">
          <img src="/images/anekadimsum-ico.png" alt="" />
        </div>

        <ul className="md:flex gap-8 hidden">
          {navData.map((item, index) => (
            <li key={index}>
              {item.pathHref.startsWith("#") ? (
                <a href={item.pathHref} className="hover:text-[#543017]">
                  {item.title}
                </a>
              ) : (
                <Link
                  to={item.pathHref}
                  className={`${
                    pathname === item.pathHref
                      ? "text-[#543017] font-semibold"
                      : ""
                  } hover:text-[#543017]`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SearchInput />
      </div>

      <div className="md:hidden">
        <DropdownMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
