import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../api/Product";

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
        />

        <label>prix</label>
        <input
          type={"text"}
          name={"price"}
          value={product.price}
          onChange={(e) => handleChange(e)}
        />

        <label>stock</label>
        <input
          type={"text"}
          name={"stock"}
          value={product.stock}
          onChange={(e) => handleChange(e)}
        />

        <label>description</label>
        <input
          type={"text"}
          name={"description"}
          value={product.description}
          onChange={(e) => handleChange(e)}
        />
        <label>sellerId</label>
        <input
          type={"text"}
          name={"sellerId"}
          value={product.sellerId}
          onChange={(e) => handleChange(e)}
        />
        <label>categorieId</label>
        <input
          type={"text"}
          name={"categorieId"}
          value={product.categorieId}
          onChange={(e) => handleChange(e)}
        />
        <label>images</label>
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
