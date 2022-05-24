import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByCategoryId } from "../api/Category";
import { getCurrentUser } from "../api/User";
import ProductCard from "../components/Product/ProductCard";

export default function Categories() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productsCateg = useSelector(state => state.productsReducer);
  const user = useSelector(state => state.userReducer);
  useEffect(() => {
    dispatch(getProductByCategoryId(location.state));
    dispatch(getCurrentUser());
  }, [dispatch, location]);

  return (
    <div className=" sm:mt-9 sm:w-4/5 sm:mx-auto sm:grid sm:grid-rows-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
      {productsCateg
        ? productsCateg.map((product, i) => (
            <ProductCard product={product} user={user} key={i} />
          ))
        : ""}
    </div>
  );
}
