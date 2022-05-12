import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api/Category";
import { addProduct } from "../../api/Product";
import { getSellers } from "../../api/Seller";

export default function FormProduct() {
  const dispatch = useDispatch();
  const formData = new FormData();
  const initForm = {
    libelle: "",
    price: "",
    stock: "",
    description: "",
    images: [],
    categoriesId: [],
    sellerId: "",
  };
  const categories = useSelector(state => state.categoriesReducer);
  const sellers = useSelector(state => state.sellersReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSellers());
  }, [dispatch]);

  const [product, setProduct] = useState(initForm);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFiles = e => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleChangeCategories = e => {
    setProduct({
      ...product,
      ...product.categoriesId.push(e.target.value),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    for (const [key, value] of Object.entries(product)) {
      if (key === "images") {
        for (const image of value) {
          formData.append(key + "[]", image, image.name);
        }
      }
      if (key === "categoriesId") {
        for (const categorie of value) {
          formData.append(key + "[]", categorie);
        }
      } else {
        formData.append(key, value);
      }
    }
    dispatch(addProduct(formData));
  };

  return (
    <div className="w-screen h-screen">
      <form
        className="w-72 sm:w-3/4 lg:w-2/4 2xl:w-2/3 h-auto bg-main shadow-md text-white shadow-main rounded p-3 m-auto mt-32"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="w-full h-auto text-center mb-5 font-bold">
          <h1 className="2xl:text-xl">Ajouter un Produit</h1>
        </div>

        <div className="sm:flex sm:justify-around sm:items-center lg:w-2/3 lg:m-auto sm:mb-3">
          <label className="2xl:text-xl lg:mr-2">Libelle</label>
          <input
            type={"text"}
            name={"libelle"}
            value={product.libelle}
            onChange={e => handleChange(e)}
            className="block w-56 mb-3 bg-main border-b-2 border-white active:border-none outline-none"
          />

          <label className="2xl:text-xl lg:mx-2">Prix</label>
          <input
            type={"text"}
            name={"price"}
            value={product.price}
            onChange={e => handleChange(e)}
            className="block w-56 mb-3 sm:mb-6 bg-main border-b-2 border-white outline-none"
          />
        </div>

        <div className="sm:flex sm:justify-center sm:items-center">
          <label className="sm:mr-2 2xl:text-xl">Stock</label>
          <input
            type={"text"}
            name={"stock"}
            value={product.stock}
            onChange={e => handleChange(e)}
            className="block w-56 mb-3 bg-main border-b-2 border-white outline-none"
          />
        </div>

        <label className="block 2xl:text-xl ">Description</label>
        <input
          className=" w-56 sm:w-full mb-3 bg-main border-b-2 border-white outline-none"
          type={"text"}
          name={"description"}
          value={product.description}
          onChange={e => handleChange(e)}
        />

        <div className=" flex justify-around mb-3 lg:w-2/4 lg:m-auto">
          <label className="2xl:text-xl">Vendeur</label>
          <select
            className="rounded w-24 bg-main"
            name="sellerId"
            onChange={e => handleChange(e)}
          >
            <option value="seller">Vendeur</option>
            {sellers
              ? sellers.map((seller, i) => (
                  <option key={i} value={seller.id}>
                    {seller.libelle}
                  </option>
                ))
              : ""}
          </select>
        </div>

        <div className="flex justify-around mb-3 lg:w-2/4 lg:m-auto lg:my-3">
          {" "}
          <label className="block 2xl:text-xl">Categories</label>
          <select
            className="rounded w-24 bg-main"
            name="categoriesId"
            onChange={e => handleChangeCategories(e)}
          >
            <option value="">Categorie</option>
            {categories
              ? categories.map((category, i) => (
                  <option key={i} value={category.id}>
                    {category.libelle}
                  </option>
                ))
              : ""}
          </select>
        </div>

        <label className="block 2xl:text-xl">Images</label>
        <input
          className="text-sm mb-3 2xl:text-xl"
          type={"file"}
          name="images"
          onInput={e => handleFiles(e)}
          multiple
        />
        <div className="w-full h-10 flex justify-center">
          <button
            className="bg-white text-main rounded px-10 2xl:text-xl"
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
