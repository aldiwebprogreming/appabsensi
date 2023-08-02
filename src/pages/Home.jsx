import React from "react";
import Navbar from "../components/Navbar";
import CardMenu from "../components/CardMenu";
import ContentHome from "../components/ContentHome";
import Footer from "../components/Footer";

export default function Home() {
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
      <Footer />
    </div>
  );
}
