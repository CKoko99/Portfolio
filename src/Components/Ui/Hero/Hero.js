import classes from "./Hero.module.css";
import CKLogo from "./CKlogo.svg";
import Arrow from "./Arrow-down.svg";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero_section"]}>
        <div className={classes["hero_subsection"]}>
          <img alt="CK Logo" className={classes["hero_img"]} src={CKLogo} />
          <div className={classes["welcome"]}>
            Greetings! I am Courtney Koko a Front End Developer from Houston,
            Texas. I help designers, small agencies and businesses bring their
            ideas to life. Experienced in creating Web Applications and Custom
            E-commerce websites
          </div>
        </div>
        <div className={classes["hero_subsection"]}>
            <img alt="arrow" className={classes['arrow']} src={Arrow}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
