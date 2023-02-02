import classes from "./About.module.css";
import speak from "../../../Images/Icons/speak.svg";
import frame from "../../../Images/Icons/framework.svg";
import tech from "../../../Images/Icons/tech.svg";

function About() {
  return (
    <>
      <div id="about" className={classes["about"]}>
        <div className={classes["top-section"]}>
          <div className={classes["top-section-heading"]}>About Me</div>
          <div className={classes["section"]}>
            I am a progress driven developer eager to master my craft. I am
            dedicated to lifelong learning and grateful to be able to create new
            things everyday with my technical skills. I enjoy bringing life to
            new ideas whether it is for a personal project or one of my clients.
          </div>
        </div>
        <div className={classes["bottom-section"]}>
          <div className={classes["bottom-section-heading"]}>What I Speak</div>
          <div className={classes["section"]}>
            <div className={classes["groups"]}>
              <div className={classes["group"]}>
                <div className={classes["sub-heading"]}>
                  <img alt="Languages" src={speak} /> Languages
                </div>
                <div className={classes["list"]}>
                  <div className={classes["list-item"]}>HTML</div>
                  <div className={classes["list-item"]}>CSS</div>
                  <div className={classes["list-item"]}>Javascript</div>
                  <div className={classes["list-item"]}>Python</div>
                  <div className={classes["list-item"]}>Node Js</div>
                  <div className={classes["list-item"]}>Liquid</div>
                </div>
              </div>
              <div className={classes["group"]}>
                <div className={classes["sub-heading"]}>
                  <img alt="Frameworks" src={frame} /> Frameworks
                </div>
                <div className={classes["list"]}>
                  <div className={classes["list-item"]}>React Js</div>
                  <div className={classes["list-item"]}>Redux</div>
                  <div className={classes["list-item"]}>Express</div>
                  <div className={classes["list-item"]}>Flask</div>
                </div>
              </div>
              <div className={classes["group"]}>
                <div className={classes["sub-heading"]}>
                  <img alt="tech" src={tech} /> Technologies
                </div>
                <div className={classes["list"]}>
                  <div className={classes["list-item"]}>Git</div>
                  <div className={classes["list-item"]}>Amazon Web Sevices</div>
                  <div className={classes["list-item"]}>Firebase</div>
                  <div className={classes["list-item"]}>MySQL</div>
                  <div className={classes["list-item"]}>Mongo DB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
