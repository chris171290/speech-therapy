import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsWatch } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="relative z-40 bg-[#dcd9e9e0] text-gray-700 py-1 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <Link href="tel:+123456789" className="flex items-center">
            <span className="block p-2 rounded-full bg-gray-700 text-white md:text-gray-700 transition-all duration-200 ease-in-out transform md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaPhoneSquareAlt className="h-5 w-5" />
            </span>
            <span className="hidden md:block">+1 (234) 567-89</span>
          </Link>
          <Link href="mailto:info@example.com" className="flex items-center">
            <span className="block p-2 rounded-full bg-gray-700 text-white md:text-gray-700 transition-all duration-200 ease-in-out transform md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <IoIosMail className="h-5 w-5" />
            </span>
            <span className="hidden md:block">info@example.com</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="block p-2 rounded-full bg-gray-700 text-white md:text-gray-700 transition-all duration-200 ease-in-out transform  md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <BsWatch className="h-5 w-5" />
            </span>
            <span className="hidden md:block">Lun - Vie: 9:00 - 18:00</span>
          </span>
          <Link href="#" className="flex items-center">
            <span className="block p-2 rounded-full bg-gray-700 text-white md:text-gray-700 transition-all duration-200 ease-in-out transform  md:pointer-events-none hover:scale-110 active:scale-95 md:bg-transparent md:hover:bg-gray-700 md:p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <IoLocation className="h-5 w-5" />
            </span>
            <span className="hidden md:block">123 Calle Principal, Ciudad</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
