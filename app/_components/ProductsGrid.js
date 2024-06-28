import ProductCard from "./ProductCard";

async function ProductsGrid() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json()
   if(!data.length) return null;

  return (
    <div className="bg-gray-300 w-3/4 p-8 grid grid-cols-4 gap-10">
      {data.map((item) => (
        <ProductCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductsGrid;
