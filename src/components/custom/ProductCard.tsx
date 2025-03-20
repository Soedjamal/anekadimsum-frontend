import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  const navigate = useNavigate();

  console.log(name.slice(1, 15));

  //navigasi  ke ..

  return (
    <>
      <div
        onClick={() => navigate(`/product/${id}`)}
        className="product-card rounded-lg w-[250px] min-h-[300px] bg-neutral-300 flex-shrink-0"
      >
        <div className="product-image w-full h-[250px] overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt="" />
        </div>
        <div className="product-info rounded-b-lg px-4 py-4 w-full h-[100px] bg-neutral-100">
          <h4 className="text-lg font-semibold text-neutral-800">
            {name.length >= 16 ? name.slice(0, 15) + "..." : name}
          </h4>
          <h4 className="text-xl font-bold text-[#AD8862]">
            {Intl.NumberFormat("id-ID", {
              currency: "IDR",
              style: "currency",
              maximumFractionDigits: 0,
            }).format(price)}
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
