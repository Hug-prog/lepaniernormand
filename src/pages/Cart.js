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
    <div className="w-screen h-auto">
      <p className="m-6 font-bold">Mon Panier</p>
      <div className="sm:flex sm:justify-around sm:items-center">
        <table className="m-auto bg-third rounded shadow-md shadow-third text-center ">
          <thead className=" border-b-2">
            <tr>
              <th className="p-2 lg:p-10 2xl:px-32">Produit</th>
              <th className="p-2 lg:p-10 2xl:px-32">Quantite</th>
              <th className="p-2 lg:p-10 2xl:px-32">Prix</th>
              <th className="p-2 lg:p-10 2xl:px-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((cartProduct, i) => (
              <tr key={i}>
                <td>
                  <div className="mt-3 sm:p-6 sm:flex text-justify ">
                    <div
                      className=" h-16 w-16 bg-center bg-cover border-main border-2"
                      style={{
                        backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${cartProduct.product.images[0]})`,
                      }}
                    ></div>
                    <p className="sm:ml-6 text-ellipsis overflow-hidden  w-24 sm:w-auto">
                      {cartProduct.product.libelle}
                    </p>
                  </div>
                </td>
                <td className="border-x-2">
                  <div> {cartProduct.quantity}</div>
                </td>

                <td className="border-x-2">
                  <div>{cartProduct.product.price}€ </div>
                </td>

                <td>
                  <div className="flex sm:p-6 justify-center">
                    <AiOutlineHeart className=" mr-3" />
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
        <div className="w-56 h-72 2xl:w-96 2xl:h-96 m-auto mt-6 bg-third text-center rounded shadow-md shadow-third">
          <h1 className="font-bold relative top-3 ">Commande</h1>
          <div className="m-4 mt-10">
            <input className="rounded-l-lg w-32 p-1" />
            <button className="rounded-r-lg bg-main p-1">Apply</button>
          </div>

          <div className="flex justify-around items-center mt-6">
            <p className="font-bold">Totale</p>
            <p>price</p>
          </div>

          <button className="mt-10 bg-main text-white rounded pl-4 pr-4 pt-2 pb-2">
            Payer
          </button>
        </div>
      </div>
    </div>
  );
}
