import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ошибка авторизации</h2>
      <Link to="/">Попробовать снова</Link>
    </div>
  );
}

export default ErrorPage;
