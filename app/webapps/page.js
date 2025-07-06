'use client';

import "../App.css";
import Navbar from "../Components/Ui/Navbar/Navbar";
import Webapps from "../Components/Ui/Portfolio/Webapps";

export default function WebappsPage() {
  return (
    <div className="background">
      <Navbar />
      <div className="App">
        <Webapps />
      </div>
    </div>
  );
} 