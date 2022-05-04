import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeller } from "../../api/Seller";

export default function FormSeller() {
  const dispatch = useDispatch();
  const formData = new FormData();
  const initForm = {
    libelle: "",
    image: "",
    houseNumber: "",
    street: "",
    postCode: "",
    city: "",
  };
  const [seller, setSeller] = useState(initForm);

  const handleChange = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setSeller({ ...seller, image: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(seller)) {
      if (key === "image") {
        if (value[0] instanceof Blob) {
          formData.append(key, value[0], value[0].name);
        }
      } else {
        formData.append(key, value);
      }
    }
    dispatch(addSeller(formData));
  };
  return (
    <div>
      <p>Ajouter un vendeur</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={"text"}
          name={"libelle"}
          placeholder="nom vendeur"
          value={seller.libelle}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="houseNumber"
          placeholder="numero"
          value={seller.houseNumber}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="street"
          placeholder="nom de rue"
          value={seller.street}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="postCode"
          placeholder="code postal"
          value={seller.postCode}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="city"
          placeholder="ville"
          value={seller.city}
          onChange={(e) => handleChange(e)}
        />
        <label>image</label>
        <input type={"file"} name={"image"} onChange={(e) => handleFiles(e)} />
        <button type="submit">ajouter</button>
      </form>
    </div>
  );
}
