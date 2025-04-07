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

const ProductsAdmin = () => {
  const queryQlient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const { mutate } = useMutation({
    mutationFn: deleteProductById,
    onSuccess: () =>
      queryQlient.invalidateQueries({
        queryKey: ["products"],
      }),
  });

  const handleDelete = (id: string) => {
    mutate(id);
  };

  return (
    <>
      <div className="flex py-10 min-h-screen">
        <ProductTable products={products} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default ProductsAdmin;
