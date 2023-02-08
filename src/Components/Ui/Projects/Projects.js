import classes from "./Projects.module.css";
import webapp from "../../../Images/WebApp.svg";
import ecommerce from "../../../Images/Ecommerce.svg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div id="projects" className={classes["Heading"]}>
        Projects
      </div>
      <div className={classes["sections"]}>
        <div className={classes["img-board"]}>
          <Link to="/Webapps">
            <img alt="Web Applications" src={webapp} />
            <div className={classes["img-text"]}>Web Applications</div>
          </Link>
        </div>
        <div className={classes["img-board"]}>
          <Link to="/Ecommerce">
            <img alt="Ecommerce" src={ecommerce} />
            <div className={classes["img-text"]}>Ecommerce</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
