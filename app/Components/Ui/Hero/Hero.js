import classes from "./Hero.module.css";
// import ArrowIcon from "/Images/Icons/Arrow-down.svg";
import { Box, Typography, Button } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import CKLogoIcon from "./CkLogo";
import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import GeometricBackground from "../../Background/GeometricBackground";

const CKLogo = "/Images/CKlogo.png";
// Hero content data
const HERO_CONTENT = {
  greeting: "Hello, I'm Courtney",
  title: "Full-Stack Developer",
  description:
    "I specialize in creating innovative software applications and custom cloud solutions. Based in Houston, Texas, I bring ideas to life through clean, efficient code and exceptional user experiences.",
  buttons: {
    primary: {
      text: "View My Work",
      href: "./webapps",
    },
    secondary: {
      text: "Get In Touch",
      href: "/#contact",
    },
  },
  scrollText: "Scroll to explore",
  logo: {
    alt: "CK Logo",
    component: CKLogoIcon,
  },
};

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const words = ["Developer", "Designer", "Creator", "Innovator"];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current?.getBoundingClientRect() || {};

      if (left !== undefined) {
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Word cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate unique geometric patterns only once
  const generateHexagons = () => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      delay: Math.random() * 2,
      duration: Math.random() * 8 + 4,
    }));
  };

  const hexagons = useMemo(() => generateHexagons(), []);

  const movementScale = 1; // 20% as fast

  return (
    <div ref={containerRef} className={classes.hero}>
      {/* Interactive cursor follower */}

      {/* Main content container */}
      <motion.div
        className={classes.heroContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.heroContent}>
          {/* Left side - Dynamic text content */}
          <motion.div
            className={classes.textSection}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Animated greeting with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Typography
                variant="h1"
                className={classes.greeting}
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, #00AEEF, #45B7D1)",
                    borderRadius: "2px",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    animation: "slideIn 1s ease-out 1s forwards",
                  },
                }}
              >
                {HERO_CONTENT.greeting}
              </Typography>
            </motion.div>

            {/* Dynamic title with word cycling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography
                variant="h2"
                className={classes.title}
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 700,
                  color: "#222831",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                Full-Stack
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: "linear-gradient(45deg, #00AEEF, #45B7D1)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    position: "relative",
                  }}
                >
                  {words[currentWord]}
                </motion.span>
              </Typography>
            </motion.div>

            {/* Animated description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typography
                variant="body1"
                className={classes.description}
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "#222831",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  mb: 4,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "-20px",
                    top: "10px",
                    width: "4px",
                    height: "60%",
                    background: "linear-gradient(180deg, #00AEEF, #45B7D1)",
                    borderRadius: "2px",
                  },
                }}
              >
                {HERO_CONTENT.description}
              </Typography>
            </motion.div>

            {/* Interactive buttons */}
            <motion.div
              className={classes.ctaButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button
                  variant="contained"
                  size="large"
                  className={classes.primaryButton}
                  sx={{
                    background:
                      "linear-gradient(45deg, #00AEEF 0%, #45B7D1 100%)",
                    borderRadius: "30px",
                    px: 5,
                    py: 2,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 10px 30px rgba(0, 174, 239, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                    color: "#fff",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "left 0.5s",
                    },
                    "&:hover::before": {
                      left: "100%",
                    },
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #007EA7 0%, #00AEEF 100%)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 40px rgba(0, 174, 239, 0.3)",
                    },
                  }}
                >
                  {HERO_CONTENT.buttons.primary.text}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.secondaryButton}
                  sx={{
                    border: "3px solid",
                    borderColor: "#00AEEF",
                    color: "#00AEEF",
                    borderRadius: "30px",
                    px: 5,
                    py: 2,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    ml: 3,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "rgba(0, 174, 239, 0.07)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "0%",
                      height: "100%",
                      background: "linear-gradient(45deg, #00AEEF, #45B7D1)",
                      transition: "width 0.3s ease",
                      zIndex: -1,
                    },
                    "&:hover::before": {
                      width: "100%",
                    },
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#007EA7",
                      backgroundColor: "transparent",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 25px rgba(0, 174, 239, 0.2)",
                    },
                  }}
                >
                  {HERO_CONTENT.buttons.secondary.text}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive logo */}
          <motion.div
            className={classes.imageSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className={classes.logoContainer}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.8 },
              }}
              style={{
                filter: `drop-shadow(${
                  (mousePosition.x * 20 - 10) * movementScale
                }px ${
                  (mousePosition.y * 20 - 10) * movementScale
                }px 30px rgba(255, 107, 107, 0.4))`,
              }}
            >
              <Image
                src={CKLogo}
                alt={HERO_CONTENT.logo.alt}
                width={400}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "400px",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Unique scroll indicator */}
      </motion.div>

      {/* Add CSS animation keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
