import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-light bg-danger">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}
