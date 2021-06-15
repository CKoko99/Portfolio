import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Ui/Footer/Footer";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Hero from "./Components/Ui/Hero/Hero";
import About from './Components/Ui/About/About'
import Projects from "./Components/Ui/Projects/Projects";
import Contact from "./Components/Ui/Contact/Contact";
import Ecommerce from "./Components/Ui/Portfolio/Ecommerce";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
          <Navbar />
        <div className="App">
          <Hero/>
        </div>
          <About/>
          <div className="App">
            <Projects/>
          </div>
          <Contact/>

          <div className="App">
          <Ecommerce/>
          </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
