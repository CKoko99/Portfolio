"use client";

import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Hero from "./Components/Ui/Hero/Hero";
import About from "./Components/Ui/About/About";
import Projects from "./Components/Ui/Projects/Projects";
import Contact from "./Components/Ui/Contact/Contact";
import GeometricBackground from "./Components/Background/GeometricBackground";

export default function Home() {
  return (
    <div className="background">
      <GeometricBackground />
      <Navbar />
      <div className="App">
        <Hero />
      </div>
      <About />
      <div className="App">
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
