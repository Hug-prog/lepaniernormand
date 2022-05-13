import React from "react";

export default function SellerCard({ seller }) {
  return (
    <div>
      <p className="lg:text-2xl font-bold">Information Vendeur</p>
      <div className="flex items-center justify-around w-full">
        <div
          className="bg-third rounded shadow-md shadow-third w-4 h-4 lg:w-10 lg:h-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/seller/${seller.image}`,
          }}
        ></div>
        <p>{seller.libelle}</p>
      </div>
    </div>
  );
}
