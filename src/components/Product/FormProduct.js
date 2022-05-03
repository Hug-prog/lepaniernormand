import React, { useState } from "react";

export default function FormProduct() {
  const [libelle, setLibelle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleImg = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const product = {
      libelle: libelle,
      price: price,
      stock: stock,
      description: description,
      image: image,
    };
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>name</label>
        <input
          onChange={e => {
            setLibelle(e.target.value);
          }}
        />

        <label>price</label>
        <input
          onChange={e => {
            setPrice(e.target.value);
          }}
        />

        <label>stock</label>
        <input
          onChange={e => {
            setStock(e.target.value);
          }}
        />

        <label>description</label>
        <input
          onChange={e => {
            setDescription(e.target.value);
          }}
        />

        <label>image</label>
        <input
          type={"file"}
          onChange={e => handleImg(e)}
          accept=".jpg,.jpeg,.png"
        />
        <div>{image ? <img src={image}></img> : ""}</div>
        <button type="submit">ajouter</button>
      </form>
    </div>
  );
}
