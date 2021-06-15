import classes from "./Portfolio.module.css";
import cute from "../../../Images/cutedesktopopt.gif";
import blaberg from "../../../Images/blabergopt.gif";
import cutemobile from "../../../Images/cutemobileopt.gif";
import blabergmobile from "../../../Images/blabergmobileopt.gif";

function Ecommerce() {
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
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
          </div>
          <div className={classes["project-overview"]}>
            Complete Eccomerce Store for wehavecutethings Featuring Completely
            Custom Theme Built for Client Fully Responsive Design That Looks
            Great On All Platforms Includes Custom Lookbook to Showcase Products
            Categorized Products by Collections/Seasons
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
            <a href="/" rel="noreferrer" target="_blank">
              View Video Demo
            </a>
          </div>
          <div className={classes["project-overview"]}>
            Complete Shopify Landing Page for Blaberg. Client showed a custom
            desktop design they liked and I implemented it for them also
            creating a responsive mobile design. Webpage was created with HTML,
            CSS, Javascript and Liquid.
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecommerce;
