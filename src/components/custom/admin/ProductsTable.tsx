import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  price: number;
  thumbnail: string;
  stock: number;
  sold: number;
};

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductTable = ({ products, onDelete }: ProductTableProps) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto md:overflow-x-clip w-full bg-background p-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-semibold mb-4">Daftar Produk Dimsum</h2>
        <Button onClick={() => navigate("/admin/product/create")}>
          Tambah Produk +
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Stok</TableHead>
            <TableHead>Terjual</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-16 h-16 rounded object-cover"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(product.price)}
              </TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sold}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      navigate(`/admin/product/${product._id}/edit`)
                    }
                  >
                    <Pencil size={16} className="mr-1" /> Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(product._id)}
                  >
                    <Trash2 size={16} className="mr-1" /> Hapus
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
