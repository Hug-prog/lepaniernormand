import React from "react";

export default function Register() {
  const initForm = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div>
      <p>Créer un compte</p>
      <form>
        <input type="email" name="email" placeholder="Adresse e-mail" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="password" name="password" placeholder="mot de passe" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="comfirmez mot de passe"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
