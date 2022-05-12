import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { likeProduct, unLikeProduct } from "../../api/User";
import { ADD_PRODUCT_CART } from "../../constants/cart";

export default function ProductCard({ product, user }) {
  const dispatch = useDispatch();
  return (
    <div className="w-48 2xl:w-56 h-72 2xl:h-80 bg-third rounded shadow-md shadow-third mt-4 m-auto pb-2">
      <div className="flex justify-end cursor-pointer">
        {user.likedProducts !== undefined ? (
          <>
            {user.likedProducts.indexOf(product.id) < 0 ? (
              <AiOutlineHeart
                className=" 2xl:text-2xl"
                onClick={() => dispatch(likeProduct(product.id))}
              />
            ) : (
              <AiFillHeart
                className=" 2xl:text-2xl fill-red-600"
                onClick={() => dispatch(unLikeProduct(product.id))}
              />
            )}
          </>
        ) : (
          <AiOutlineHeart className=" 2xl:text-2xl" />
        )}
      </div>

      <Link to={`/product/${product.id}`}>
        <div
          className=" w-2/3 h-28 m-auto 2xl:h-36  bg-cover bg-center"
          style={{
            backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[0]})`,
          }}
        ></div>
        <p className="mt-4 ml-3 2xl:text-xl text-ellipsis overflow-hidden  w-24 ">
          {product.libelle}
        </p>
        <p className="font-bold mt-2 ml-3 2xl:text-xl">{product.price}</p>
      </Link>

      <button
        onClick={() =>
          dispatch({
            type: ADD_PRODUCT_CART,
            payload: { product, quantity: 1 },
          })
        }
        className="mt-4 ml-3 bg-main text-white rounded pl-4 pr-4 pt-2 pb-2 2xl:text-md"
      >
        Ajouter au Pannier
      </button>
    </div>
  );
}
