import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <div className="w-32 h-32 bg-third rounded shadow-md shadow-third mt-4 m-auto ">
      <Link to={"/categories"} state={category.id}>
        <div
          className="w-full h-2/3 m-auto rounded"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/categorie/${category.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className=" text-center ">{category.libelle}</h1>
      </Link>
    </div>
  );
}
