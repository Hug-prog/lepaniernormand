import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_PRODUCT_CART } from "../../constants/cart";
import LikeIcon from "./LikeIcon";

export default function ProductCard({ product, user }) {
  const dispatch = useDispatch();
  return (
    <div className="w-48 2xl:w-56 h-72 2xl:h-80 bg-third rounded shadow-md shadow-third mt-4 m-auto pb-2">
      <div className="flex justify-end cursor-pointer">
        <LikeIcon user={user} product={product} />
      </div>

      <Link to={`/product/${product.id}`}>
        <div
          className=" w-2/3 h-28 m-auto 2xl:h-36  bg-cover bg-center"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[0]})`,
          }}
        ></div>
        <p className="mt-4 ml-3 2xl:text-md w-32 text-ellipsis  overflow-hidden">
          {product.libelle}
        </p>
        <p className="font-bold mt-2 ml-3 2xl:text-sm">{product.price} €</p>
      </Link>

      <div
        onClick={() =>
          dispatch({
            type: ADD_PRODUCT_CART,
            payload: { product, quantity: 1 },
          })
        }
        className="bg-main text-white text-xs text-center rounded px-2 py-2 2xl:text-md mx-auto w-3/4 mt-4 cursor-pointer"
      >
        Ajouter au Pannier
      </div>
    </div>
  );
}
