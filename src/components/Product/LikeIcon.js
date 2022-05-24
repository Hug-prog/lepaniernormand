import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { likeProduct, unLikeProduct } from "../../api/User";

export default function LikeIcon({ product, user }) {
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
}
