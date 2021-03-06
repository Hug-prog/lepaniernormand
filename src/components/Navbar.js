import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../constants/modal";
export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 gap-2 bg-main h-auto sm:h-16 2xl:h-20 pb-2 sm:pb-0 static w-full">
      <Link
        to="/"
        className="pt-3 flex justify-center items-center sm:pt-0 sm:mt-0 text-white 2xl:text-xl"
      >
        LePannierNormand
      </Link>

      <div className=" mt-3 order-last sm:order-none col-span-2 sm:col-auto sm: sm:mt-0 flex justify-center items-center">
        <input className=" w-48 lg:w-3/4 h-6 2xl:h-8 rounded-l-lg " />
        <button className="bg-second rounded-r-lg w-6 2xl:w-10 2xl:h-8">
          <BiSearch className="m-auto h-6" />
        </button>
      </div>

      <nav className="mt-3 sm:mt-0 flex justify-end mr-5 sm:mr-0 sm:justify-center items-center">
        <Link className="mr-3" to="/wishlist">
          <AiOutlineHeart className="fill-white 2xl:text-xl" />
        </Link>
        <div
          className="mr-3"
          onClick={() => {
            dispatch({ type: LOGIN });
          }}
        >
          <FaRegUserCircle className="fill-white 2xl:text-xl" />
        </div>
        <Link className="mr-3" to="/cart">
          <BsCart3 className="fill-white 2xl:text-xl" />
        </Link>
      </nav>
    </div>
  );
}
