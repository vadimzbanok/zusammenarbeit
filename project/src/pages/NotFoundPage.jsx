import React from "react";
import { useNavigate,Link } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops!</h3>
          <h1>
            <span>#</span>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Sorry, the page you requested was not found</h2>
        <Link to="/" className="notfound-button no-underline">GO BACK</Link>
      </div>
    </div>
  );
}
export default ErrorPage;
