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

  const handleChange = e => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleFiles = e => {
    setCategory({ ...category, image: e.target.files });
  };

  const handleSubmit = e => {
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
    <div className="w-screen h-screen">
      <form
        className="w-72 sm:w-3/4 lg:w-2/4 2xl:w-1/3 h-auto bg-main shadow-md text-white shadow-main rounded p-3 m-auto mt-32"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="w-full h-auto text-center mb-5 font-bold">
          <h1 className="2xl:text-xl">Ajouter une categorie</h1>
        </div>

        <div className="sm:flex sm:justify-center sm:items-center md:w-3/4 md:m-auto sm:mb-3">
          <label className="2xl:text-xl sm:mr-3">nom category</label>
          <input
            className="block w-56 mb-3 bg-main border-b-2 border-white outline-none"
            type={"text"}
            name={"libelle"}
            value={category.libelle}
            onChange={e => handleChange(e)}
          />
        </div>

        <div className="my-6 sm:ml-20">
          {" "}
          <label className="block 2xl:text-xl">image</label>
          <input
            className="text-sm mb-3 2xl:text-xl"
            type={"file"}
            name={"image"}
            onChange={e => handleFiles(e)}
          />
        </div>

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
