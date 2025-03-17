import {
  AlignJustify,
  CreditCard,
  Home,
  Keyboard,
  LogOut,
  Phone,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

const navData: { icon: any; pathHref: string; title: string }[] = [
  {
    icon: <Home />,
    pathHref: "/",
    title: "Home",
  },
  {
    icon: <User />,
    pathHref: "#",
    title: "About",
  },
  {
    icon: <ShoppingCart />,
    pathHref: "#products",
    title: "Products",
  },
  {
    icon: <Phone />,
    pathHref: "#",
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
