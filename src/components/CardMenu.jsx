import React from "react";
import { Link } from "react-router-dom";

export default function CardMenu() {
  return (
    <div>
      <div className="cardmenu shadow">
        <div className="container-fluid">
          <div className="text">
            <br />
            <p className="text-danger">Selamat datang aldi</p>
            <hr className="text-danger" />
            <p className="text-danger">Tentukan kahadiran kamu disini</p>
          </div>

          <div className="row">
            <div className="col-sm-4 col-4">
              <Link to={"/masuk"} style={{ textDecoration: "none" }}>
                <div className="card bg-danger text-center text-white shadow">
                  <div className="card-body">
                    <p>Absen Masuk</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-4 col-4">
              <Link to={"/keluar"} style={{ textDecoration: "none" }}>
                <div className="card bg-danger text-center text-white shadow">
                  <div className="card-body">
                    <p>Absen Keluar</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-4 col-4">
              <div className="card bg-danger text-center text-white shadow">
                <div className="card-body">
                  <p>Saya Izin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
