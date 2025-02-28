import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Добро пожаловать!</h2>
      <p>Выберите действие:</p>
      <Link to="/users">
        <button>Список пользователей</button>
      </Link>
      <Link to="/login">
        <button>Войти</button>
      </Link>
    </div>
  );
}

export default Home;
