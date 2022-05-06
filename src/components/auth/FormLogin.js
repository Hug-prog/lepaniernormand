import React, { useState } from "react";
import { login } from "../../api/Auth";

export default function FormLogin() {
  const formData = new FormData();
  const initForm = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initForm);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <div>
      <p>Se connecter</p>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <input
          type={"email"}
          name="username"
          value={user.username}
          placeholder="Adresse e-mail"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="mot de passe"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <button>Se connecter</button>
      </form>
    </div>
  );
}
