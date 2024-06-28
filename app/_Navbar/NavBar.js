import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function NavBar({params}) {


  return (
    <>
      <div className=" text-black bg-gray-300 h-24 flex items-center px-8 justify-between">
        <Link href="/" className="text-3xl tracking-wider">
          OnlineMall
        </Link>
        <div className=" flex gap-8">
          <Link href="/women" className="hover:text-gray-400 transition-all text-xl">
            Women
          </Link>
          <Link href="/" className="hover:text-gray-400 transition-all text-xl">
            Men
          </Link>
          <Link href="/" className="hover:text-gray-400 transition-all text-xl">
            Electronics
          </Link>
          <Link href="/" className="hover:text-gray-400 transition-all text-xl">
            Jewelery
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="#">
            <CgProfile className="text-2xl hover:text-gray-400 transition-all" />
          </Link>
          <Link href="#">
            <MdOutlineShoppingBag className="text-2xl hover:text-gray-400 transition-all" />
          </Link>
          <Link href="#">
            <CiSearch className="text-2xl hover:text-gray-400 transition-all" />
          </Link>
        </div>
      </div>
      <div className="h-24 w-full bg-gray-600 text-gray-300 text-4xl flex items-center justify-center tracking-wider">
        women
      </div>
    </>
  );
}

export default NavBar;
