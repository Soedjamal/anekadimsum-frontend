import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { axiosInstance } from "@/lib/axios";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  CheckCircle,
  ChevronLeft,
  LoaderCircle,
  Minus,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";

type MenuProps = {
  product_id?: string | number;
  menu?: VoidFunction;
  name?: string;
  price: number;
  stock: number;
  thumbnail?: string;
};

const CheckoutProduct = ({
  menu,
  name,
  price,
  product_id,
  stock,
  thumbnail,
}: MenuProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [qty, setQty] = useState(0);
  const [firstName, setFirstName] = useState("");

  const formatPrice = (price: number) => {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    const customerName = localStorage.getItem("payment");
    if (customerName) {
      setFirstName(customerName);
    }
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      if (stock < 1 || qty > stock) {
        toast({
          title: "Gagal",
          description: "Stok tidak mencukupi",
          variant: "destructive",
        });
        return;
      }

      localStorage.setItem("payment", firstName);

      const response = await axiosInstance.post("api/transactions", {
        first_name: firstName,
        product_id: product_id,
        quantity: qty,
        amount: price * qty,
      });

      if (response.status === 200) {
        const snapToken = response.data.snap_token;

        window.snap.pay(snapToken, {
          onSuccess: function (result) {
            console.log("Pembayaran sukses:", result);
            toast({
              title: "Pembayaran Berhasil",
              description: "Pesanan Anda telah berhasil dibayar.",
            });
          },
          onPending: function (result) {
            console.log("Pembayaran pending:", result);
            toast({
              title: "Menunggu Pembayaran",
              description:
                "Pembayaran Anda masih pending. Silakan selesaikan transaksi.",
            });
          },
          onError: function (result) {
            console.log("Pembayaran gagal:", result);
            toast({
              title: "Pembayaran Gagal",
              description: "Terjadi kesalahan saat memproses pembayaran.",
              variant: "destructive",
            });
          },
          onClose: function () {
            console.log("User menutup modal tanpa menyelesaikan pembayaran.");
            toast({
              title: "Transaksi Dibatalkan",
              description: "Anda menutup pembayaran sebelum menyelesaikannya.",
            });
          },
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat memproses pembayaran.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="min-h-full w-screen flex flex-col px-7 md:px-36 lg:relative lg:px-10 lg:w-1/2
        rounded-t-lg
         bg-neutral-50"
      >
        <div className="absolute top-7 left-7 md:left-36 lg:left-10 w-full flex items-center gap-2">
          <ChevronLeft onClick={menu} className="" size={"2rem"} />

          <h4 className="text-lg font-bold">Checkout</h4>
        </div>

        <div className="mt-20">
          <div className="product-card flex gap-4">
            <div>
              <img
                className="w-[80px] h-[80px] object-cover"
                src={thumbnail}
                alt=""
              />
            </div>
            <div>
              <h4>{name}</h4>
              <h4 className=""> {formatPrice(price)}</h4>

              <h4>Stok : {stock ? stock : 0}</h4>
            </div>
          </div>

          {/* <h4>{price}</h4> */}

          <div className="flex gap-2">
            {/* <h4 className="mt-7">Jumlah Produk :</h4> */}
            <div className="w-1/2 md:max-w-[300px] flex gap-2 py-5">
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
                onClick={() =>
                  setQty((prev) => (prev !== stock ? prev + 1 : prev + 0))
                }
              >
                <Plus />
              </Button>
            </div>
          </div>
          <h4 className="mt-4">Total Harga: {formatPrice(price * qty)}</h4>

          <div>
            <form className="border-neutral-700 mt-5 border-t-[1px]">
              <Label className="mt-5">
                Nama Pemesan:
                <Input
                  name="name"
                  value={firstName}
                  className="mt-3 placeholder:text-primary hover:ring-primary"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="masukkan nama mu"
                  type="text"
                />
              </Label>
            </form>

            <Button
              disabled={loading}
              className="w-full mt-5"
              type="submit"
              onClick={handlePayment}
            >
              Bayar Sekarang <CheckCircle />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
