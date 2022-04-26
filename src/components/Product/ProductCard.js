import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="w-48 h-auto bg-slate-100 mt-4 m-auto pb-2">
      <Link to={"/"} className="flex justify-end">
        <AiOutlineHeart />
      </Link>
      <div className=" w-2/3 h-28 m-auto bg-slate-800"></div>
      <p className="mt-4 ml-3">{product.libelle}</p>
      <p className="font-bold ml-3">{product.price}</p>
      <button className="mt-2 ml-3 bg-main text-white rounded pl-4 pr-4 pt-2 pb-2">
        Ajouter au Pannier
      </button>
    </div>
  );
}
