import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const products = useSelector(state => state.productsReducer);
  const product = products.find(product => product.id === location.state);

  return (
    <div className="w-sreen h-auto">
      <div className=" w-11/12 h-auto m-auto sm:flex sm:justify-center sm:items-center ">
        <div className=" w-2/3 mt-6 m-auto h-auto flex justify-center items-center sm:block sm:w-48">
          <div className="bg-slate-100 mr-5 w-14 h-14 rounded sm:m-auto  sm:mt-4">
            img1
          </div>
          <div className="bg-slate-100 mr-5 w-14 h-14 rounded sm:m-auto sm:mt-4">
            img2
          </div>
          <div className="bg-slate-100 w-14 h-14 rounded sm:m-auto sm:mt-4">
            img3
          </div>
        </div>

        <div className="w-2/3 mt-6 p-2 m-auto h-auto rounded bg-slate-100 sm:w-3/4 lg:w-2/4 sm:flex sm:justify-around sm:items-center">
          <div
            className="w-48 h-48 bg-white m-auto sm:m-0"
            style={{
              backgroundImage: `url(http://127.0.0.1:8000/uploads/product/${product.images[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="sm:w-1 sm:h-48 bg-white sm:ml-5"></div>
          <div className="mt-3">
            <h1 className="ml-3 font-bold">Information Produit</h1>
            <p className="ml-6">{product.libelle}</p>
            <p className="ml-6">{product.price} €</p>
            <p className="ml-6">stockage {product.stock}</p>
            <p className="ml-6 w-4/5 h-auto">{product.description}</p>
            <div className="w-full h-16 flex justify-center items-center">
              <button className="mt-2 m-auto bg-main text-white rounded pl-4 sm:pl-2 pr-4 sm:pr-2 pt-2 pb-2">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        <div className=" w-2/3 h-auto sm:w-56 sm:ml-3 bg-slate-100 mt-6 m-auto rounded">
          <h1>information Vendeur</h1>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
          <p>okok</p>
        </div>
      </div>
    </div>
  );
}
