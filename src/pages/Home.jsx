import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CardMenu from "../components/CardMenu";
import ContentHome from "../components/ContentHome";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("nisn") == null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="card border-0" id="home">
      <Navbar />
      <div className="container-fluid">
        <CardMenu />
      </div>
      <div className="container">
        <div className="card border-0 shadow">
          <ContentHome />
        </div>
      </div>
      <div className="mt-5"></div>
      {/* <Footer /> */}
    </div>
  );
}
