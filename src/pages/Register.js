import React from "react";

export default function Register() {
  const initForm = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initForm);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <p>Créer un compte</p>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          value={formData.lastname}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="mot de passe"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="comfirmez mot de passe"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
