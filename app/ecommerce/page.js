'use client';

import "../App.css";
import Navbar from "../Components/Ui/Navbar/Navbar";
import Ecommerce from "../Components/Ui/Portfolio/Ecommerce";

export default function EcommercePage() {
  return (
    <div className="background">
      <Navbar />
      <div className="App">
        <Ecommerce />
      </div>
    </div>
  );
} 