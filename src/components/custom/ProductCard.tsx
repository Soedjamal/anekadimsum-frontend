import { Dot, ShoppingBag, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  id?: number;
  name: string;
  price: number;
  sold?: number;
  imageUrl: string;
  stock?: number;
};

const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  sold = 0,
  stock = 0,
}: ProductCardProps) => {
  const navigate = useNavigate();

  console.log(name.slice(1, 15));

  //navigasi  ke ..

  return (
    <>
      <div
        onClick={() => navigate(`/product/${id}`)}
        className="product-card rounded-lg w-[220px] h-[320px] flex-shrink-0 relative"
      >
        <div className="product-image w-full h-[220px] rounded-t-lg">
          <img
            src={imageUrl}
            alt=""
            className="bg-card-foreground w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="product-info rounded-b-lg py-2 w-full h-[100px] bg-background border-none">
          <h4 className="text-lg font-normal text-neutral-800">
            {name.length >= 16 ? name.slice(0, 15) + "..." : name}
          </h4>
          <h4 className="text-xl font-bold text-foreground">
            {Intl.NumberFormat("id-ID", {
              currency: "IDR",
              style: "currency",
              maximumFractionDigits: 0,
            }).format(price)}
          </h4>
          <div className="flex items-center absolute bottom-0 justify-between w-full text-primary-foreground ">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-[1rem]" />
              <h4 className="stext-sm">{sold} Terjual</h4>
            </div>
            <div className="flex items-center">
              <h4 className="stext-sm">Stok : {stock}</h4>
            </div>
          </div>
          {/* <h4 className="px-2 text-sm bg-card-foreground w-fit rounded-full text-background"> */}
          {/*   varian: ayam */}
          {/* </h4> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
