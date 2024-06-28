import ProductCard from "./ProductCard"

function ProductsGrid() {
    return (
        <div className="bg-gray-300 w-3/4 p-8 grid grid-cols-4 gap-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
        </div>
    )
}

export default ProductsGrid
