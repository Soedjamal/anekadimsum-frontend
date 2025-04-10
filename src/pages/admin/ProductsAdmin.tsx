import ProductTable from "@/components/custom/admin/ProductsTable";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAllProducts = async () => {
  const response = await axiosInstance.get("/api/products");
  return response.data;
};

const deleteProductById = async (id: string) => {
  const response = await axiosInstance.delete(`/api/products/${id}`);
  return response.data;
};

const resetProductValue = async () => {
  const response = await axiosInstance.delete("/api/products/del");
  return response.data;
};

const ProductsAdmin = () => {
  const queryQlient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProductById,
    onSuccess: () =>
      queryQlient.invalidateQueries({
        queryKey: ["products"],
      }),
  });

  const resetMutation = useMutation({
    mutationFn: resetProductValue,
    onSuccess: () =>
      queryQlient.invalidateQueries({
        queryKey: ["products"],
      }),
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleReset = () => {
    resetMutation.mutate();
  };

  return (
    <>
      <div className="flex py-16 min-h-screen">
        <ProductTable
          products={products}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </div>
    </>
  );
};

export default ProductsAdmin;
