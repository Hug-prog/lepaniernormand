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
  const categories = useSelector(state => state.categoriesReducer);
  const products = useSelector(state => state.productsReducer);
  const user = useSelector(state => state.userReducer);

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

      <div className="w-4/5 h-auto mx-auto mt-6 grid grid-cols-3 grid-rows-2 gap-4 text-white">
        <div
          className="bg-cover bg-center col-span-2 h-40 2xl:h-56 rounded "
          style={{
            backgroundImage: `url(https://www.bienmanger.com/skin/images/logos/categorie/108/1087_categorie_lg.jpg)`,
          }}
        >
          <div className=" w-full sm:w-48 lg:w-60 float-right text-center 2xl:text-lg opacity-90 h-full bg-main">
            <h1 className="mt-3 2xl:mt-12 font-bold md:text-lg 2xl:text-xl">
              20% off
            </h1>
            <p className="mt-4">
              Le Lorem Ipsum est simplement du faux texte employé dans la
            </p>
          </div>
        </div>

        <div
          className="h-40 2xl:h-56 bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(https://thumbs.dreamstime.com/b/produit-normand-calvados-national-17885759.jpg)`,
          }}
        ></div>

        <div
          className=" col-span-2 h-40 2xl:h-56 bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(https://www.sncf-connect.com/assets/styles/ratio_2_1_max_width_961/public/media/2019-01/cidre-pomme-camembert-istock-philipimqge.jpg?h=8d8fd87c&itok=pn6Q0teA)`,
          }}
        >
          <div className=" w-full sm:w-72 lg:w-96 opacity-90 h-full text-center 2xl:text-lg bg-second">
            <h1 className=" relative top-3 2xl:top-14 font-bold md:text-lg 2xl:text-xl">
              laissez parler votre art
            </h1>
            <p className="mt-10 2xl:mt-20">la mise en page avant impression</p>
          </div>
        </div>

        <div
          className="h-40 2xl:h-56 bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(https://supplyshop.fr/wp-content/uploads/2020/01/produits-normands.jpg)`,
          }}
        ></div>
      </div>

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
