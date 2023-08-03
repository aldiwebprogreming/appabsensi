import React from "react";

export default function ContentHome() {
  return (
    <div>
      <div className="container mt-4">
        <p className="text-danger">List absensi kamu di bulan ini</p>
        <div className="row">
          <div className="col-sm-6 col-6 mb-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Agustus</div>
              <div className="card-body">
                <h1 className="card-title">30</h1>
                <p>Kehadiran Bulan Ini</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-6 mb-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Agustus</div>
              <div className="card-body">
                <h1 className="card-title">3</h1>
                <p>Tidak Hadir Bulan Ini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
