import imageExample from "@/public/1.jpeg";
import Image from "next/image";

function ProductCard({ data }) {
  const name = data.title.substring(0, 45);

  if (!data) return null;

  return (
    <div className=" relative h-96 w-56 bg-gray-500 flex flex-col justify-between cursor-pointer hover:bg-gray-500 group ">
      <div className="bg-white h-4/6 w-full flex items-center justify-center relative ">
        <img
          src={data.image}
          height="230"
          width="170"
          alt="/"
          quality={100}
          className="object-contain absolute max-h-44"
        />
      </div>
      <div className="max-h-40 py-2 px-1">
        <h1 className="text-gray-800 font-bold text-lg hover:text-gray-400 transition-all ">
          {name}
        </h1>
        <p className="text-gray-700 mb-2 text-gray-900">$ {data.price}</p>
      </div>
      <div className="absolute group-hover:bg-gray-500 inset-x-0  flex items-center transition-all justify-center">
        <button className="hidden text-gray-900  group-hover:block hover:text-gray-700 transition-colors">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
