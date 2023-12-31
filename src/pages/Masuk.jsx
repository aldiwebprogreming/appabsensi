import React from "react";
import Navbar2 from "../components/Navbar2";
import ContentMasuk from "../components/ContentMasuk";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Masuk() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("nisn") == null) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar2 />
      <div className="mt-2">
        <ContentMasuk />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
