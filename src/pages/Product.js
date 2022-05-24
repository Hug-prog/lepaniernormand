import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/Product";
import SellerCard from "../components/Seller/SellerCard";
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
  if (product !== undefined) {
    for (let i = 1; i < product.stock + 1; i++) {
      quantityChoice.push(i);
    }
  }

  if (product === undefined) {
    return (
      <>
        <p>Loading ...</p>
      </>
    );
  }
  return (
    <div className="w-sreen h-auto">
      <div className=" w-11/12 h-auto m-auto mt-10 sm:flex sm:justify-around sm:items-center">
        <div className=" w-2/3 sm:w-20 m-auto flex justify-center items-center sm:block h-auto sm:mr-3 lg:mr-6">
          {product.images.map((image, i) => (
            <div
              key={i}
              className="bg-third rounded shadow-md shadow-third mr-5 w-14 h-14 lg:w-20 lg:h-20 sm:m-auto  sm:mt-4 bg-cover bg-center"
              style={{
                backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${image}`,
              }}
              onClick={() => setImage(i)}
            ></div>
          ))}
        </div>

        <div className="w-56 mt-6 sm:mt-0 p-2 m-auto sm:mr-3 h-auto sm:w-3/4 sm:h-48 lg:w-5/6 lg:h-80 bg-third rounded shadow-md shadow-third sm:flex sm:justify-around sm:items-center">
          <div
            className="w-40 h-40 lg:w-72 lg:h-64 bg-white bg-cover bg-center m-auto sm:m-0 mt-2 sm:mt-0"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[image]})`,
            }}
          ></div>

          <div className="sm:w-1 sm:h-40 lg:h-60 bg-five sm:ml-10"></div>

          <div className="w-2/3 mt-3 m-auto text-center sm:text-justify text-md sm:ml-5 lg:mt-14">
            <p className="lg:text-3xl text-2xl lg:ml-3 font-bold">
              {product.libelle}
            </p>

            <p className="lg:text-xl lg:ml-3">{product.price} €</p>

            <p className=" lg:text-xl lg:ml-3">stockage {product.stock}</p>

            <div className="w-full h-16 text-center sm:flex sm:justify-center sm:items-center my-2 sm:my-0">
              <select
                name="quantity"
                onChange={(e) => handleChange(e)}
                className="w-20 lg:w-24  sm:h-6 lg:h-10 text-sm border-2 rounded text-center sm:mr-2 "
              >
                {quantityChoice.map((choice, i) => (
                  <option value={choice} key={i}>
                    Qt {choice}
                  </option>
                ))}
              </select>

              <button
                className=" bg-main text-white rounded mt-2 sm:mt-0 sm:mr-5 py-1 lg:py-2 px-1 lg:px-2 lg:text-lg text-xs"
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

        <div className="w-56 h-auto sm:h-48 sm:w-56 lg:w-80 lg:h-80 p-2 bg-third rounded shadow-md shadow-third mt-6 sm:mt-0 m-auto">
          <SellerCard seller={product.seller} />
        </div>
      </div>
      <div className=" w-5/6 h-auto mt-6 m-auto">
        <h1 className="font-bold">Description</h1>
        <p className="ml-6 w-4/5 h-auto lg:text-xl">{product.description}</p>
      </div>
    </div>
  );
}
