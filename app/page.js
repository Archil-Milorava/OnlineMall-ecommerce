import { Suspense } from "react";
import ProductsFilterAll from "./_components/ProductsFilterAll";
import ProductsGrid from "./_components/ProductsGrid";
import Loading from "./loading";

async function page() {
  return (
    <div className="h-full max-w-screen w-full gap-3 flex m-4 mt-20 ">
      <Suspense fallback={<Loading />}>
        <ProductsGrid  />
      </Suspense>
      <ProductsFilterAll />
    </div>
  );
}

export default page;
