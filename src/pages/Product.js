import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_PRODUCT_CART } from "../constants/cart";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((state) => state.productsReducer);
  const product = products.find((product) => product.id === location.state);
  const [image, setImage] = useState("0");
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    console.log(quantity);
    setQuantity(e.target.value);
  };
  const quantityChoice = [];
  for (let i = 1; i < product.stock + 1; i++) {
    quantityChoice.push(i);
  }

  return (
    <div className="w-sreen h-screen flex justify-center items-center ">
      <div className=" w-11/12 h-auto m-auto sm:flex sm:justify-center sm:items-center ">
        <div className=" w-2/3 m-auto flex justify-center items-center sm:block h-auto sm:w-48">
          <div
            className="bg-third rounded shadow-md shadow-third mr-5 w-14 h-14 lg:w-20 lg:h-20 sm:m-auto  sm:mt-4"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => setImage("0")}
          ></div>

          <div
            className="bg-third rounded shadow-md shadow-third mr-5 w-14 h-14 lg:w-20 lg:h-20  sm:m-auto sm:mt-4"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => setImage("1")}
          ></div>

          <div
            className="bg-third rounded shadow-md shadow-third w-14 h-14 lg:w-20 lg:h-20  sm:m-auto sm:mt-4"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => setImage("2")}
          ></div>
        </div>

        <div className="w-2/3 mt-6 p-2 m-auto h-auto  bg-third rounded shadow-md shadow-third sm:w-3/4 lg:w-2/4 sm:flex sm:justify-around sm:items-center">
          <div
            className="w-48 h-48 lg:w-72 lg:h-72  bg-white m-auto sm:m-0"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[image]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="sm:w-1 sm:h-48 lg:h-60 bg-white sm:ml-5"></div>

          <div className="mt-3">
            <h1 className="ml-3 font-bold lg:text-3xl">Information Produit</h1>

            <p className="ml-6 lg:text-xl">{product.libelle}</p>

            <p className="ml-6 lg:text-xl">{product.price} €</p>

            <p className="ml-6 lg:text-xl">stockage {product.stock}</p>

            <p className="ml-6 w-4/5 h-auto lg:text-xl">
              {product.description}
            </p>

            <div className="w-full h-16 flex justify-center items-center">
              <select name="quantity" onChange={(e) => handleChange(e)}>
                {quantityChoice.map((choice, i) => (
                  <option value={choice} key={i}>
                    {choice}
                  </option>
                ))}
              </select>

              <button
                className="mt-2 m-auto bg-main text-white rounded pl-4 sm:pl-2 pr-4 sm:pr-2 pt-2 pb-2 lg:text-xl"
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

        <div className=" w-2/3 h-auto sm:w-56 lg:w-80 sm:ml-3 bg-third rounded shadow-md shadow-third mt-6 m-auto">
          <h1 className="lg:text-3xl font-bold">Information Vendeur</h1>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
        </div>
      </div>
    </div>
  );
}
