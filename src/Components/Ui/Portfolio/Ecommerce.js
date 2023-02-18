import classes from "./Portfolio.module.css";
import cute from "../../../Images/cutedesktopopt.gif";
import blaberg from "../../../Images/blabergoptloop.gif";
import oyps from "../../../Images/oyps.gif";
import cutemobile from "../../../Images/cutemobileopt.gif";
import blabergmobile from "../../../Images/blabergmobileopt.gif";
import oypsmobile from "../../../Images/oypsmobile.gif";
import { useEffect } from "react";
import Image from "mui-image";

const apps = [
  {
    name: "We Have Cute Things",
    imgs: [cute, cutemobile],
    links: [
    ],
    overview:
      "Complete Eccomerce Store for wehavecutethings featuring completely custom theme built for client fully responsive design that looks great on all platforms includes custom lookbook to showcase products categorized products by collections/seasons",
  },
  {
    name: "Blaberg Landing Page",
    imgs: [blaberg, blabergmobile],
    links: [],
    overview:
      "complete shopify landing page for blaberg. client created a custom desktop design they liked and I implemented it for them while also creating a responsive mobile design. webpage was created with HTML, CSS, javascript and liquid.",
  },
  {
    name: "Own Your Personal Safety Store",
    imgs: [oyps, oypsmobile],
    links: [],
    overview:
      "Complete Shopify redesign for Own Your Personal Safety. Client wanted a more alluring shopify theme to help increase conversion. I was sent reference websites that the client liked and made him something unique. webpage was created with HTML, CSS, Javascript and Liquid.",
  },
];
function Ecommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectsList = apps.map((project, index) => {
    return (
      <div key={index} className={classes["project"]}>
        <div className={classes["project-heading"]}>{project.name}</div>
        <div className={classes["imgs"]}>
          {project.imgs.map((img, index) => {
            return <Image height={"35vw"} width="auto" fit="contain" className={"img"} key={index} alt={project.name} loading="lazy" src={img} />;
          })}
        </div>
        <div className={classes["project-links"]}>
          {project.links.map((link, index) => {
            return <a href={link} key={index} rel="noreferrer" target="_blank">
              View Live Site
            </a>;
          })}
        </div>
        <div className={classes["project-overview"]}>{project.overview}</div>
      </div>
    );
  });
  return (
    <>
      <div className={classes["Portfolio"]}>
        <div className={classes["heading"]}>Ecommerce Projects</div>
        {projectsList}
      </div>
    </>
  );
}

export default Ecommerce;
