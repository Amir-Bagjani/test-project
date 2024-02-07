import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>sorry this page does not exist.</h1>
      <p>404</p>
      <Link to="/">go back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
