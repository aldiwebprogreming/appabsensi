import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import ScanSuksek from "./ScanSuksek";
import ScanError from "./ScanError";

export default function ContentMasuk() {
  const [qrvalue, setqrValue] = useState("");
  const [qrerror, setqrError] = useState(false);
  const scan = () => {
    const scanner = new Html5QrcodeScanner("render", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();

      if (result == "masuk") {
        setqrValue(result);
      } else {
        setqrError(true);
      }

      //   setScanResult(result);
      //   addData();
    }
    function error(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scan();
  }, []);

  return (
    <div>
      <div className="card" id="content-masuk">
        <div className="card-body">
          <h4 className="text-danger">
            Scand Masuk <i className="fas fa-qrcode"></i>
          </h4>
          <hr />
          <div className="card shadow" id="render">
            <center>
              <img
                src="./qr-scan.png"
                className="img-fluid mt-3 mb-3"
                alt="Responsive image"
                style={{ height: "200px", width: "200px" }}
              ></img>
            </center>
          </div>
          {qrvalue ? (
            <div>
              <ScanSuksek />
            </div>
          ) : (
            ""
          )}
          {qrerror ? (
            <div>
              <ScanError />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
