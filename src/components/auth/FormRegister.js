import React, { useState } from "react";
import { register } from "../../api/Auth";
import GeoInput from "../geo/GeoInput";

export default function FormRegister() {
  const formData = new FormData();
  const initForm = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    houseNumber: "",
    street: "",
    postCode: "",
    city: "",
  };
  const [user, setUser] = useState(initForm);
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleAdress = adresse => {
    setUser({
      ...user,
      houseNumber: adresse.housenumber,
      street: adresse.street,
      postCode: adresse.postcode,
      city: adresse.city,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    register(formData);
  };
  return (
    <div style={{ minHeight: "600px" }}>
      <p className="font-bold m-6">Créer un compte</p>
      <form
        onSubmit={e => handleSubmit(e)}
        className=" h-4/5 w-full flex flex-col items-center justify-around"
      >
        <div className="flex justify-center my-3">
          <input
            className="w-2/5 py-3 mr-2 border-b-2 border-black outline-none"
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={user.firstName}
            onChange={e => handleChange(e)}
          />
          <input
            className="w-2/5 py-3 border-b-2 border-black outline-none"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={user.lastname}
            onChange={e => handleChange(e)}
          />
        </div>
        <input
          className="w-3/4 py-3 border-b-2 border-black outline-none"
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={user.email}
          onChange={e => handleChange(e)}
        />
        <input
          className="w-3/4 py-3 border-b-2 border-black outline-none"
          type="password"
          name="password"
          placeholder="mot de passe"
          value={user.password}
          onChange={e => handleChange(e)}
        />
        <input
          className="w-3/4 py-3 border-b-2 border-black outline-none"
          type="password"
          name="confirmPassword"
          placeholder="comfirmez mot de passe"
          value={user.confirmPassword}
          onChange={e => handleChange(e)}
        />
        <GeoInput parentCallback={handleAdress} />
        {/*<div>
          <input
            className="w-1/5 p-3"
            type="text"
            name="houseNumber"
            placeholder="numero"
            value={user.houseNumber}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="w-3/5 p-3"
            type="text"
            name="street"
            placeholder="nom de rue"
            value={user.street}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            className="w-1/5 p-3"
            type="text"
            name="postCode"
            placeholder="code postal"
            value={user.postCode}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="w-3/5 p-3"
            type="text"
            name="city"
            placeholder="ville"
            value={user.city}
            onChange={(e) => handleChange(e)}
          />
          </div>*/}
        <input type="submit" />
      </form>
    </div>
  );
}
