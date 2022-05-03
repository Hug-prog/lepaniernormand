import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../api/Category";

export default function FormCateg() {
  const dispatch = useDispatch();
  const formData = new FormData();
  const initForm = {
    libelle: "",
    image: "",
  };
  const [category, setCategory] = useState(initForm);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setCategory({ ...category, image: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(category)) {
      if (key === "image") {
        if (value[0] instanceof Blob) {
          formData.append(key, value[0], value[0].name);
        }
      } else {
        formData.append(key, value);
      }
    }
    dispatch(addCategory(formData));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>nom category</label>
        <input
          type={"text"}
          name={"libelle"}
          value={category.libelle}
          onChange={(e) => handleChange(e)}
        />
        <label>image</label>
        <input type={"file"} name={"image"} onChange={(e) => handleFiles(e)} />
        <button type="submit">ajouter</button>
      </form>
    </div>
  );
}
