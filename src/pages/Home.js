import { useEffect } from "react";
import { getCategories } from "../api/Category";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCard from "../components/Product/ProductCard";
import { getAllProducts } from "../api/Product";
import { getCurrentUser } from "../api/User";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  const products = useSelector((state) => state.productsReducer);
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllProducts());
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="w-full h-auto mt-5">
      <ul className="flex flex-wrap justify-center items-center 2xl:mt-10">
        {categories
          ? categories.map((category, i) => (
              <li className="mr-5" key={i}>
                <Link
                  to={"/categories"}
                  state={category.id}
                  className="font-bold  2xl:text-xl"
                >
                  {category.libelle}
                </Link>
              </li>
            ))
          : ""}
      </ul>

      <div className="mt-5 w-5/6 h-auto m-auto 2xl:mt-10">
        <h1 className="text-center font-bold 2xl:text-xl">Catégories</h1>
        <div className=" flex flex-wrap 2xl:mt-6">
          {categories
            ? categories.map((category, i) => (
                <CategoryCard category={category} key={i} />
              ))
            : ""}
        </div>
      </div>

      <div className="mt-5 w-5/6 h-auto m-auto 2xl:mt-10">
        <h1 className="font-bold 2xl:text-xl">Top Produits</h1>
        <div className="sm:flex sm:flex-wrap">
          {products
            ? products.map((product, i) => (
                <ProductCard product={product} user={user} key={i} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
