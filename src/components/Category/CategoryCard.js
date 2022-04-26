import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <div className="w-32 h-32 bg-slate-100 mt-4 m-auto rounded ">
      <Link to={"/"}>
        <div className="w-full h-2/3 m-auto bg-slate-800 rounded"></div>
        <h1 className=" text-center ">{category.libelle}</h1>
      </Link>
    </div>
  );
}
