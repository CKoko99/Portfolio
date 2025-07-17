import classes from "./Portfolio.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  FilterList as FilterIcon,
  Close as CloseIcon,
  Visibility as ViewIcon,
  Code as CodeIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";

// Portfolio content data
const PORTFOLIO_CONTENT = {
  heading: "My Portfolio",
  subtitle:
    "A collection of projects showcasing my passion for creating innovative web applications with modern technologies.",
  categories: [
    { label: "All Projects", value: "all" },
    { label: "Web Apps", value: "webapp" },
    { label: "E-commerce", value: "ecommerce" },
    { label: "Full Stack", value: "fullstack" },
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
  ],
};

const projects = [
  {
    id: "us-insurance-training",
    title: "US Insurance Training",
    category: "webapp",
    type: "fullstack",
    featured: true,
    desktopImages: [
      "/Images/InsuranceTraining/Desktop/UST1.png",
      "/Images/InsuranceTraining/Desktop/UST2.png",
      "/Images/InsuranceTraining/Desktop/UST3.png",
    ],
    mobileImages: [
      "/Images/InsuranceTraining/Mobile/UST1.png",
      "/Images/InsuranceTraining/Mobile/UST2.png",
      "/Images/InsuranceTraining/Mobile/UST3.png",
    ],
    thumbnail: "/Images/InsuranceTraining/Desktop/UST1.png",
    description:
      "Comprehensive online learning platform for insurance agents preparing for licensing exams.",
    overview: [
      "US Insurance Training is a comprehensive and innovative online learning platform that offers a convenient and intuitive way for insurance agents to prepare for their licensing exam.",
      "The site was built to replace an existing site and add new features such as webcam video responses, interactive quiz formats, and progress tracking to keep students on track.",
    ],
    techStack: [
      "React",
      "Material UI",
      "Next.js",
      "Firebase",
      "Node.js",
      "Express",
      "Google Cloud Platform",
    ],
    links: [
      {
        type: "live",
        url: "https://usinsurancetraining.com/",
        label: "Live Site",
        icon: <LaunchIcon />,
      },
    ],
    features: [
      "Vastly improved training content to represent the brand's standard",
      "Improved assessments to include multiple choice and video responses",
      "Included admin portal to track trainees progress and grade their video responses",
      "Notification system via email to alert admins of trainees progress",
    ],
  },
  {
    id: "cougar-cafe",
    title: "Cougar Cafe",
    category: "webapp",
    type: "fullstack",
    featured: true,
    desktopImages: [
      "/Images/CougarCafe/Desktop/CC1.png",
      "/Images/CougarCafe/Desktop/CC2.png",
      "/Images/CougarCafe/Desktop/CC3.png",
      "/Images/CougarCafe/Desktop/CC4.png",
    ],
    mobileImages: [
      "/Images/CougarCafe/Mobile/CC1.png",
      "/Images/CougarCafe/Mobile/CC2.png",
      "/Images/CougarCafe/Mobile/CC3.png",
      "/Images/CougarCafe/Mobile/CC4.png",
    ],
    thumbnail: "/Images/CougarCafe/Desktop/CC1.png",
    description:
      "Feature-rich full-stack web application for restaurant dining experience enhancement.",
    overview: [
      "Cougar Cafe is a feature-rich full-stack web application designed to enhance the dining experience of customers.",
      "The application includes menu browsing, reservation system, and seamless dining experience management.",
    ],
    techStack: ["React", "Material UI", "PHP", "MySQL", "REST API"],
    links: [
      {
        type: "code",
        url: "https://github.com/ckoko99/CougarCafe",
        label: "View Code",
        icon: <GitHubIcon />,
      },
    ],
    features: [
      "Menu browsing",
      "Reservation system",
      "Real-time availability",
      "Responsive design",
    ],
  },
  {
    id: "ck-trips",
    title: "CK Trips",
    category: "webapp",
    type: "frontend",
    featured: true,
    desktopImages: [
      "/Images/CkTrips/Desktop/CKT1.png",
      "/Images/CkTrips/Desktop/CKT2.png",
      "/Images/CkTrips/Desktop/CKT3.png",
      "/Images/CkTrips/Desktop/CKT4.png",
      "/Images/CkTrips/Desktop/CKT5.png",
    ],
    mobileImages: [
      "/Images/CkTrips/Mobile/CKT1.png",
      "/Images/CkTrips/Mobile/CKT2.png",
      "/Images/CkTrips/Mobile/CKT3.png",
      "/Images/CkTrips/Mobile/CKT4.png",
      "/Images/CkTrips/Mobile/CKT5.png",
      "/Images/CkTrips/Mobile/CKT6.png",
    ],
    thumbnail: "/Images/CkTrips/Desktop/CKT1.png",
    description:
      "Comprehensive travel planner app that streamlines the travel planning process.",
    overview: [
      "CK Trips is a comprehensive and innovative travel planner app that streamlines the travel planning process.",
      "The app helps users plan all aspects of their trips in one convenient place with real-time data integration.",
    ],
    techStack: ["React", "Redux", "Next.js", "Firebase", "Google APIs"],
    links: [
      {
        type: "live",
        url: "https://travel-app-jet.vercel.app/",
        label: "Live Site",
        icon: <LaunchIcon />,
      },
      {
        type: "code",
        url: "https://github.com/ckoko99/TravelApp",
        label: "View Code",
        icon: <GitHubIcon />,
      },
    ],
    features: [
      "Trip planning",
      "Real-time data",
      "Admin panel",
      "Multi-platform support",
    ],
  },
  {
    id: "everyday-counts",
    title: "Every Day Counts",
    category: "webapp",
    type: "frontend",
    featured: false,
    desktopImages: ["/Images/edc.gif"],
    mobileImages: ["/Images/edcmobile.gif"],
    thumbnail: "/Images/edc.gif",
    description:
      "Productivity tool with Pomodoro technique integration for daily task management.",
    overview: [
      "Every Day Counts is a powerful productivity tool that helps users plan their daily tasks and achieve their goals.",
      "The app integrates the Pomodoro technique for focused work sessions and progress tracking.",
    ],
    techStack: ["React", "Redux", "Firebase", "Pomodoro Technique"],
    links: [
      {
        type: "live",
        url: "https://edc.vercel.app/",
        label: "Live Site",
        icon: <LaunchIcon />,
      },
      {
        type: "code",
        url: "https://github.com/ckoko99/EverydayCounts",
        label: "View Code",
        icon: <GitHubIcon />,
      },
    ],
    features: [
      "Task management",
      "Pomodoro timer",
      "Progress tracking",
      "Focus sessions",
    ],
  },
  {
    id: "revved-up",
    title: "Revved Up",
    category: "webapp",
    type: "fullstack",
    featured: false,
    desktopImages: ["/Images/revvedup.png"],
    mobileImages: ["/Images/revvedupmobile.png"],
    thumbnail: "/Images/revvedup.png",
    description:
      "Car-based social media web application for automotive enthusiasts.",
    overview: [
      "Revved Up is a car-based social media web application designed for automotive enthusiasts.",
      "The platform allows users to share their car builds, connect with other enthusiasts, and showcase automotive projects.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Social Features"],
    links: [
      {
        type: "code",
        url: "https://github.com/ckoko99/Carbuilds",
        label: "View Code",
        icon: <GitHubIcon />,
      },
    ],
    features: [
      "Social networking",
      "Car build sharing",
      "Community features",
      "User profiles",
    ],
  },
  {
    id: "ecommerce-portfolio",
    title: "E-commerce Solutions Portfolio",
    category: "E-commerce",
    type: "Portfolio",
    featured: true,
    desktopImages: [
      "/Images/cutedesktopopt.gif",
      "/Images/blabergoptloop.gif",
      "/Images/oyps.gif",
    ],
    mobileImages: [
      "/Images/cutemobileopt.gif",
      "/Images/blabergmobileopt.gif",
      "/Images/oypsmobile.gif",
    ],
    thumbnail: "/Images/cutedesktopopt.gif",
    description:
      "A comprehensive collection of Shopify e-commerce projects showcasing custom theme development, responsive design, and conversion optimization.",
    overview: [
      "Complete custom Shopify stores with lookbooks and seasonal product categorization",
      "Custom responsive landing pages with mobile-optimized designs",
      "Conversion-focused redesigns with enhanced user experiences",
      "Fully responsive designs optimized for all platforms",
      "Custom product categorization and seamless user experiences",
      "Built with HTML, CSS, JavaScript, and Liquid",
    ],
    techStack: [
      "Shopify",
      "HTML",
      "CSS",
      "JavaScript",
      "Liquid",
      "Responsive Design",
    ],
    links: [
      {
        type: "portfolio",
        url: "#",
        label: "View Portfolio",
      },
    ],
    features: [
      "Custom Shopify Theme Development",
      "Responsive Design",
      "Conversion Optimization",
      "Product Lookbooks",
      "Seasonal Categorization",
      "Mobile-First Approach",
      "Custom Landing Pages",
      "User Experience Enhancement",
    ],
  },
];

function ProjectCard({ project, onViewDetails }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card
        elevation={isHovered ? 8 : 2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            "& .project-overlay": {
              opacity: 1,
            },
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onViewDetails(project)}
      >
        {/* Featured Badge */}
        {project.featured && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              background: "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0, 174, 239, 0.3)",
            }}
          >
            Featured
          </Box>
        )}

        {/* Project Image */}
        <Box sx={{ position: "relative", height: 240, overflow: "hidden" }}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>

        {/* Hover Overlay */}
        <Box
          className="project-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 174, 239, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "white",
              color: "#00AEEF",
              fontWeight: 600,
              "&:hover": {
                background: "#f5f5f5",
              },
            }}
            startIcon={<ViewIcon />}
          >
            View Details
          </Button>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              color: "#2C3E50",
              mb: 1,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            {project.description}
          </Typography>

          {/* Tech Stack */}
          <Box sx={{ mb: 2 }}>
            {project.techStack.slice(0, 4).map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  background:
                    "linear-gradient(135deg, #E3F0FF 0%, #F0F8FF 100%)",
                  color: "#00AEEF",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            ))}
            {project.techStack.length > 4 && (
              <Chip
                label={`+${project.techStack.length - 4} more`}
                size="small"
                variant="outlined"
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  borderColor: "#00AEEF",
                  color: "#00AEEF",
                  fontSize: "0.75rem",
                }}
              />
            )}
          </Box>

          {/* Quick Links */}
          <CardActions sx={{ p: 0, mt: "auto" }}>
            {project.links.map((link, index) => (
              <Button
                key={index}
                size="small"
                startIcon={link.icon}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                sx={{
                  color: "#00AEEF",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  "&:hover": {
                    background: "rgba(0, 174, 239, 0.1)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </CardActions>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectDetail({ project, open, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.desktopImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.desktopImages.length - 1 : prev - 1
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
            {project.title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Overview" />
            <Tab label="Gallery" />
            <Tab label="Features" />
          </Tabs>
        </Box>

        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Project Overview
              </Typography>
              {project.overview.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.7 }}
                >
                  {paragraph}
                </Typography>
              ))}

              <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Technology Stack
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.techStack.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{
                      background:
                        "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Project Gallery
              </Typography>
              <Box sx={{ position: "relative", mb: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 400,
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={project.desktopImages[currentImage]}
                    alt={`${project.title} - Image ${currentImage + 1}`}
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </Box>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    "&:hover": { background: "white" },
                  }}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    "&:hover": { background: "white" },
                  }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                {project.desktopImages.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: index === currentImage ? "#00AEEF" : "#ddd",
                      cursor: "pointer",
                    }}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </Box>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Key Features
              </Typography>
              <Grid container spacing={2}>
                {project.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        background:
                          "linear-gradient(135deg, #F8FBFF 0%, #E3F0FF 100%)",
                        border: "1px solid rgba(0, 174, 239, 0.2)",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        {project.links.map((link, index) => (
          <Button
            key={index}
            variant={link.type === "live" ? "contained" : "outlined"}
            startIcon={link.icon}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background:
                link.type === "live"
                  ? "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)"
                  : "transparent",
              borderColor: "#00AEEF",
              color: link.type === "live" ? "white" : "#00AEEF",
              "&:hover": {
                background:
                  link.type === "live"
                    ? "linear-gradient(135deg, #0098D4 0%, #3DA5C4 100%)"
                    : "rgba(0, 174, 239, 0.1)",
              },
            }}
          >
            {link.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

function Webapps() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "webapp") return project.category === "webapp";
    if (selectedCategory === "ecommerce")
      return project.category === "ecommerce";
    if (selectedCategory === "fullstack") return project.type === "fullstack";
    if (selectedCategory === "react")
      return project.techStack.includes("React");
    if (selectedCategory === "nextjs")
      return project.techStack.includes("Next.js");
    return true;
  });

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  return (
    <div className={classes["Portfolio"]}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.2rem", md: "3rem" },
                background: "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              {PORTFOLIO_CONTENT.heading}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#6B7280",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.6,
              }}
            >
              {PORTFOLIO_CONTENT.subtitle}
            </Typography>
          </motion.div>
        </Box>

        {/* Filter Tabs - Hidden for now */}
        {/* <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {PORTFOLIO_CONTENT.categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  selectedCategory === category.value ? "contained" : "outlined"
                }
                onClick={() => setSelectedCategory(category.value)}
                sx={{
                  borderRadius: "25px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  background:
                    selectedCategory === category.value
                      ? "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)"
                      : "transparent",
                  borderColor: "#00AEEF",
                  color:
                    selectedCategory === category.value ? "white" : "#00AEEF",
                  "&:hover": {
                    background:
                      selectedCategory === category.value
                        ? "linear-gradient(135deg, #0098D4 0%, #3DA5C4 100%)"
                        : "rgba(0, 174, 239, 0.1)",
                  },
                }}
              >
                {category.label}
              </Button>
            ))}
          </Box>
        </Box> */}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <ProjectCard
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        {/* Project Detail Dialog */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            open={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
          />
        )}
      </Container>
    </div>
  );
}

export default Webapps;
