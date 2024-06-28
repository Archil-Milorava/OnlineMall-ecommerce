import ProductsFilterAll from "./_components/ProductsFilterAll";
import ProductsGrid from "./_components/ProductsGrid";

async function page() {
  return (
    <div className="h-full max-w-screen gap-3 flex m-4 mt-20 ">
      <ProductsGrid />

      <ProductsFilterAll />
    </div>
  );
}

export default page;
