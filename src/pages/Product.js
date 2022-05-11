import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_PRODUCT_CART } from "../constants/cart";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector(state => state.productsReducer);
  const product = products.find(product => product.id === location.state);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(product.images[0]);

  const handleChange = e => {
    console.log(quantity);
    setQuantity(e.target.value);
  };
  const quantityChoice = [];
  for (let i = 1; i < product.stock + 1; i++) {
    quantityChoice.push(i);
  }

  return (
    <div className="w-sreen h-screen">
      <div className=" w-11/12 h-auto m-auto mt-10">
        <div className=" w-2/3 sm:w-20 m-auto flex justify-center items-center sm:block h-auto">
          {product.images.map((image, i) => (
            <div
              key={i}
              className="bg-third rounded shadow-md shadow-third mr-5 w-14 h-14 lg:w-20 lg:h-20 sm:m-auto  sm:mt-4 bg-cover bg-center"
              style={{
                backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${image}`,
              }}
              onClick={() => setImage(image)}
            ></div>
          ))}
        </div>

        <div className="w-56 mt-6 sm:mt-0 p-2 m-auto h-auto sm:h-48 bg-third rounded shadow-md shadow-third sm:w-3/4 lg:w-2/4 sm:flex sm:justify-around sm:items-center">
          <div
            className="w-40 h-40 lg:w-72 lg:h-72 bg-white bg-cover bg-center m-auto"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${image})`,
            }}
          ></div>

          <div className="sm:w-1 sm:h-40 lg:h-60 bg-five sm:ml-5"></div>

          <div className="w-2/3 mt-3 m-auto text-center text-sm">
            <h1 className="font-bold lg:text-3xl">Information Produit</h1>

            <p className="lg:text-xl">{product.libelle}</p>

            <p className="lg:text-xl">{product.price} €</p>

            <p className=" lg:text-xl">stockage {product.stock}</p>

            <div className="w-full h-16 text-center sm:flex sm:justify-around sm:items-center my-2 sm:my-0 sm:ml-5">
              <select
                name="quantity"
                onChange={e => handleChange(e)}
                className="w-20 sm:w-20 sm:h-6 text-sm border-2 rounded text-center sm:mr-2 "
              >
                {quantityChoice.map((choice, i) => (
                  <option value={choice} key={i}>
                    Qt {choice}
                  </option>
                ))}
              </select>

              <button
                className=" bg-main text-white rounded mt-2 sm:mt-0 sm:mr-5 py-1 px-1 lg:text-xl text-sm"
                onClick={() =>
                  dispatch({
                    type: ADD_PRODUCT_CART,
                    payload: { product, quantity: parseInt(quantity) },
                  })
                }
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        <div className="w-56 h-auto sm:h-48 sm:w-56 lg:w-80 p-2 bg-third rounded shadow-md shadow-third mt-6 m-auto">
          <h1 className="lg:text-3xl font-bold">Information Vendeur</h1>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
        </div>
      </div>
      <div className=" w-4/6 h-auto ml-6">
        <h1 className="font-bold">description</h1>
        <p className="ml-6 w-4/5 h-auto lg:text-xl">{product.description}</p>
      </div>
    </div>
  );
}
