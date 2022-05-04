import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_CART, GET_PRODUCT_CART } from "../constants/cart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cartReducer);
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_CART });
  }, [dispatch]);
  return (
    <div className="w-full h-auto">
      <p className="m-6 font-bold">Mon Panier</p>
      <div className="sm:flex sm:justify-center sm:items-center m-auto">
        <table className="m-10 bg-third rounded shadow-md shadow-third">
          <thead className=" border-b-2">
            <tr>
              <th className="p-6">Produit</th>
              <th className="p-6">Quantite</th>
              <th className="p-6">Prix</th>
              <th className="p-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((cartProduct, i) => (
              <tr key={i}>
                <td>
                  <div className="mt-3 p-6 flex justify-center items-center">
                    <div
                      className=" h-16 w-16 bg-center bg-cover border-main border-2"
                      style={{
                        backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${cartProduct.product.images[0]})`,
                      }}
                    ></div>
                    <p className="ml-6"> {cartProduct.product.libelle}</p>
                  </div>
                </td>
                <td className=" border-x-2">
                  <div className="p-6"> {cartProduct.quantity}</div>
                </td>

                <td className="border-x-2">
                  <div className="p-6">{cartProduct.product.price}€ </div>
                </td>

                <td>
                  <div className="flex p-6">
                    <AiOutlineHeart className="mr-3" />
                    <MdOutlineRemoveShoppingCart
                      onClick={() =>
                        dispatch({
                          type: DELETE_PRODUCT_CART,
                          payload: cartProduct.product.id,
                        })
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-56 h-44 bg-third text-center rounded">
          <h1 className="font-bold m-4">Commande</h1>
          <div className="m-4">
            <input className="rounded-l-lg w-32 p-1" />
            <button className="rounded-r-lg bg-main p-1">Apply</button>
          </div>

          <div className="flex justify-around items-center">
            <p className="font-bold">Totale</p>
            <p>price</p>
          </div>

          <button className="mt-2 bg-main text-white rounded pl-4 pr-4 pt-2 pb-2">
            Payer
          </button>
        </div>
      </div>
    </div>
  );
}
