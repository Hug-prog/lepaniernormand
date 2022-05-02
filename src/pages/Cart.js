import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_CART, GET_PRODUCT_CART } from "../constants/cart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer);
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_CART });
  }, [dispatch]);
  return (
    <div>
      <p>Mon Panier</p>
      <table>
        <tr>
          <th>Produit</th>
          <th>Quantite</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
        {cartProducts.map((product, i) => (
          <tr key={i}>
            <td>{product.libelle}</td>
            <td></td>
            <td>{product.price}</td>
            <td className="flex">
              <AiOutlineHeart />
              <MdOutlineRemoveShoppingCart
                onClick={() =>
                  dispatch({ type: DELETE_PRODUCT_CART, payload: product._id })
                }
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
