import React from "react";

export default function ProductCard({ product }) {
  return (
    <div>
      <p>{product.libelle}</p>
      <p>{product.price}</p>
      <button>Ajouter au Pannier</button>
    </div>
  );
}
