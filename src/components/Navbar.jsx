import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-danger" id="navbar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="text-white font-whight-bold">QRCODE</p>
            <p
              className="text-white"
              style={{ position: "absolute", right: "30px" }}
            >
              Aldi
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
