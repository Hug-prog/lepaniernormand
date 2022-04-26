import React from "react";

export default function ({ product, seller }) {
  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div></div>
        <div>
          <h1>information Vendeur</h1>
          <p>{product.libelle}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <p>{product.Description}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
      <div>
        <h1>information Vendeur</h1>
        <p>{seller.libelle}</p>
        <p>{seller.city}</p>
        <p>{seller.HouseNumber}</p>
        <p>{seller.PostCode}</p>
        <p>{seller.Street}</p>
      </div>
    </div>
  );
}
