import classes from "./About.module.css";
import speak from "../../../Images/Icons/speak.svg";
import frame from "../../../Images/Icons/framework.svg";
import tech from "../../../Images/Icons/tech.svg";
import { Box, Typography } from '@mui/material';
const skills = [
  {
    name: "Frontend",
    items: ["HTML", "CSS", "Javascript", "React", "Redux", "Next Js", "MUI", "Bootstrap"],
    img: speak
  },
  {
    name: "Backend",
    items: ["Node", "Express", "Python", "Java", "PHP", "C++"],
    img: frame
  },
  {
    name: "Tools",
    items: ["Git", "Google Cloud Platform", "Adobe XD", "AWS", "Firebase", "MySQL", "Mongo DB"],
    img: tech
  }
]

const styles = {
  skills: {
    display: "flex",
    flexDirection: "row",

  },
  skillSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subHeading: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: "1rem",
  }
}
function About() {
  return (
    <>
      <div id="about" className={classes["about"]}>
        <div className={classes["top-section"]}>
          <div className={classes["top-section-heading"]}>About Me</div>
          <div className={classes["section"]}>
            As a highly motivated software engineer, I am constantly striving to enhance my
            technical abilities and bring my passion for software development to every project
            I work on. With a Bachelor of Science in Computer Science from the University of Houston,
            I am committed to continuous learning and am always eager to tackle new challenges.
            Whether it's for a client or a personal project, I am driven by the thrill of bringing
            innovative ideas to life through my code.
          </div>
        </div>
        <div className={classes["bottom-section"]}>
          <div className={classes["bottom-section-heading"]}>My Expertise</div>
          <Box>

            {skills.map((item, index) => {
              return (
                <Box key={index} sx={{ ...styles.skillSection }}>
                  <Box sx={{ ...styles.subHeading }}>
                    <img alt={item.name} src={item.img} />
                    <Typography variant="h5">
                      {item.name}:
                    </Typography>
                  </Box>
                  <Box sx={{ ...styles.skills }}>
                    {item.items.map((skill, index) => {
                      return (
                        <Typography key={index} variant="h6" component="div" sx={{ marginRight: ".5rem" }} >
                          {skill}{index !== item.items.length - 1 ? ", " : ""}
                        </Typography>
                      )
                    }
                    )}
                  </Box>
                </Box>)
            }
            )}
          </Box>

          <div className={classes["section"]}>
            <div className={classes["groups"]}>
              <div className={classes["group"]}>
                <div className={classes["list"]}>
                  <div className={classes["list-item"]}>HTML</div>
                  <div className={classes["list-item"]}>CSS</div>
                  <div className={classes["list-item"]}>Javascript</div>
                  <div className={classes["list-item"]}>React</div>
                  <div className={classes["list-item"]}>Redux</div>
                </div>
              </div>
              <div className={classes["group"]}>
                <div className={classes["sub-heading"]}>
                  <img alt="Frameworks" src={frame} /> Backend
                </div>
                <div className={classes["list"]}>
                  <div className={classes["list-item"]}>Python</div>
                  <div className={classes["list-item"]}>Java</div>
                  <div className={classes["list-item"]}>PHP</div>
                  <div className={classes["list-item"]}>C++</div>
                </div>
              </div>
              <div className={classes["group"]}>
                <div className={classes["sub-heading"]}>
                  <img alt="tech" src={tech} /> Tools
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
      </div >
    </>
  );
}

export default About;
