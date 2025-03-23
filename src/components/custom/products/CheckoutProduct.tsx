import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

type MenuProps = {
  menu?: VoidFunction;
};

const CheckoutProduct = ({ menu }: MenuProps) => {
  const [qty, setQty] = useState(0);

  return (
    <>
      <div
        className="min-h-full w-screen flex justify-center flex-col
        rounded-t-lg
        relative
        items-center bg-neutral-50"
      >
        <div className="absolute top-7 left-7 w-full flex items-center gap-2">
          <Button onClick={menu} className="bg-neutral-50 min-w-[2rem]">
            <X className="" size={"2rem"} />
          </Button>

          <h4 className="text-lg">Panel Chcekout</h4>
        </div>

        <h4>Jumlah</h4>
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
    </>
  );
};

export default CheckoutProduct;
