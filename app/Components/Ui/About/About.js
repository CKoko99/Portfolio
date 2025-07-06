import classes from "./About.module.css";
import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// About content data
const ABOUT_CONTENT = {
  heading: "About Me",
  description:
    "I love software, complex systems, cars, and understanding how things work from the ground up. My fascination with technology extends beyond just coding—I'm passionate about dissecting complex systems, whether they're automotive engineering marvels or intricate software architectures. With a Bachelor of Science in Computer Science from the University of Houston, I am a lifelong learner who thrives on exploring new technologies and approaches. I believe that truly understanding how things work at their core is the key to building better solutions. Whether it's for a client or a personal project, I am driven by the thrill of bringing innovative ideas to life through my code.",
  expertise: {
    heading: "My Expertise",
    skills: [
      {
        name: "Frontend",
        items: [
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "Redux",
          "Next Js",
          "MUI",
          "Bootstrap",
        ],
        icon: "/Images/Icons/speak.svg",
      },
      {
        name: "Backend",
        items: ["Node", "Express", "Python", "Java", "PHP", "C++"],
        icon: "/Images/Icons/framework.svg",
      },
      {
        name: "Tools",
        items: [
          "Git",
          "Google Cloud Platform",
          "Adobe XD",
          "AWS",
          "Firebase",
          "MySQL",
          "Mongo DB",
        ],
        icon: "/Images/Icons/tech.svg",
      },
    ],
  },
};

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
  },
};

function AboutMe() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            background: "linear-gradient(135deg, #F5F7FA 0%, #E3F0FF 100%)",
            borderRadius: 4,
            p: 6,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #00AEEF 0%, #45B7D1 100%)",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                mb: 4,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #00AEEF 0%, #45B7D1 100%)",
                  borderRadius: "2px",
                },
              }}
            >
              {ABOUT_CONTENT.heading}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.8,
                color: "#2C3E50",
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto",
                fontWeight: 400,
                letterSpacing: "0.3px",
              }}
            >
              {ABOUT_CONTENT.description}
            </Typography>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              border: "2px solid #00AEEF",
              borderRadius: "50%",
              opacity: 0.1,
            }}
          />
          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            whileInView={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              width: "40px",
              height: "40px",
              border: "2px solid #45B7D1",
              borderRadius: "50%",
              opacity: 0.1,
            }}
          />
        </Paper>
      </motion.div>
    </Container>
  );
}

function Expertise() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              {ABOUT_CONTENT.expertise.heading}
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 4 },
            mt: 4,
            px: { xs: 1, sm: 2 },
          }}
        >
          {ABOUT_CONTENT.expertise.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(145deg, #FFFFFF 0%, #F8FBFF 100%)",
                  borderRadius: { xs: 2, md: 3 },
                  p: { xs: 3, sm: 4 },
                  height: "100%",
                  border: "1px solid rgba(0, 174, 239, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 174, 239, 0.15)",
                    border: "1px solid rgba(0, 174, 239, 0.3)",
                    "& .skill-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                    },
                    "& .skill-items": {
                      opacity: 1,
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, #00AEEF 0%, #45B7D1 100%)`,
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <motion.div
                    className="skill-icon"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginBottom: "1.5rem",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, sm: 70, md: 80 },
                        height: { xs: 60, sm: 70, md: 80 },
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        boxShadow: "0 8px 20px rgba(0, 174, 239, 0.2)",
                      }}
                    >
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={40}
                        height={40}
                        style={{
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </Box>
                  </motion.div>

                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: "#2C3E50",
                      mb: { xs: 2, md: 3 },
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                    }}
                  >
                    {skill.name}
                  </Typography>

                  <Box
                    className="skill-items"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: { xs: 0.5, sm: 1 },
                      opacity: 0.9,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {skill.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, #E3F0FF 0%, #F0F8FF 100%)",
                            borderRadius: "20px",
                            px: { xs: 1.5, sm: 2 },
                            py: { xs: 0.5, sm: 1 },
                            border: "1px solid rgba(0, 174, 239, 0.2)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                              color: "white",
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              fontSize: { xs: "0.8rem", sm: "0.9rem" },
                              color: "inherit",
                              transition: "color 0.3s ease-in-out",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}

function About() {
  return (
    <div id="about" className={classes["about"]}>
      <AboutMe />
      <Expertise />
    </div>
  );
}

export default About;
