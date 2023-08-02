import React from "react";
import { Link } from "react-router-dom";

export default function ScanError() {
  return (
    <div>
      <div className="">
        <center>
          <img
            src="./cancel.png"
            className="img-fluid mt-3 mb-3"
            alt="Responsive image"
            style={{ height: "100px", width: "100px" }}
          ></img>
          <h3 className="text-success">
            Mohon maaf<br></br>scan code qr anda salah
          </h3>

          <a href="/masuk" className="btn btn-danger">
            <i className="fas fa-arrows-rotate"></i> Coba lagi
          </a>
        </center>
      </div>
    </div>
  );
}
