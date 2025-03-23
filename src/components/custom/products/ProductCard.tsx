import { generateSlug } from "@/utils/generateSlug";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  id?: number;
  name: string;
  price: number;
  sold?: number;
  imageUrl: string;
  stock?: number;
  orderBy?: string;
};

const ProductCard = ({ id, name, price, imageUrl, sold }: ProductCardProps) => {
  const navigate = useNavigate();

  const soldFormat = (soldVal: number) => {
    if (soldVal >= 100) {
      return "100+";
    } else if (soldVal >= 500) {
      return "500+";
    } else if (soldVal >= 1000) {
      return "1000+";
    }
    return soldVal;
  };

  return (
    <>
      <div
        onClick={() => navigate(`/product/${generateSlug(name)}/${id}`)}
        className="product-card rounded-lg w-[220px] h-[320px] flex-shrink-0 relative"
      >
        <div className="product-image w-full h-[220px] border-[1px] rounded-lg ">
          <img
            src={imageUrl}
            alt=""
            className="bg-card-foreground w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="product-info rounded-b-lg py-2 w-full h-[100px] bg-neutral-50 border-none">
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
          <div className="flex items-center gap-2 w-full text-neutral-500 ">
            <div className="flex items-center gap-2">
              <h4 className="text-sm">{sold ? sold : 0} Terjual</h4>
            </div>
            {/* <h1>|</h1> */}
            {/* <div className="flex items-center"> */}
            {/*   <h4 className="text-sm">Stok : {stock}</h4> */}
            {/* </div> */}
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
