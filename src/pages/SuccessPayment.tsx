import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[50vh] flex flex-col justify-end items-center">
      <h4 className="text-3xl font-semibold">Pembayaran Berhasil</h4>

      <div className="flex gap-1">
        <h3>Terimakasih Telah Belanja Di</h3>
        <h3 className="text-foreground font-bold">Aneka</h3>
        <h3 className="text-primary font-bold">Dimsum</h3>
      </div>

      <Button className="mt-6 w-[200px]" onClick={() => navigate("/products")}>
        <ChevronLeft /> Kembali
      </Button>
    </div>
  );
};

export default SuccessPayment;
