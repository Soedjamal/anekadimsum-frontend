import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Package, Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Button Toggle */}
      <button
        className="p-2 text-gray-500 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 transition-transform transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        <h2 className="text-lg font-semibold mb-4">Admin Dashboard</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
          >
            <Home size={20} /> Dashboard
          </Link>
          <Link
            to="/dashboard/products"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
          >
            <Package size={20} /> Products
          </Link>
          <Link
            to="/users"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
          >
            <Users size={20} /> Users
          </Link>
        </nav>
      </aside>

      {/* Overlay ketika sidebar terbuka di mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
