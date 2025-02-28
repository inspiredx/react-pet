import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://192.168.0.30:8080/api/users/all`);
      const users = await response.json();

      const foundUser = users.find((user) => user.name === name && user.email === email);

      if (foundUser) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    } catch (error) {
      console.error("Ошибка при запросе:", error);
      navigate("/fail");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginForm;
