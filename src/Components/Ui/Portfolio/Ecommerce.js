import classes from "./Portfolio.module.css";
import cute from "../../../Images/cutedesktopopt.gif";
import blaberg from "../../../Images/blabergoptloop.gif";
import oyps from "../../../Images/oyps.gif";
import cutemobile from "../../../Images/cutemobileopt.gif";
import blabergmobile from "../../../Images/blabergmobileopt.gif";
import oypsmobile from "../../../Images/oypsmobile.gif";
import { useEffect } from "react";

function Ecommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className={classes["Portfolio"]}>
        <div className={classes["heading"]}>Ecommerce Projects</div>
        <div className={classes["project"]}>
          <div className={classes["project-heading"]}>
            We Have Cute Things Shopify Development
          </div>
          <div className={classes["imgs"]}>
            <img alt="We Have Cute Things" loading="lazy" src={cute} />
            <img alt="We Have Cute Things" loading="lazy" src={cutemobile} />
          </div>
          <div className={classes["project-links"]}>
            <a
              href="https://wehavecutethings.com/"
              rel="noreferrer"
              target="_blank"
            >
              View Live Site
            </a>
            {/*
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
             */}
          </div>
          <div className={classes["project-overview"]}>
            Complete Eccomerce Store for wehavecutethings featuring completely
            custom theme built for client fully responsive design that looks
            great on all platforms includes custom lookbook to showcase products
            categorized products by collections/seasons
          </div>
        </div>
        <div className={classes["project"]}>
          <div className={classes["project-heading"]}>Blaberg Landing Page</div>
          <div className={classes["imgs"]}>
            <img alt="Blaberg" loading="lazy" src={blaberg} />
            <img alt="Blaberg" loading="lazy" src={blabergmobile} />
          </div>
          <div className={classes["project-links"]}>
            <a href="https://blaberg.is/" rel="noreferrer" target="_blank">
              View Live Site
            </a>
            {/*
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
             */}
          </div>
          <div className={classes["project-overview"]}>
            complete shopify landing page for blaberg. client created a custom
            desktop design they liked and I implemented it for them while also
            creating a responsive mobile design. webpage was created with HTML,
            CSS, javascript and liquid.
          </div>
        </div>
        <div className={classes["project"]}>
          <div className={classes["project-heading"]}>
            Own Your Personal Safety Store
          </div>
          <div className={classes["imgs"]}>
            <img alt="OYPS" loading="lazy" src={oyps} />
            <img alt="OYPS" loading="lazy" src={oypsmobile} />
          </div>
          <div className={classes["project-links"]}>
            <a href="https://own-your-personal-safety.myshopify.com/" rel="noreferrer" target="_blank">
              View Live Site
            </a>
            {/*
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
             */}
          </div>
          <div className={classes["project-overview"]}>
            Complete Shopify redesign for Own Your Personal Safety. Client
            wanted a more alluring shopify theme to help increase conversion. I
            was sent reference websites that the client liked and made him
            something unique. webpage was created with HTML, CSS, Javascript and
            Liquid.
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecommerce;
