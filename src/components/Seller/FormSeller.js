import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  return <div></div>;
}
