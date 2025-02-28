import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Авторизация успешна!</h2>
      <Link to="/users">Перейти к списку пользователей</Link>
    </div>
  );
}

export default SuccessPage;
