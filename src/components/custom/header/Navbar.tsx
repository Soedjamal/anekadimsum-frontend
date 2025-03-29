import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchInput from "../content/SearchInput";
import { DropdownMenuDemo } from "../content/DropdownMenu";

type NavType = {
  pathHref: string;
  title: string;
};

const navData: NavType[] = [
  { pathHref: "/", title: "Home" },
  { pathHref: "/#about", title: "About" },
  { pathHref: "/products", title: "Products" },
  { pathHref: "/#contact", title: "Contact" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleScroll = () => setScroll(window.scrollY > 5);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hash]);

  return (
    <div
      className={`w-full bg-background z-10 fixed transition-all duration-300 
       ${scroll ? "bg-background shadow-md " : "bg-background border-b-[1px] border-foreground"}
      `}
    >
      <nav
        className={` flex w-full max-w-4xl justify-between mx-auto
        md:py-6 px-8 md:px-0 py-4 gap-8 items-center `}
      >
        <div className="flex items-center gap-0 md:gap-8">
          <div className="nav-logo w-9 h-9  rounded-md">
            <img src="/images/anekadimsum-ico.png" alt="" />
          </div>

          <ul className="md:flex gap-8 hidden">
            {navData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.pathHref}
                  className={`${
                    pathname === item.pathHref
                      ? "text-[#543017] font-semibold"
                      : ""
                  } hover:text-[#543017]`}
                  onClick={(e) => {
                    if (item.pathHref.startsWith("/#")) {
                      e.preventDefault();
                      const sectionId = item.pathHref.replace("/#", "");

                      if (pathname !== "/") {
                        navigate(`/#${sectionId}`);
                      } else {
                        const section = document.getElementById(sectionId);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                  }}
                >
                  {item.title}
                </Link>
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
    </div>
  );
};

export default Navbar;
