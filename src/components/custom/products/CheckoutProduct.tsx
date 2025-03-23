import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";

type MenuProps = {
  product_id: string;
  menu?: VoidFunction;
  price: number;
  stock: number;
};

const CheckoutProduct = ({ menu, price, product_id, stock }: MenuProps) => {
  const [qty, setQty] = useState(0);
  const [firstName, setFirstName] = useState("");

  const formatPrice = (price: number) => {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handlePayment = async () => {
    try {
      if (stock < 1 || qty > stock) {
        alert("Stok tidak mencukupi");
        return;
      }

      const response = await axiosInstance.post("api/transactions", {
        first_name: firstName,
        product_id: product_id,
        quantity: qty,
        amount: price * qty,
      });

      console.log(response.data.midtrans_url);

      if (response.status == 200) {
        if (response.data.midtrans_url) {
          window.location.href = response.data.midtrans_url;
        } else {
          alert("Gagal mendapatkan URL pembayaran.");
          console.error("URL pembayaran Midtrans tidak ditemukan.");
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat memproses pembayaran");
    }
  };

  return (
    <>
      <div
        className="min-h-full w-screen flex flex-col px-7
        rounded-t-lg
         bg-neutral-50"
      >
        <div className="absolute top-7 left-7 w-full flex items-center gap-2">
          <ChevronLeft onClick={menu} className="" size={"2rem"} />

          <h4 className="text-lg font-bold">Checkout</h4>
        </div>

        <div className="mt-20">
          <h4 className="">Harga Produk : {formatPrice(price)}</h4>
          {/* <h4>{price}</h4> */}

          <h4>Stok : {stock ? stock : 0}</h4>
          <div className="flex gap-2">
            <h4 className="mt-7">Jumlah Produk :</h4>
            <div className="w-1/2 flex gap-2 py-5">
              <Button
                color="#"
                className="w-[50px]"
                onClick={() => setQty((prev) => (prev !== 0 ? prev - 1 : prev))}
              >
                <Minus />
              </Button>
              <h2 className="w-full text-center flex justify-center items-center bg-neutral-100 rounded-lg">
                {qty}
              </h2>
              <Button
                color="#"
                className="w-[50px]"
                onClick={() => setQty((prev) => prev + 1)}
              >
                <Plus />
              </Button>
            </div>
          </div>
          <h4>Total : {formatPrice(price * qty)}</h4>
          <form>
            <Label>
              Nama:
              <Input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="masukkan nama mu"
                type="text"
              />
            </Label>
          </form>

          <Button type="submit" onClick={handlePayment}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
