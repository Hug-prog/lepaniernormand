import React from "react";

export default function ({ product }) {
  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div></div>
        <div>
          <h1>information Produit</h1>
          <p>{product.libelle}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <p>{product.description}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
      <div>
        <h1>information Vendeur</h1>
      </div>
    </div>
  );
}
