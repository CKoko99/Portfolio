import classes from "./Portfolio.module.css";
import edc from "../../../Images/edc.gif";
import edcmobile from "../../../Images/edcmobile.gif";
import travels from "../../../Images/travels.gif";
import travelsmobile from "../../../Images/travelsmobile.gif";
import revvedup from "../../../Images/revvedup.png";
import revvedupmobile from "../../../Images/revvedupmobile.png";
import cougarcafe from "../../../Images/cougarcafe.gif";
import cougarcafemobile from "../../../Images/cougarcafemobile.gif";
import CCDeskImg1 from "../../../Images/CougarCafe/Desktop/CC1.png";
import CCDeskImg2 from "../../../Images/CougarCafe/Desktop/CC2.png";
import CCDeskImg3 from "../../../Images/CougarCafe/Desktop/CC3.png";
import CCDeskImg4 from "../../../Images/CougarCafe/Desktop/CC4.png";
import CCMobileImg1 from "../../../Images/CougarCafe/Mobile/CC1.png";
import CCMobileImg2 from "../../../Images/CougarCafe/Mobile/CC2.png";
import CCMobileImg3 from "../../../Images/CougarCafe/Mobile/CC3.png";
import CCMobileImg4 from "../../../Images/CougarCafe/Mobile/CC4.png";
import CkTMobileImg1 from "../../../Images/CkTrips/Mobile/CKT1.png";
import CkTMobileImg2 from "../../../Images/CkTrips/Mobile/CKT2.png";
import CkTMobileImg3 from "../../../Images/CkTrips/Mobile/CKT3.png";
import CkTMobileImg4 from "../../../Images/CkTrips/Mobile/CKT4.png";
import CkTMobileImg5 from "../../../Images/CkTrips/Mobile/CKT5.png";
import CkTMobileImg6 from "../../../Images/CkTrips/Mobile/CKT6.png";
import CkTDeskImg1 from "../../../Images/CkTrips/Desktop/CKT1.png";
import CkTDeskImg2 from "../../../Images/CkTrips/Desktop/CKT2.png";
import CkTDeskImg3 from "../../../Images/CkTrips/Desktop/CKT3.png";
import CkTDeskImg4 from "../../../Images/CkTrips/Desktop/CKT4.png";
import CkTDeskImg5 from "../../../Images/CkTrips/Desktop/CKT5.png";
import USTDeskImg1 from "../../../Images/InsuranceTraining/Desktop/UST1.png";
import USTDeskImg2 from "../../../Images/InsuranceTraining/Desktop/UST2.png";
import USTDeskImg3 from "../../../Images/InsuranceTraining/Desktop/UST3.png";
import USTMobileImg1 from "../../../Images/InsuranceTraining/Mobile/UST1.png";
import USTMobileImg2 from "../../../Images/InsuranceTraining/Mobile/UST2.png";
import USTMobileImg3 from "../../../Images/InsuranceTraining/Mobile/UST3.png";
import { useState } from "react";
import { useEffect } from "react";

import Image from "mui-image";
import { Box, Button, Modal, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Circle from "@mui/icons-material/Circle";

const newApps = [
  {
    id: "Us Insurance Training",
    heading: "US Insurance Training",
    desktopImages: [USTDeskImg1, USTDeskImg2, USTDeskImg3],
    mobileImages: [USTMobileImg1, USTMobileImg2, USTMobileImg3],
    links: [
      {
        href: "https://usinsurancetraining.com/",
        rel: "noreferrer",
        target: "_blank",
        text: "View Live Site",
      },
    ],
    overview: [
      "US Insurance Training is a comprehensive and innovative online learning platform that offers a convenient and intuitive way for insurance agents to preparing for their licensing exam. ",
      `The site was built to replace an existing site and add a ton of new features such as webcam video responses, new interactive quiz formats, and progress tracking to keep students on track.`,
    ],
    techOverview: [
      `The frontend of this app was built with React Js and Material Ui components to create a fast and responsive user interface that delivers an immersive user experience.`,
      `The backend was built with Node, Express, and Firestore to create a robust and scalable server infrastructure. Node provided the ability to write server-side code in JavaScript, 
      while Express enabled the creation of a flexible and efficient API. Firestore was selected as the database technology for its ability to store large amounts of structured, unstructured data and handle user authentication, making it the perfect choice for a learning platform.`,
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Material Ui",
      "Next Js",
      "Firebase",
      "Node",
      "Express",
      "Google Cloud Platform",
    ],
  },
  {
    id: "CougarCafe",
    heading: "Cougar Cafe",
    desktopImages: [CCDeskImg1, CCDeskImg2, CCDeskImg3, CCDeskImg4],
    mobileImages: [CCMobileImg1, CCMobileImg2, CCMobileImg3, CCMobileImg4],
    links: [
      {
        href: "https://github.com/ckoko99/CougarCafe",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    tech: ["HTML", "CSS", "Javascript", "React", "Material UI", "PHP", "MySQL"],
    overview: [
      "Cougar Cafe is a feature-rich full-stack web application designed to enhance the dining experience of customers. With its user-friendly interface and intuitive design, Cougar Cafe makes it easy for users to browse the menu, place a reservation, and experience a seamless dining experience.",
    ],
    techOverview: [
      "The application was built with modern web technologies, utilizing React for the frontend and PHP and MySQL for the backend. The frontend was designed with a single-page application in mind, utilizing React Router to navigate between pages and Material UI for a responsive design that's easy to interact with.",
      "Data is retrieved from the backend using REST APIs and displayed with Components, providing users with real-time access to menu categories, products, and reservation information. The backend, built with PHP and MySQL, is a robust REST API that provides data to the frontend, while the relational database stores important information about the menu, products, and reservations made by users.",
      "One of the standout features of Cougar Cafe is its reservation system, which allows users to book a timeslot that, once booked, no one else can book. This ensures that users can enjoy a hassle-free dining experience without worrying about competing for table space.",
      "In conclusion, Cougar Cafe is a comprehensive and innovative full-stack web application that offers customers a convenient and intuitive way to experience a seamless dining experience. Whether you're a foodie looking for your next great meal or a restaurant owner looking to enhance your customers' experience, Cougar Cafe has you covered.",
    ],
  },
  {
    id: "Ck Trips",
    heading: "Ck Trips",
    mobileImages: [
      CkTMobileImg1,
      CkTMobileImg2,
      CkTMobileImg3,
      CkTMobileImg4,
      CkTMobileImg5,
      CkTMobileImg6,
    ],
    desktopImages: [
      CkTDeskImg1,
      CkTDeskImg2,
      CkTDeskImg3,
      CkTDeskImg4,
      CkTDeskImg5,
    ],
    links: [
      {
        href: "https://travel-app-jet.vercel.app/",
        rel: "noreferrer",
        target: "_blank",
        text: "View Live Site",
      },
      {
        href: "https://github.com/ckoko99/TravelApp",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Next Js",
      "Firebase",
    ],
    overview: [
      "Ck Trips is a comprehensive and innovative travel planner app that streamlines the travel planning process and helps users plan all aspects of their trips in one convenient place. The app is designed to make the planning process as seamless and effortless as possible, allowing users to focus on what truly matters - enjoying their travels.",
    ],
    techOverview: [
      "The application was built with a focus on user experience and performance, utilizing the latest technologies in web development. React was used for creating the user interface, while Redux was employed for state management and Next.js was utilized for creating dynamic pages from the fetched data. The app also features an admin panel that allows authenticated administrators to add new travel options, ensuring that the app remains up-to-date and relevant to users.",
      "One of the key features of Ck Trips is the integration with the Google Firebase API, which enables the app to fetch travel data in real-time. This allows users to plan their trips with the most accurate and up-to-date information available, ensuring that they can make informed decisions and have the best possible experience.",
      "Redux was also utilized to handle all state management, ensuring that the application remains fast and responsive, even as the user interacts with the app. With its intuitive and user-friendly interface, Ck Trips makes it easy for users to plan all aspects of their trips, from their destination and flight, to their hotel and vehicle rental.",
      "In conclusion, Ck Trips is a powerful and innovative travel planner app that offers a convenient and streamlined way to plan all aspects of travel. Whether you're a seasoned traveler or just planning your first trip, Ck Trips is the perfect solution for making your travels as stress-free and enjoyable as possible.",
    ],
  },
  {
    id: "Edc",
    heading: "Every Day Counts",
    desktopImages: [edc],
    mobileImages: [edcmobile],
    links: [
      {
        href: "https://edc.vercel.app/",
        rel: "noreferrer",
        target: "_blank",
        text: "View Live Site",
      },
      {
        href: "https://github.com/ckoko99/EverydayCounts",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Edc is a powerful and innovative productivity tool that helps users plan their daily tasks and achieve their goals. With its user-friendly design and intuitive interface, Edc makes it easy for users to keep track of their to-do list, prioritize tasks, and stay focused throughout the day.",
    ],
    techOverview: [
      "The application was built with modern web technologies, utilizing React for the user interface, Redux for state management, and Firebase for data storage and authentication. These technologies work together to provide users with a fast, responsive, and reliable experience.",
      "One of the standout features of Edc is its integration with the Pomodoro technique, which is a time management method that helps users stay focused and productive. Users can track their focus sessions and receive an objective grading based on the completion of their tasks, helping them see their progress and stay motivated.",
      "Redux was also used to handle all state management, ensuring that the app remains fast and responsive, even as users interact with it. With its user-friendly design and intuitive interface, Edc makes it easy for users to manage their daily tasks, prioritize their workload, and stay focused throughout the day.",
      "In addition, the app uses Firebase to store user data and authenticate users, ensuring that their data is secure and accessible from anywhere. With its powerful features and intuitive design, Edc is the perfect tool for anyone looking to boost their productivity and achieve their goals.",
      "In conclusion, Edc is a comprehensive and innovative productivity tool that offers users a convenient and intuitive way to plan their daily tasks and achieve their goals. Whether you're a busy professional, a student, or anyone looking to boost your productivity, Edc has you covered.",
    ],
    tech: ["HTML", "CSS", "Javascript", "React", "Redux", "Firebase"],
  },
];
const apps = [
  {
    id: "RevvedUp",
    heading: "Revved Up Car Based Social Media Web App",
    imgs: [revvedup, revvedupmobile],
    links: [
      {
        href: "https://github.com/ckoko99/Carbuilds",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Currently a Work in Progress: Revved Up is a dynamic and engaging car-based social media web application that offers a unique platform for car enthusiasts to share their builds, connect with like-minded individuals, and engage in meaningful conversations about all things cars. The goal of the app is to bring together a community of passionate car enthusiasts and provide a space for them to showcase their builds, exchange ideas, and share their experiences.",
      "The application was developed using cutting- edge technologies in both the frontend and the backend.In the frontend, React was utilized for building the user interface, while Redux was used for state management and Material UI was employed for providing a visually appealing design.These technologies allowed for the creation of a fast and responsive user interface that delivers an immersive user experience.",
      "On the backend, Node, Express, and MongoDB were utilized to create a robust and scalable server infrastructure.Node provided the ability to write server - side code in JavaScript, while Express enabled the creation of a flexible and efficient API.MongoDB was selected as the database technology for its ability to store large amounts of structured and unstructured data, making it the perfect choice for a social media application.",
      "Overall, the combination of these technologies has resulted in a web application that is both powerful and user - friendly.Whether you're a seasoned car enthusiast or just starting to develop a passion for cars, Revved Up is the perfect place to connect with like-minded individuals and share your build with the world.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Material UI",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: "CougarCafe",
    heading: "Cougar Cafe",
    imgs: [cougarcafe, cougarcafemobile],
    links: [
      {
        href: "https://github.com/ckoko99/CougarCafe",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Cougar Cafe is a feature-rich full-stack web application designed to enhance the dining experience of customers. With its user-friendly interface and intuitive design, Cougar Cafe makes it easy for users to browse the menu, place a reservation, and experience a seamless dining experience.",
      "The application was built with modern web technologies, utilizing React for the frontend and PHP and MySQL for the backend. The frontend was designed with a single-page application in mind, utilizing React Router to navigate between pages and Material UI for a responsive design that's easy to interact with.",
      "Data is retrieved from the backend using REST APIs and displayed with Components, providing users with real-time access to menu categories, products, and reservation information. The backend, built with PHP and MySQL, is a robust REST API that provides data to the frontend, while the relational database stores important information about the menu, products, and reservations made by users.",
      "One of the standout features of Cougar Cafe is its reservation system, which allows users to book a timeslot that, once booked, no one else can book. This ensures that users can enjoy a hassle-free dining experience without worrying about competing for table space.",
      "In conclusion, Cougar Cafe is a comprehensive and innovative full-stack web application that offers customers a convenient and intuitive way to experience a seamless dining experience. Whether you're a foodie looking for your next great meal or a restaurant owner looking to enhance your customers' experience, Cougar Cafe has you covered.",
    ],
    tech: ["HTML", "CSS", "Javascript", "React", "Material UI", "PHP", "MySQL"],
  },
  {
    id: "travels",
    heading: "Ck Trip Travel Planner",
    imgs: [travels, travelsmobile],
    links: [
      {
        href: "https://travel-app-jet.vercel.app/",
        rel: "noreferrer",
        target: "_blank",
        text: "View Live Site",
      },
      {
        href: "https://github.com/ckoko99/TravelApp",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Ck Trips is a comprehensive and innovative travel planner app that streamlines the travel planning process and helps users plan all aspects of their trips in one convenient place. The app is designed to make the planning process as seamless and effortless as possible, allowing users to focus on what truly matters - enjoying their travels.",
      "The application was built with a focus on user experience and performance, utilizing the latest technologies in web development. React was used for creating the user interface, while Redux was employed for state management and Next.js was utilized for creating dynamic pages from the fetched data. The app also features an admin panel that allows authenticated administrators to add new travel options, ensuring that the app remains up-to-date and relevant to users.",
      "One of the key features of Ck Trips is the integration with the Google Firebase API, which enables the app to fetch travel data in real-time. This allows users to plan their trips with the most accurate and up-to-date information available, ensuring that they can make informed decisions and have the best possible experience.",
      "Redux was also utilized to handle all state management, ensuring that the application remains fast and responsive, even as the user interacts with the app. With its intuitive and user-friendly interface, Ck Trips makes it easy for users to plan all aspects of their trips, from their destination and flight, to their hotel and vehicle rental.",
      "In conclusion, Ck Trips is a powerful and innovative travel planner app that offers a convenient and streamlined way to plan all aspects of travel. Whether you're a seasoned traveler or just planning your first trip, Ck Trips is the perfect solution for making your travels as stress-free and enjoyable as possible.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Next Js",
      "Firebase",
    ],
  },
  {
    id: "edc",
    heading: "Edc",
    imgs: [edc, edcmobile],
    links: [
      {
        href: "https://edc.vercel.app/",
        rel: "noreferrer",
        target: "_blank",
        text: "View Live Site",
      },
      {
        href: "https://github.com/ckoko99/EverydayCounts",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Edc is a powerful and innovative productivity tool that helps users plan their daily tasks and achieve their goals. With its user-friendly design and intuitive interface, Edc makes it easy for users to keep track of their to-do list, prioritize tasks, and stay focused throughout the day.",
      "The application was built with modern web technologies, utilizing React for the user interface, Redux for state management, and Firebase for data storage and authentication. These technologies work together to provide users with a fast, responsive, and reliable experience.",
      "One of the standout features of Edc is its integration with the Pomodoro technique, which is a time management method that helps users stay focused and productive. Users can track their focus sessions and receive an objective grading based on the completion of their tasks, helping them see their progress and stay motivated.",
      "Redux was also used to handle all state management, ensuring that the app remains fast and responsive, even as users interact with it. With its user-friendly design and intuitive interface, Edc makes it easy for users to manage their daily tasks, prioritize their workload, and stay focused throughout the day.",
      "In addition, the app uses Firebase to store user data and authenticate users, ensuring that their data is secure and accessible from anywhere. With its powerful features and intuitive design, Edc is the perfect tool for anyone looking to boost their productivity and achieve their goals.",
      "In conclusion, Edc is a comprehensive and innovative productivity tool that offers users a convenient and intuitive way to plan their daily tasks and achieve their goals. Whether you're a busy professional, a student, or anyone looking to boost your productivity, Edc has you covered.",
    ],
    tech: ["HTML", "CSS", "Javascript", "React", "Redux", "Firebase"],
  },
];
const projectStyles = {
  imgSection: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    width: { xs: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" },
    margin: "auto",
  },
  arrowButton: {
    cursor: "pointer",
    fontSize: "2rem",
  },
  imgContainer: {
    maxHeight: { xs: "60vh" },
    overflow: "scroll",
    width: "100%",
    margin: "auto",
    minHeight: "50vh",
  },
  desktopImage: {
    width: "100%",
    margin: "auto",
  },
  mobileImage: {
    width: { xs: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" },
    margin: "auto",
  },
  technologies: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    margin: "1rem auto",
  },
  techButton: {
    cursor: "default",
  },
  overviewSection: {
    textAlign: "left",
  },
  indexButtons: {
    cursor: "pointer",
    margin: "0.25rem",
    fontSize: "1rem",
  },
  mainContent: {
    display: "flex",
  },
  textSection: {
    width: "100%",
  },
  halfSection: {
    width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1002,
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    overflow: "scroll",
  },
  techOverviewButton: {
    display: "flex",
    margin: "auto",
  },
};
const styles = {
  headingSubtitle: {
    margin: "2rem auto",
    width: { xs: "100%", sm: "80%", md: "80%", lg: "60%", xl: "60%" },
  },
  heading: {
    margin: "2rem auto",
  },
};
const technologies = ["All"];
newApps.forEach((app) => {
  app.tech?.forEach((tech) => {
    if (!technologies.includes(tech)) {
      technologies.push(tech);
    }
  });
});

function Project(props) {
  const [showDesktop, setShowDesktop] = useState(true);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  console.log(props);

  function handleMobileIndexChange(index) {
    if (index < 0) {
      setMobileIndex(props.mobileImages.length - 1);
    } else if (index > props.mobileImages.length - 1) {
      setMobileIndex(0);
    } else {
      setMobileIndex(index);
    }
  }
  function handleDesktopIndexChange(index) {
    if (index < 0) {
      setDesktopIndex(props.desktopImages.length - 1);
    } else if (index > props.desktopImages.length - 1) {
      setDesktopIndex(0);
    } else {
      setDesktopIndex(index);
    }
  }

  return (
    <Box>
      <Typography variant="h4">{props.heading}</Typography>
      <Box sx={{ ...projectStyles.mainContent }}>
        <Box sx={{ ...projectStyles.halfSection }}>
          <Box>
            <Button
              onClick={() => {
                setShowDesktop(true);
              }}
            >
              Desktop
            </Button>
            <Button
              onClick={() => {
                setShowDesktop(false);
              }}
            >
              Mobile
            </Button>
          </Box>
          <Box sx={{ ...projectStyles.imgSection }}>
            <KeyboardArrowLeftIcon
              sx={{ ...projectStyles.arrowButton }}
              onClick={() => {
                showDesktop
                  ? handleDesktopIndexChange(desktopIndex - 1)
                  : handleMobileIndexChange(mobileIndex - 1);
              }}
            />
            <Box sx={{ ...projectStyles.imgContainer }}>
              {showDesktop && (
                <Box>
                  {props.desktopImages?.map((img, index) => (
                    <Box
                      key={index}
                      sx={{
                        ...projectStyles.desktopImage,
                        display: index === desktopIndex ? "block" : "none",
                      }}
                    >
                      <Image alt={props.heading} src={img} />
                    </Box>
                  ))}
                </Box>
              )}
              {!showDesktop && (
                <Box>
                  {props.mobileImages?.map((img, index) => (
                    <Box
                      key={index}
                      sx={{
                        ...projectStyles.mobileImage,
                        display: index === mobileIndex ? "block" : "none",
                      }}
                    >
                      <Image alt={props.heading} src={img} />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <KeyboardArrowRightIcon
              sx={{ ...projectStyles.arrowButton }}
              onClick={() => {
                showDesktop
                  ? handleDesktopIndexChange(desktopIndex + 1)
                  : handleMobileIndexChange(mobileIndex + 1);
              }}
            />
          </Box>
          <Box>
            {showDesktop && (
              <>
                {props.desktopImages?.map((img, index) => (
                  <>
                    {index !== desktopIndex ? (
                      <TripOriginIcon
                        sx={{ ...projectStyles.indexButtons }}
                        key={index}
                        onClick={() => {
                          setDesktopIndex(index);
                        }}
                      />
                    ) : (
                      <Circle
                        key={index}
                        sx={{ ...projectStyles.indexButtons }}
                      />
                    )}
                  </>
                ))}
              </>
            )}
            {!showDesktop && (
              <>
                {props.mobileImages?.map((img, index) => (
                  <>
                    {index !== mobileIndex ? (
                      <TripOriginIcon
                        sx={{ ...projectStyles.indexButtons }}
                        key={index}
                        onClick={() => {
                          setMobileIndex(index);
                        }}
                      />
                    ) : (
                      <Circle
                        key={index}
                        sx={{ ...projectStyles.indexButtons }}
                      />
                    )}
                  </>
                ))}
              </>
            )}
          </Box>
        </Box>
        <Box sx={{ ...projectStyles.halfSection }}>
          <Box sx={{ ...projectStyles.textSection }}>
            <Box>
              {props.links?.map((link, index) => (
                <Button
                  key={index}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ ...projectStyles.technologies }}>
              {props.tech?.map((tech, index) => (
                <Button
                  key={index}
                  disableRipple
                  sx={{ ...projectStyles.techButton }}
                  variant="contained"
                  color="secondary"
                >
                  {tech}
                </Button>
              ))}
            </Box>
            <Box sx={{ ...projectStyles.overviewSection }}>
              <Typography variant="subtitle1">{props.overview}</Typography>
              {props.techOverview ? (
                <Button
                  sx={{ ...projectStyles.techOverviewButton }}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Show Overview For Nerds
                </Button>
              ) : null}
              {openModal && (
                <Modal
                  open={openModal}
                  onClose={() => {
                    setOpenModal(false);
                  }}
                >
                  <Box sx={{ ...projectStyles.modal }}>
                    <Typography variant="h3">Tech Overview</Typography>
                    {props.techOverview?.map((overview, index) => (
                      <Typography key={index} variant="subtitle1">
                        {overview}
                      </Typography>
                    ))}
                  </Box>
                </Modal>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Webapps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [projects, setProjects] = useState(newApps);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const filterProjects = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    if (filter === "All") {
      setProjects(newApps);
    } else {
      const filteredProjects = newApps.filter((project) =>
        project.tech.includes(filter)
      );
      setProjects(filteredProjects);
    }
    setOpenFilterModal(false);
  };

  //foreach tech
  const techList = technologies.map((tech, index) => {
    return (
      <button
        style={{ border: selectedFilter === tech ? "1px solid black" : "0" }}
        key={index}
        onClick={filterProjects}
        value={tech}
        className={classes["button-38"]}
      >
        {tech}
      </button>
    );
  });
  const newProjectList = newApps.map((project, index) => {
    return <Project key={index} {...project} />;
  });
  // foreach projects
  const projectList = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <>
      <div className={classes["Portfolio"]}>
        <Typography sx={{ ...styles.heading }} variant="h2">
          Web Applications
        </Typography>
        <Typography sx={{ ...styles.headingSubtitle }} variant="subtitle1">
          These are some of the web applications I have designed, and developed
          using a variety of modern web technologies. Projects range from small
          eccomerce sites to full stack applications with a focus on user
          experience and performance. I strive to build applications that are
          both powerful and user-friendly to help business become more
          efficient.
        </Typography>
        <div className={classes["filter"]}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenFilterModal(true);
            }}
          >
            Filter By Tech?
          </Button>
          {openFilterModal && (
            <Modal
              open={openFilterModal}
              onClose={() => {
                setOpenFilterModal(false);
              }}
            >
              <Box sx={{ ...projectStyles.modal }}>
                <Typography align="center" variant="h3">
                  Filter By Tech
                </Typography>
                <Typography variant="subtitle1">
                  Over the years i've had the pleasure to work with a vast
                  amount of technologies to build web applications. Click on a
                  technology to filter the projects below.
                </Typography>
                <Box sx={{ ...projectStyles.technologies }}>
                  {technologies.map((tech, index) => {
                    return (
                      <Button
                        variant="contained"
                        sx={{ ...projectStyles.techButton, cursor: "pointer" }}
                        key={index}
                        onClick={filterProjects}
                        value={tech}
                      >
                        {tech}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </Modal>
          )}
        </div>
        {projectList}
      </div>
    </>
  );
}

export default Webapps;
