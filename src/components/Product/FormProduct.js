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
  const categories = useSelector((state) => state.categoriesReducer);
  const sellers = useSelector((state) => state.sellersReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSellers());
  }, [dispatch]);

  const [product, setProduct] = useState(initForm);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(product)) {
      if (key === "images") {
        for (const image of value) {
          formData.append(key, image, image.name);
        }
      }
      if (key === "categoriesId") {
        for (const categorie of value) {
          formData.append(key, categorie);
        }
      } else {
        formData.append(key, value);
      }
    }
    dispatch(addProduct(formData));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>libelle</label>
        <input
          type={"text"}
          name={"libelle"}
          value={product.libelle}
          onChange={(e) => handleChange(e)}
          className="block"
        />

        <label>prix</label>
        <input
          type={"text"}
          name={"price"}
          value={product.price}
          onChange={(e) => handleChange(e)}
          className="block"
        />

        <label>stock</label>
        <input
          type={"text"}
          name={"stock"}
          value={product.stock}
          onChange={(e) => handleChange(e)}
          className="block"
        />

        <label className="block">description</label>
        <input
          type={"text"}
          name={"description"}
          value={product.description}
          onChange={(e) => handleChange(e)}
        />
        <label className="block">seller</label>
        <select>
          <option value="">seller</option>
          {sellers
            ? sellers.map((seller, i) => (
                <option
                  key={i}
                  value={seller.id}
                  onChange={(e) => handleChange(e)}
                >
                  {seller.libelle}
                </option>
              ))
            : ""}
        </select>

        <label className="block">categories</label>
        <select>
          <option value="">categorie</option>
          {categories
            ? categories.map((category, i) => (
                <option
                  key={i}
                  value={category.id}
                  onChange={(e) => handleChange(e)}
                >
                  {category.libelle}
                </option>
              ))
            : ""}
        </select>

        <label className="block">images</label>
        <input
          type={"file"}
          name="images"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        <button type="submit">ajouter</button>
      </form>
    </div>
  );
}
