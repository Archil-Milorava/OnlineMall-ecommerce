import Image from "next/image";
import imageExample from "@/public/1.jpeg";

function ProductCard() {
  return (
    <div className="h-96 w-56 bg-gray-500 flex flex-col justify-between">
      <div className="bg-gray-700 h-4/6 w-full flex items-center justify-center ">
        <Image
          src={imageExample}
          height="230"
          width="230"
          alt="/"
          quality={100}
          className="object-cover"
        />
      </div>
      <h1 className="text-gray-800 font-bold text-lg  ">T-shirt</h1>
      <p className="text-gray-700 mb-2">50.00$</p>
    </div>
  );
}

export default ProductCard;
