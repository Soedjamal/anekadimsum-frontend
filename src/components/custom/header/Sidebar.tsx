import { Link } from "react-router-dom";
import { Menu, X, Package, Home, Users, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  name: string;
};

const Sidebar = () => {
  const { logout } = useAuth();

  const userData = localStorage.getItem("user");
  const user: User = userData ? JSON.parse(userData) : null;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex md:fixed w-full
        bg-popover gap-3 py-4 px-5 items-center md:justify-end"
      >
        <button
          className=" text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu className="text-foreground" size={24} />
          )}
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="text-lg">
              {user?.name.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold text-foreground">
            {user?.name}
          </h2>
        </div>
      </div>

      <aside
        className={cn(
          "fixed md:relative md:h-full inset-y-0 left-0 w-64 bg-foreground z-20 text-white p-4 flex flex-col transition-transform transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        <h2 className="text-lg font-semibold mb-8  text-white">Aneka Dimsum</h2>
        <nav className="space-y-2 relative flex flex-col h-full overflow-y-auto">
          <Link
            to={`/admin/dashboard`}
            className="flex items-center gap-2 p-2 text-white rounded hover:bg-card hover:text-black"
          >
            <Home size={20} /> Dashboard
          </Link>
          <Link
            to={`/admin/products`}
            className="flex items-center gap-2 p-2 text-white rounded hover:bg-card hover:text-black"
          >
            <Package size={20} /> Products
          </Link>
          <Link
            to={`/admin/users`}
            className="flex items-center gap-2 p-2 text-white rounded hover:bg-card hover:text-black"
          >
            <Users size={20} /> Users
          </Link>

          <button
            onClick={logout}
            className="absolute bottom-0 left-0 flex z-20
            items-center gap-2 w-full px-4 py-2 text-white rounded bg-popover-foreground
            hover:bg-popover transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black z-10 opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
