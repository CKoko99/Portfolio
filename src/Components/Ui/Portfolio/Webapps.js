import classes from "./Portfolio.module.css";
import edc from "../../../Images/edc.gif";
import edcmobile from "../../../Images/edcmobile.gif";
import travels from "../../../Images/travels.gif";
import travelsmobile from "../../../Images/travelsmobile.gif";
import revvedup from "../../../Images/revvedup.png";
import revvedupmobile from "../../../Images/revvedupmobile.png";
import cougarcafe from "../../../Images/cougarcafe.gif";
import cougarcafemobile from "../../../Images/cougarcafemobile.gif";
import { useState } from "react";
import { useEffect } from "react";


const apps = [
  {
    id: "RevvedUp",
    heading: "Revved Up Car Based Social Media Web App",
    imgs: [revvedup, revvedupmobile],
    links: [
      {
        href: "https://github.com/koko2loko/Carbuilds",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: ["Currently a Work in Progress: Revved Up is a dynamic and engaging car-based social media web application that offers a unique platform for car enthusiasts to share their builds, connect with like-minded individuals, and engage in meaningful conversations about all things cars. The goal of the app is to bring together a community of passionate car enthusiasts and provide a space for them to showcase their builds, exchange ideas, and share their experiences.",
      "The application was developed using cutting- edge technologies in both the frontend and the backend.In the frontend, React was utilized for building the user interface, while Redux was used for state management and Material UI was employed for providing a visually appealing design.These technologies allowed for the creation of a fast and responsive user interface that delivers an immersive user experience.",
      "On the backend, Node, Express, and MongoDB were utilized to create a robust and scalable server infrastructure.Node provided the ability to write server - side code in JavaScript, while Express enabled the creation of a flexible and efficient API.MongoDB was selected as the database technology for its ability to store large amounts of structured and unstructured data, making it the perfect choice for a social media application.",
      "Overall, the combination of these technologies has resulted in a web application that is both powerful and user - friendly.Whether you're a seasoned car enthusiast or just starting to develop a passion for cars, Revved Up is the perfect place to connect with like-minded individuals and share your build with the world."
    ],
    tech: ["HTML", "CSS", "Javascript", "React", "Redux", "Material UI", "Node", "Express", "MongoDB"],
  },
  {
    id: "CougarCafe",
    heading: "Cougar Cafe",
    imgs: [cougarcafe, cougarcafemobile],
    links: [
      {
        href: "https://github.com/koko2loko/CougarCafe",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: ["Cougar Cafe is a feature-rich full-stack web application designed to enhance the dining experience of customers. With its user-friendly interface and intuitive design, Cougar Cafe makes it easy for users to browse the menu, place a reservation, and experience a seamless dining experience.",
      "The application was built with modern web technologies, utilizing React for the frontend and PHP and MySQL for the backend. The frontend was designed with a single-page application in mind, utilizing React Router to navigate between pages and Material UI for a responsive design that's easy to interact with.",
      "Data is retrieved from the backend using REST APIs and displayed with Components, providing users with real-time access to menu categories, products, and reservation information. The backend, built with PHP and MySQL, is a robust REST API that provides data to the frontend, while the relational database stores important information about the menu, products, and reservations made by users.",
      "One of the standout features of Cougar Cafe is its reservation system, which allows users to book a timeslot that, once booked, no one else can book. This ensures that users can enjoy a hassle-free dining experience without worrying about competing for table space.",
      "In conclusion, Cougar Cafe is a comprehensive and innovative full-stack web application that offers customers a convenient and intuitive way to experience a seamless dining experience. Whether you're a foodie looking for your next great meal or a restaurant owner looking to enhance your customers' experience, Cougar Cafe has you covered.",],
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
        href: "https://github.com/koko2loko/TravelApp",
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
      "In conclusion, Ck Trips is a powerful and innovative travel planner app that offers a convenient and streamlined way to plan all aspects of travel. Whether you're a seasoned traveler or just planning your first trip, Ck Trips is the perfect solution for making your travels as stress-free and enjoyable as possible."
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Next Js",
      "Firebase"
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
        href: "https://github.com/koko2loko/EverydayCounts",
        rel: "noreferrer",
        target: "_blank",
        text: "View Code on Github",
      },
    ],
    overview: [
      "Edc is a powerful and innovative productivity tool that helps users plan their daily tasks and achieve their goals. With its user-friendly design and intuitive interface, Edc makes it easy for users to keep track of their to-do list, prioritize tasks, and stay focused throughout the day.",
      "The application was built with modern web technologies, utilizing React for the user interface, Redux for state management, and Firebase for data storage and authentication. These technologies work together to provide users with a fast, responsive, and reliable experience.",
      "One of the standout features of Edc is its integration with the Pomodoro technique, which is a time management method that helps users stay focused and productive. Users can track their focus sessions and receive an objective grading based on the completion of their tasks, helping them see their progress and stay motivated.", "Redux was also used to handle all state management, ensuring that the app remains fast and responsive, even as users interact with it. With its user-friendly design and intuitive interface, Edc makes it easy for users to manage their daily tasks, prioritize their workload, and stay focused throughout the day.",
      "In addition, the app uses Firebase to store user data and authenticate users, ensuring that their data is secure and accessible from anywhere. With its powerful features and intuitive design, Edc is the perfect tool for anyone looking to boost their productivity and achieve their goals.",
      "In conclusion, Edc is a comprehensive and innovative productivity tool that offers users a convenient and intuitive way to plan their daily tasks and achieve their goals. Whether you're a busy professional, a student, or anyone looking to boost your productivity, Edc has you covered.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Firebase"
    ],
  },

]

const technologies = ["All"];
apps.forEach((app) => {
  app.tech.forEach((tech) => {
    if (!technologies.includes(tech)) {
      technologies.push(tech);
    }
  });
});
console.log(technologies)

function Webapps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [projects, setProjects] = useState(apps);


  const filterProjects = (e) => {
    const filter = e.target.value;

    if (filter === "All") {
      setProjects(apps);
    } else {
      const filteredProjects = apps.filter((project) =>
        project.tech.includes(filter)
      );
      setProjects(filteredProjects);
    }
  };


  //foreach tech
  const techList = technologies.map((tech) => {
    return (
      <button onClick={filterProjects} value={tech} className={classes["button-38"]}>
        {tech}
      </button>
    );
  });
  // foreach projects
  const projectList = projects.map((project) => {
    return (
      <div key={project.id} className={classes["project"]}>
        <div id={project.id} className={classes["project-heading"]}>
          {project.heading}
        </div>
        <div className={classes["imgs"]}>
          {project.imgs.map((img) => (
            <img alt={project.heading} loading="lazy" src={img} />
          ))}
        </div>
        <div className={classes["project-links"]}>
          {project.links.map((link) => (
            <a href={link.href} rel={link.rel} target={link.target}>
              {link.text}
            </a>
          ))}
        </div>
        <div className={classes["project-tech"]}>
          {project.tech.map((tech) => (
            <div className={classes["tech"]}>{tech}</div>
          ))}
        </div>
        <div className={classes["project-overview"]}>
          {project.overview.map((overview) => (
            <p>{overview}</p>
          ))}
        </div>
      </div>
    );
  });

  console.log(technologies)
  return (
    <>
      <div className={classes["Portfolio"]}>
        <div className={classes["heading"]}>Web Applications</div>
        <div className={classes["filter"]}>
          <div className={classes["filter-heading"]}>Filter by Tech</div>
          <div className={classes["filter-options"]}>
            {techList}
          </div>
        </div>
        {projectList}
      </div>
    </>
  );
}

export default Webapps;
