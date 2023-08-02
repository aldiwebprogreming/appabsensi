import React from "react";
import Navbar2 from "../components/Navbar2";
import ContentMasuk from "../components/ContentMasuk";
import Footer from "../components/Footer";

export default function Masuk() {
  return (
    <div>
      <Navbar2 />
      <div className="mt-2">
        <ContentMasuk />
      </div>
      <Footer />
    </div>
  );
}
