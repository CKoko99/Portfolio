import classes from "./Projects.module.css";
import webapp from "../../../Images/WebApp.svg";
import ecommerce from "../../../Images/Ecommerce.svg";

function Projects() {
  return (
    <>
      <div id="projects" className={classes["Heading"]}>Projects</div>
      <div className={classes["sections"]}>
        <div className={classes["img-board"]}>
          <img alt="Web Applications" src={webapp} />
          <div className={classes["img-text"]}>Web Applications</div>
        </div>
        <div className={classes["img-board"]}>
          <img alt="Ecommerce" src={ecommerce} />
          <div className={classes["img-text"]}>Ecommerce</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
