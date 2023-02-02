import classes from "./Portfolio.module.css";
import edc from "../../../Images/edc.gif";
import edcmobile from "../../../Images/edcmobile.gif";
import travels from "../../../Images/travels.gif";
import travelsmobile from "../../../Images/travelsmobile.gif";
import { useEffect } from "react";

function Webapps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className={classes["Portfolio"]}>
        <div className={classes["heading"]}>Web Applications</div>
        <div className={classes["project"]}>
          <div id="travels" className={classes["project-heading"]}>
            Ck Trip Travel Planner
          </div>
          <div className={classes["imgs"]}>
            <img alt="Ck Trips" loading="lazy" src={travels} />
            <img alt="Ck Trips" loading="lazy" src={travelsmobile} />
          </div>
          <div className={classes["project-links"]}>
            <a
              href="https://travel-app-jet.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              View Live Site
            </a>
            <a
              href="https://github.com/koko2loko/TravelApp"
              rel="noreferrer"
              target="_blank"
            >
              View Code on Github
            </a>
            {/*
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
             */}
          </div>
          <div className={classes["project-overview"]}>
            Ck Trips is a prototype travel planner app where Users can plan all necessary aspects of travel, their destination, flight, hotel and vehicle rental in one place.
            The application was built with React, Redux, and Next Js. Travel data is fetched using the google firebase API. Dynamic pages are created from the fetched data using Next Js. Redux is used to handle all state management. Site also features an admin panel where authenticated admins can add new travel options.
          </div>
        </div>
        <div className={classes["project"]}>
          <div id="edc" className={classes["project-heading"]}>
            Every Day Counts Productivity App
          </div>
          <div className={classes["imgs"]}>
            <img alt="Every Day Counts" loading="lazy" src={edc} />
            <img alt="Every Day Counts" loading="lazy" src={edcmobile} />
          </div>
          <div className={classes["project-links"]}>
            <a
              href="https://each-day-counts.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              View Live Site
            </a>
            <a
              href="https://github.com/koko2loko/EverydayCounts"
              rel="noreferrer"
              target="_blank"
            >
              View Code on Github
            </a>
            {/*
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
             */}
          </div>
          <div className={classes["project-overview"]}>
            Using Every Day Counts users can plan out their day with daily tasks
            and label them as priorities or recurring. Track their deep work
            sessions with the pomodoro technique and track how they are
            completing their goals on a daily basis. This app was built with
            React Js to create a single page web application. Redux for global
            state management. Google Firestore for User authentication and
            Database Storage
          </div>
        </div>
      </div>
    </>
  );
}

export default Webapps;
