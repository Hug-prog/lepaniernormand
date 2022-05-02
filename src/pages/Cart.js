import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_CART } from "../constants/cart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer);
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_CART });
  }, [dispatch]);
  return (
    <div>
      <p>Mon Panier</p>
      {cartProducts.map((product, i) => (
        <div key={i}>
          <p>{product.libelle}</p>
          <button>Supprimer</button>
        </div>
      ))}
    </div>
  );
}
