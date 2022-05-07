import React, { useState } from "react";
import { register } from "../../api/Auth";

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
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    register(formData);
  };
  return (
    <div style={{ minHeight: "600px" }}>
      <p>Créer un compte</p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" h-4/5 w-full flex flex-col items-center justify-around"
      >
        <div>
          <input
            className="w-2/5 p-3"
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="w-2/5 p-3"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={user.lastname}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          className="w-3/4 p-3"
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-3/4 p-3"
          type="password"
          name="password"
          placeholder="mot de passe"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-3/4 p-3"
          type="password"
          name="confirmPassword"
          placeholder="comfirmez mot de passe"
          value={user.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        <div>
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
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
