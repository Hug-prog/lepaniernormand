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
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantite</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((cartProduct, i) => (
            <tr key={i}>
              <td>
                <div className="flex">
                  <div
                    className=" h-16 w-16 bg-center bg-cover"
                    style={{
                      backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${cartProduct.product.images[0]})`,
                    }}
                  ></div>
                  {cartProduct.product.libelle}
                </div>
              </td>
              <td>{cartProduct.quantity}</td>
              <td>{cartProduct.product.price}</td>
              <td className="flex">
                <AiOutlineHeart />
                <MdOutlineRemoveShoppingCart
                  onClick={() =>
                    dispatch({
                      type: DELETE_PRODUCT_CART,
                      payload: cartProduct.product.id,
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
