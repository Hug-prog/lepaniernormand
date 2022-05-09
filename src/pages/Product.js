import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/Product";
import { ADD_PRODUCT_CART } from "../constants/cart";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer[0]);
  useEffect(() => {
    if (id !== undefined) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  const quantityChoice = [];
  for (let i = 1; i < product.stock + 1; i++) {
    quantityChoice.push(i);
  }

  return (
    <div className="w-sreen h-screen">
      <div className=" w-11/12 h-auto m-auto mt-10 sm:flex sm:justify-center sm:items-center ">
        <div className=" w-2/3 m-auto flex justify-center items-center sm:block h-auto sm:w-48">
          {product.images
            ? product.images.map((image, i) => (
                <div
                  key={i}
                  className="bg-third rounded shadow-md shadow-third mr-5 w-14 h-14 lg:w-20 lg:h-20 sm:m-auto  sm:mt-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${image}`,
                  }}
                  onClick={() => setImage(i)}
                ></div>
              ))
            : ""}
        </div>

        <div className="w-2/3 mt-6 p-2 m-auto h-auto bg-third rounded shadow-md shadow-third sm:w-3/4 lg:w-2/4 sm:flex sm:justify-around sm:items-center">
          {product.images ? (
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-72 lg:h-72  bg-white m-auto sm:m-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[image]})`,
              }}
            ></div>
          ) : (
            ""
          )}

          <div className="sm:w-1 sm:h-48 lg:h-60 bg-white sm:ml-5"></div>

          <div className="mt-3">
            <h1 className="ml-3 font-bold lg:text-3xl">Information Produit</h1>

            <p className="ml-6 lg:text-xl">{product.libelle}</p>

            <p className="ml-6 lg:text-xl">{product.price} €</p>

            <p className="ml-6 lg:text-xl">stockage {product.stock}</p>

            <div className="w-full h-16 text-center sm:flex sm:justify-around my-8">
              <select
                name="quantity"
                onChange={(e) => handleChange(e)}
                className="w-32 text-center rounded"
              >
                {quantityChoice.map((choice, i) => (
                  <option value={choice} key={i}>
                    {choice}
                  </option>
                ))}
              </select>

              <button
                className=" bg-main text-white rounded mt-5 sm:px-4 py-2 px-2 lg:text-xl"
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
      <div className=" w-4/6 h-auto ml-6">
        <h1 className="font-bold">description</h1>
        <p className="ml-6 w-4/5 h-auto lg:text-xl">{product.description}</p>
      </div>
    </div>
  );
}
