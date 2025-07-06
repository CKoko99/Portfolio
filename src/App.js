import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Hero from "./Components/Ui/Hero/Hero";
import About from "./Components/Ui/About/About";
import Projects from "./Components/Ui/Projects/Projects";
import Contact from "./Components/Ui/Contact/Contact";
import Ecommerce from "./Components/Ui/Portfolio/Ecommerce";
import Webapps from "./Components/Ui/Portfolio/Webapps"
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  //set font to Montserrat
  typography: {
    fontFamily: "Montserrat",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="background">
          <Routes>
            <Route path="/Ecommerce" element={<>
              <Navbar />
              <div className="App">
                <Ecommerce />
              </div>
            </>} />
            <Route path="/Webapps" element={<>
              <Navbar />
              <div className="App">
                <Webapps />
              </div>
            </>} />
            <Route path="/*" element={<>
              <Navbar />
              <div className="App">
                <Hero />
              </div>
              <About />
              <div className="App">
                <Projects />
              </div>
            </>} />
          </Routes>
          <Contact />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
