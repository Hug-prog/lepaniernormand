import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="block text-center sm:flex justify-around items-center bg-main h-auto sm:h-16 pb-2 sm:pb-0 static w-full">
      <h1 className="pt-3 sm:pt-0 sm:mt-0 text-white">LePannierNormand</h1>

      <div className=" mt-3 sm:mt-0 flex justify-center items-center">
        <input className=" w-48 h-6 rounded-l-lg " />
        <button className="bg-second rounded-r-lg w-6">
          <BiSearch className="m-auto h-6" />
        </button>
      </div>

      <nav className="mt-3 sm:mt-0 flex justify-center items-center">
        <Link className="mr-3" to="/">
          <AiOutlineHeart className="fill-white" />
        </Link>
        <Link className="mr-3" to="/account">
          <FaRegUserCircle className="fill-white" />
        </Link>
        <Link className="mr-3" to="/cart">
          <BsCart3 className="fill-white" />
        </Link>
      </nav>
    </div>
  );
}
