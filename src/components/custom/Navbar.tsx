import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import { DropdownMenuDemo } from "./DropdownMenu";
import { useEffect, useState } from "react";

type NavType = {
  pathHref: string;
  title: string;
};

const navData: { pathHref: string; title: string }[] = [
  {
    pathHref: "/",
    title: "Home",
  },
  {
    pathHref: "#",
    title: "About",
  },
  {
    pathHref: "#products",
    title: "Products",
  },
  {
    pathHref: "#",
    title: "Contact",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = setScroll(window.scrollY > 5);

    window.addEventListener("scroll", () => onScroll);

    return () => window.removeEventListener("scroll", () => onScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between md:px-36 md:py-6 px-8 py-4 w-full gap-8 fixed items-center ${
          scroll ? "bg-white" : "bg-transparent"
        } `}
      >
        <div className="flex items-center gap-8">
          <div className="nav-logo w-8 h-8 bg-[#543017] rounded-md">
            <img src="" alt="" />
          </div>
          <ul className="md:flex gap-8 hidden">
            {navData.map((item: NavType, index) => (
              <li key={index}>
                {item.pathHref.slice(0, 1) === "#" ? (
                  <a href={item.pathHref}>{item.title}</a>
                ) : (
                  <Link
                    className={
                      pathname.slice(1) === item.title.toLowerCase
                        ? "text-[#543017] font-semibold"
                        : ""
                    }
                    to={item.pathHref}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <SearchInput />
        </div>
        <div className="md:hidden ">
          <DropdownMenuDemo />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
