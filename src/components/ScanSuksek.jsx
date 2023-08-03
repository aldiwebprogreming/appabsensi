import React from "react";
import { Link } from "react-router-dom";

export default function ScanSuksek() {
  return (
    <div>
      <div className="">
        <center>
          <img
            src="./success.png"
            className="img-fluid mt-3 mb-3"
            alt="Responsive image"
            style={{ height: "100px", width: "100px" }}
          ></img>
          <h3 className="text-success">
            Selamat<br></br>Kahadiran anda <br></br>hari ini berhasil di catat
          </h3>

          <Link to="/home" className="btn btn-danger">
            <i className="fas fa-arrow-left"></i> Kembali ke home
          </Link>
        </center>
      </div>
    </div>
  );
}
