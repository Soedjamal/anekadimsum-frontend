import ProductCard from "./ProductCard";

const productData = [
  {
    id: 1,
    name: "Dimsum",
    price: 10000,
  },
  {
    id: 2,
    name: "Dimsum",
    price: 20000,
  },
];

const ProductSection = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="product-scrollX flex w-full gap-x-4 overflow-x-auto">
          {productData.map((product, index) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl=""
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
