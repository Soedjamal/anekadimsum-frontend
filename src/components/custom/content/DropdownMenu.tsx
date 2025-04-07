import { AlignJustify, Home, Phone, ShoppingCart, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const navData = [
  {
    icon: <Home />,
    pathHref: "/",
    title: "Home",
  },
  {
    icon: <User />,
    pathHref: "/#about",
    title: "About",
  },
  {
    icon: <ShoppingCart />,
    pathHref: "/products",
    title: "Products",
  },
  {
    icon: <Phone />,
    pathHref: "/#contact",
    title: "Contact",
  },
];

export function DropdownMenuDemo() {
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
  }, [hash]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AlignJustify />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-8">
        <DropdownMenuGroup>
          {navData.map((item, index) => (
            <DropdownMenuItem key={index}>
              {item.icon}

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
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>{" "}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
