import {
  AlignJustify,
  Home,
  LogOut,
  Phone,
  ShoppingCart,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

const navData = [
  {
    icon: <Home />,
    pathHref: "/",
    title: "Home",
  },
  {
    icon: <User />,
    pathHref: "#about",
    title: "About",
  },
  {
    icon: <ShoppingCart />,
    pathHref: "/products",
    title: "Products",
  },
  {
    icon: <Phone />,
    pathHref: "#contact",
    title: "Contact",
  },
];

export function DropdownMenuDemo() {
  const { pathname } = useLocation();

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
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
