import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const product = location.state;
  return (
    <div>
      <div className="w-sreen h-auto">
        <div className=" w-2/3 sm:w-32 h-80 bg-slate-100"></div>
        <div className="w-2/3 h-80 bg-slate-100">
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
        <div className="w-32 h-80 bg-slate-100">
          <h1>information Vendeur</h1>
        </div>
      </div>
    </div>
  );
}
