import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Hero from "./Components/Ui/Hero/Hero";
import About from "./Components/Ui/About/About";
import Projects from "./Components/Ui/Projects/Projects";
import Contact from "./Components/Ui/Contact/Contact";
import Ecommerce from "./Components/Ui/Portfolio/Ecommerce";
import Webapps from "./Components/Ui/Portfolio/Webapps"

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Switch>
          <Route path="/Ecommerce">
            <Navbar/>
            <div className="App">
              <Ecommerce />
            </div>
          </Route>
          <Route path="/Webapps">
            <Navbar/>
            <div className="App">
              <Webapps/>
            </div>
          </Route>
          <Route path="/*">
            <Navbar />
            <div className="App">
              <Hero />
            </div>
            <About />
            <div className="App">
              <Projects />
            </div>
          </Route>
        </Switch>
            <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
