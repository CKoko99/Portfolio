import classes from "./Projects.module.css";
import webapp from "../../../Images/WebApp.svg";
import ecommerce from "../../../Images/Ecommerce.svg";
import { Link } from "react-router-dom";
import Image from "mui-image";

function Projects() {
  return (
    <>
      <div id="projects" className={classes["Heading"]}>
        Projects
      </div>
      <div className={classes["sections"]}>
        <div className={classes["img-board"]}>
          <Link to="/Webapps">
            <Image width={"22em"} alt="Web Applications" src={webapp} />
            <div className={classes["img-text"]}>Web Applications</div>
          </Link>
        </div>
        <div className={classes["img-board"]}>
          <Link to="/Ecommerce">
            <Image width={"22em"} alt="Ecommerce" src={ecommerce} />
            <div className={classes["img-text"]}>Ecommerce</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
