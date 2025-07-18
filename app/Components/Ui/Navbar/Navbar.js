import Link from "next/link";
import classes from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Navbar content data
const NAVBAR_CONTENT = {
  brand: {
    name: "Courtney Koko",
    href: "/",
  },
  navigation: {
    about: {
      text: "Home",
      href: "/",
    },
    portfolio: {
      text: "Portfolio",
      href: "/webapps",
    },
    contact: {
      text: "Contact",
      href: "/#contact",
    },
    resume: {
      text: "Resume",
      href: "/Courtney-Koko-2025-Resume.pdf",
      external: true,
    },
  },
};

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeModalHandler() {
    setModalOpen(false);
  }

  function openModalHandler() {
    setModalOpen(true);
  }

  // Navigation link component
  const NavLink = ({ href, text, external = false, onClick }) => {
    const linkContent = (
      <motion.div
        className={classes.navLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#222831",
            textDecoration: "none",
            position: "relative",
            cursor: "pointer",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-4px",
              left: 0,
              width: "0%",
              height: "2px",
              background: "linear-gradient(90deg, #00AEEF, #45B7D1)",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          {text}
        </Typography>
      </motion.div>
    );

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {linkContent}
      </Link>
    );
  };

  return (
    <>
      <motion.div
        className={classes.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 174, 239, 0.1)" : "none",
        }}
      >
        <div className={classes.navbarContainer}>
          {/* Brand/Logo - Hidden until scrolled, but takes up space */}
          <div className={classes.brandContainer}>
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  className={classes.brand}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={NAVBAR_CONTENT.brand.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background:
                          "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {NAVBAR_CONTENT.brand.name}
                    </Typography>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className={classes.desktopNav}>
            {Object.entries(NAVBAR_CONTENT.navigation).map(([key, item]) => (
              <NavLink
                key={key}
                href={item.href}
                text={item.text}
                external={item.external}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className={classes.mobileNav}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={openModalHandler}
                sx={{
                  color: "#00AEEF",
                  "&:hover": {
                    backgroundColor: "rgba(0, 174, 239, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={classes.mobileModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={classes.mobileModalContent}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Close Button */}
              <motion.div
                className={classes.closeButton}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModalHandler}
              >
                <IconButton
                  sx={{
                    color: "#00AEEF",
                    "&:hover": {
                      backgroundColor: "rgba(0, 174, 239, 0.1)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </motion.div>

              {/* Mobile Navigation Links */}
              <div className={classes.mobileNavLinks}>
                {Object.entries(NAVBAR_CONTENT.navigation).map(
                  ([key, item], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavLink
                        href={item.href}
                        text={item.text}
                        external={item.external}
                        onClick={closeModalHandler}
                      />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
