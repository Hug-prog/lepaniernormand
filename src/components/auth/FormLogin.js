import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../api/Auth";
import { REGISTER } from "../../constants/modal";

export default function FormLogin() {
  const dispatch = useDispatch();
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
    <div style={{ minHeight: "300px" }}>
      <p>Se connecter</p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="h-72 flex flex-col items-center justify-around"
      >
        <input
          className="w-3/4 p-3"
          type={"email"}
          name="username"
          value={user.username}
          placeholder="Adresse e-mail"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className=" w-3/4 p-3"
          type="password"
          name="password"
          placeholder="mot de passe"
          value={user.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <p onClick={() => dispatch({ type: REGISTER })}>
          Pas encore de compte?
        </p>
        <button className="bg-main text-white rounded-lg p-4 w-4/5">
          Se connecter
        </button>
      </form>
    </div>
  );
}
