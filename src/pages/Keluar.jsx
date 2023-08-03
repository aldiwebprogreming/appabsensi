import React from "react";
import Navbar2 from "../components/Navbar2";
import ContentKeluar from "../components/ContentKeluar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Keluar() {
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
        <ContentKeluar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
