import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByCategoryId } from "../api/Category";
import { getCurrentUser } from "../api/User";
import ProductCard from "../components/Product/ProductCard";

export default function Categories() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productsCateg = useSelector((state) => state.productsReducer);
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getProductByCategoryId(location.state));
    dispatch(getCurrentUser());
  }, [dispatch, location]);

  return (
    <div className="sm:flex sm:flex-wrap">
      {productsCateg
        ? productsCateg.map((product, i) => (
            <ProductCard product={product} user={user} key={i} />
          ))
        : ""}
    </div>
  );
}
