import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_PRODUCT_CART } from "../../constants/cart";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="w-48 h-auto bg-third rounded shadow-md shadow-third mt-4 m-auto pb-2">
      <Link to={"/"} className="flex justify-end">
        <AiOutlineHeart />
      </Link>

      <Link to={`/product/${product.id}`}>
        <div
          className=" w-2/3 h-28 m-auto "
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="mt-4 ml-3">{product.libelle}</p>
        <p className="font-bold ml-3">{product.price}</p>
      </Link>

      <button
        onClick={() =>
          dispatch({
            type: ADD_PRODUCT_CART,
            payload: { product, quantity: 1 },
          })
        }
        className="mt-2 ml-3 bg-main text-white rounded pl-4 pr-4 pt-2 pb-2"
      >
        Ajouter au Pannier
      </button>
    </div>
  );
}
