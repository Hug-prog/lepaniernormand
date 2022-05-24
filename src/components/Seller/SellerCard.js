import React from "react";
import { Link } from "react-router-dom";

export default function SellerCard({ seller }) {
  if (seller === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <p className="lg:text-2xl font-bold">Information Vendeur</p>
      <Link
        to={`/sellers/${seller.id}`}
        className="flex items-center justify-around w-full mt-5"
      >
        <div
          className="bg-third rounded shadow-md shadow-third w-4 h-4 lg:w-10 lg:h-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/seller/${seller.image}`,
          }}
        ></div>
        <p>{seller.libelle}</p>
      </Link>
    </div>
  );
}
