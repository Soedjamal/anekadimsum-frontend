import { axiosInstance } from "@/lib/axios";
import { ProductType } from "@/types/ProductType";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Package, Box, Star } from "lucide-react";

const fetchProducts = async () => {
  const { data } = await axiosInstance.get("/api/products");
  return data;
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

const Card = ({ icon, title, value }: CardProps) => (
  <div className="bg-white shadow-md rounded-lg p-4 md:w-full">
    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
      {icon}
      {title}
    </div>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

const DashboardCards = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <p className="p-4 text-gray-500">Loading data...</p>;
  }

  const totalProducts = products.length;
  const totalSold = products.reduce(
    (sum: number, item: ProductType) => sum + item.sold,
    0,
  );
  const totalStock = products.reduce(
    (sum: number, item: ProductType) => sum + item.stock,
    0,
  );
  const bestSeller = products.reduce(
    (max: ProductType, item: ProductType) =>
      item.sold > max.sold ? item : max,
    products[0],
  );

  return (
    <div className="p-4 transition-all md:pt-20 w-full min-h-screen">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <Card
          icon={<Box className="text-blue-500" />}
          title="Total Produk"
          value={totalProducts}
        />

        <Card
          icon={<ShoppingCart className="text-green-500" />}
          title="Total Terjual"
          value={totalSold}
        />

        <Card
          icon={<Package className="text-yellow-500" />}
          title="Stok Tersedia"
          value={totalStock}
        />

        <div
          className="bg-white shadow-md rounded-lg p-4
          flex items-center gap-4 w-full"
        >
          <img
            src={bestSeller.thumbnail}
            alt={bestSeller.name}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-pink-500" />
              Produk Terlaris
            </div>
            <p className="text-md font-semibold text-gray-800">
              {bestSeller.name}
            </p>
            <p className="text-xs text-gray-500">Terjual: {bestSeller.sold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
