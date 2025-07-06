import classes from "./Projects.module.css";
import Link from "next/link";
import { Box, Typography, Container, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

// Projects content data
const PROJECTS_CONTENT = {
  heading: "My Work",
  subtitle:
    "Explore a selection of my favorite projects, from web apps to e-commerce and more.",
  card: {
    name: "Portfolio Showcase",
    description:
      "A curated collection of my best work—modern web applications, e-commerce solutions, and more. Each project represents my passion for clean code, intuitive design, and seamless user experiences.",
    icon: "/Images/WebApp.svg",
    href: "/webapps",
    color: "#00AEEF",
    count: "5+ Projects",
    cta: "View My Projects",
  },
};

function Projects() {
  return (
    <div id="projects" className={classes["projects"]}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
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
                  fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3rem" },
                  background:
                    "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                {PROJECTS_CONTENT.heading}
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
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  color: "#6B7280",
                  maxWidth: "600px",
                  mx: "auto",
                  fontWeight: 400,
                  px: { xs: 2, sm: 0 },
                }}
              >
                {PROJECTS_CONTENT.subtitle}
              </Typography>
            </motion.div>
          </Box>

          {/* Main Content - Image Left, Text Right */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1fr 1fr",
              },
              gap: { xs: 4, sm: 5, md: 6 },
              alignItems: "center",
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    background:
                      "linear-gradient(145deg, #FFFFFF 0%, #F8FBFF 100%)",
                    borderRadius: { xs: 2, md: 3 },
                    p: { xs: 3, sm: 4, md: 5 },
                    width: { xs: "100%", sm: 350, md: 400, lg: 450 },
                    height: { xs: 280, sm: 320, md: 360, lg: 380 },
                    border: "1px solid rgba(0, 174, 239, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${PROJECTS_CONTENT.card.color} 0%, #45B7D1 100%)`,
                    },
                  }}
                >
                  {/* Project Count Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 12, sm: 16 },
                      right: { xs: 12, sm: 16 },
                      background:
                        "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                      color: "white",
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.3, sm: 0.5 },
                      borderRadius: "12px",
                      fontSize: { xs: "0.7rem", sm: "0.8rem" },
                      fontWeight: 600,
                      boxShadow: "0 4px 12px rgba(0, 174, 239, 0.3)",
                    }}
                  >
                    {PROJECTS_CONTENT.card.count}
                  </Box>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 70, sm: 80, md: 100 },
                        height: { xs: 70, sm: 80, md: 100 },
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${PROJECTS_CONTENT.card.color} 0%, #45B7D1 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 12px 30px rgba(0, 174, 239, 0.2)",
                        mb: 2,
                      }}
                    >
                      <Image
                        src={PROJECTS_CONTENT.card.icon}
                        alt="Web App Icon"
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
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                      textAlign: "center",
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    {PROJECTS_CONTENT.card.name}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: "#2C3E50",
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.2rem" },
                  }}
                >
                  {PROJECTS_CONTENT.card.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#6B7280",
                    mb: { xs: 3, sm: 4 },
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.7,
                    maxWidth: "500px",
                  }}
                >
                  {PROJECTS_CONTENT.card.description}
                </Typography>

                {/* CTA Button */}
                <Link
                  href={PROJECTS_CONTENT.card.href}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                      borderRadius: "50px",
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.2, sm: 1.5 },
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0 8px 25px rgba(0, 174, 239, 0.3)",
                      transition: "all 0.3s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 35px rgba(0, 174, 239, 0.4)",
                      },
                    }}
                  >
                    {PROJECTS_CONTENT.card.cta}
                    <ArrowForwardIcon
                      sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
                    />
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}

export default Projects;
