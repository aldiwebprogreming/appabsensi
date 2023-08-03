import axios from "axios";
import React, { useState } from "react";
import { Appstore } from "../store/Appstore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [nisn, setNisn] = useState("");
  const [pass, setPass] = useState("");
  const [LoginGagal, setloginGagal] = useState(false);
  const store = Appstore();
  const navigate = useNavigate();

  const actionLogin = async () => {
    await axios
      .post("http://localhost/backendabsensi/api/login", {
        nisn: nisn,
        password: pass,
      })
      .then(function (response) {
        console.log(response.data);
        setNisn("");
        setPass("");
        setloginGagal(false);
        localStorage.setItem("nisn", nisn);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
        setloginGagal(true);
      });
  };

  const actionLogout = () => {
    store.updatenisn("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="card mt-5">
              <div className="card-body shadow">
                <h5 className="text-danger text-center ">
                  <b>
                    Login {store.nisn}
                    <br></br>
                  </b>
                </h5>
                <hr />
                <p className="text-center text-danger">
                  Masukan nisn dan password anda dengan benar untuk melakukan
                  absensi
                </p>

                <div className="form-group mt-2">
                  <label className="font-weight-bold">Nisn</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukan nisn siswa"
                    value={nisn}
                    onChange={(e) => setNisn(e.target.value)}
                  />
                </div>

                <div className="form-group mt-4">
                  <label className="font-weight-bold">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Masukan password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                {LoginGagal ? (
                  <div className="alert alert-danger mt-3" role="alert">
                    Akun yang anda masukan salah
                  </div>
                ) : (
                  ""
                )}

                <div className="form-group mt-5">
                  <button
                    onClick={() => actionLogin()}
                    type="submit"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}
