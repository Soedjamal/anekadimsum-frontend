import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";

interface Product {
  _id: string;
  name: string;
  price: number;
  thumbnail: string;
  stock: number;
  sold: number;
}

const CreateProductForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    price: 0,
    stock: 0,
    sold: 0,
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [error, setError] = useState<string>("");

  const updateMutation = useMutation({
    mutationFn: async (updatedProduct: FormData) => {
      const response = await axiosInstance.post(
        `/api/products/`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/admin/products");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setError(error.response?.data?.message || "Failed to update product");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price" || name === "stock" || name === "sold") {
      setProduct({ ...product, [name]: parseFloat(value) || 0 });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !product.name ||
      product.price === undefined ||
      product.stock === undefined
    ) {
      setError("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name || "");
    formData.append("price", product.price.toString());
    formData.append("stock", product.stock.toString());

    if (thumbnailFile) {
      formData.append("thumbnail", thumbnailFile);
    }

    updateMutation.mutate(formData);
  };

  return (
    <div className="container mx-auto md:pt-20 pb-8 md:w-full min-h-screen">
      <Button
        variant="outline"
        className="mb-6 flex items-center gap-2"
        onClick={() => navigate("/admin/products")}
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali
      </Button>

      <Card className="w-full md:min-w-[600px] md:max-w-[800px] max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Tambahkan Produk</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {error && (
              <Alert className="bg-red-100 border-red-400 text-red-700">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">
                Nama Produk <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="font-medium">
                Harga <span className="text-red-500">*</span>
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleInputChange}
                className="w-full"
                min={0}
                step={0.01}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock" className="font-medium">
                Stok <span className="text-red-500">*</span>
              </Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                value={product.stock}
                onChange={handleInputChange}
                className="w-full"
                min={0}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail" className="font-medium">
                Foto Produk
              </Label>

              {thumbnailPreview && (
                <div className="mt-2 mb-4">
                  <img
                    src={thumbnailPreview}
                    alt="Product thumbnail"
                    className="min-w-40 min-h-40 w-full h-full object-cover rounded-md border border-gray-200"
                  />
                </div>
              )}

              <Input
                id="thumbnail"
                name="thumbnail"
                type="file"
                onChange={handleFileChange}
                className="w-full"
                accept="image/*"
              />
              <p className="text-sm text-gray-500">
                Biarkan kosong untuk tetap menggunakan foto produk saat ini
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/products")}
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="flex items-center gap-2"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Tambahkan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateProductForm;
