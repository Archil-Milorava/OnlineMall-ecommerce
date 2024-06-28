import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-300 h-20  max-w-screen flex justify-between px-8 items-center">
      <p className="text-gray-900">
        <Link href="">Built by Archil Milorava</Link> | for further information
        please contact with social media
      </p>
      <div className="flex justify-between w-auto text-xl gap-4">
        <FaGithub className="text-gray-900 hover:text-gray-500 cursor-pointer" />
        <FaFacebookSquare className="text-gray-900 hover:text-gray-500 cursor-pointer" />
        <CiLinkedin className="text-gray-900 hover:text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
