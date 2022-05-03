import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../api/Category";

export default function FormCateg() {
  const [libelle, setLibelle] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleImg = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const category = { libelle: libelle, image: image };
    dispatch(addCategory(category));
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>nom categorie</label>
        <input
          onChange={e => {
            setLibelle(e.target.value);
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
