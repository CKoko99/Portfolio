import classes from "./Contact.module.css";
import Image from "next/image";
import { Box, Typography, Container, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ShareIcon from "@mui/icons-material/Share";

// Contact content data
const CONTACT_CONTENT = {
  heading: "Get in Touch",
  subtitle: "Let's discuss your next project or just say hello!",
  email: "CKWebDev99@gmail.com",
  phone: "(832)-420-9763",
  social: {
    heading: "Connect on Social Media",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ckoko99",
        icon: "/Images/Icons/github.svg",
        color: "#333",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ckwebdev/",
        icon: "/Images/Icons/instagram.svg",
        color: "#E4405F",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/courtney-koko-b49b19214/",
        icon: "/Images/Icons/linkedin.svg",
        color: "#0077B5",
      },
    ],
  },
};

function Contact() {
  return (
    <div id="contact" className={classes["Contact"]}>
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 8 }, background: "transparent" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Unified Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FBFF 100%)",
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                border: "1px solid rgba(0, 174, 239, 0.1)",
                transition: "all 0.3s ease-in-out",
                position: "relative",
                overflow: "hidden",
                maxWidth: "800px",
                mx: "auto",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0, 174, 239, 0.15)",
                  border: "1px solid rgba(0, 174, 239, 0.3)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #00AEEF 0%, #45B7D1 100%)",
                },
              }}
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
                      fontSize: { xs: "2.2rem", md: "2.8rem" },
                      background:
                        "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 2,
                    }}
                  >
                    {CONTACT_CONTENT.heading}
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
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      color: "#6B7280",
                      maxWidth: "600px",
                      mx: "auto",
                      fontWeight: 400,
                    }}
                  >
                    {CONTACT_CONTENT.subtitle}
                  </Typography>
                </motion.div>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: { xs: 4, md: 6 },
                  alignItems: "center",
                }}
              >
                {/* Left Side - Contact Info */}
                <Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: "#2C3E50",
                      mb: 4,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    Let's Connect
                  </Typography>

                  {/* Email Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                        boxShadow: "0 4px 12px rgba(0, 174, 239, 0.2)",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: 24, color: "white" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6B7280", fontWeight: 500, mb: 0.5 }}
                      >
                        Email
                      </Typography>
                      <Button
                        href={`mailto:${CONTACT_CONTENT.email}`}
                        variant="text"
                        sx={{
                          color: "#00AEEF",
                          fontWeight: 600,
                          fontSize: "1rem",
                          textTransform: "none",
                          p: 0,
                          minWidth: "auto",
                          "&:hover": {
                            background: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {CONTACT_CONTENT.email}
                      </Button>
                    </Box>
                  </Box>

                  {/* Phone Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                        boxShadow: "0 4px 12px rgba(0, 174, 239, 0.2)",
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 24, color: "white" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6B7280", fontWeight: 500, mb: 0.5 }}
                      >
                        Phone
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#2C3E50",
                          fontWeight: 600,
                          fontSize: "1rem",
                        }}
                      >
                        {CONTACT_CONTENT.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Right Side - Social Media */}
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                        boxShadow: "0 4px 12px rgba(0, 174, 239, 0.2)",
                      }}
                    >
                      <ShareIcon sx={{ fontSize: 24, color: "white" }} />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{
                        fontWeight: 600,
                        color: "#2C3E50",
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      {CONTACT_CONTENT.social.heading}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {CONTACT_CONTENT.social.links.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              width: 55,
                              height: 55,
                              borderRadius: "50%",
                              background:
                                "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1px solid rgba(0, 174, 239, 0.2)",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 8px 20px rgba(0, 174, 239, 0.3)",
                              },
                            }}
                          >
                            <Image
                              src={social.icon}
                              alt={social.name}
                              width={26}
                              height={26}
                              style={{
                                filter: "brightness(0) invert(1)",
                                transition: "filter 0.3s ease-in-out",
                              }}
                              className="social-icon"
                            />
                          </Box>
                        </a>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
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
            transition={{ duration: 1.2, delay: 1 }}
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
        </motion.div>
      </Container>
    </div>
  );
}

export default Contact;
