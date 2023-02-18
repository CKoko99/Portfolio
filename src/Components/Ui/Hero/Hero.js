import classes from "./Hero.module.css";
import CKLogo from "./CKlogo.svg";
import Arrow from "./Arrow-down.svg";
import Image from "mui-image";
function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero_section"]}>
        <div className={classes["hero_subsection"]}>
          <Image width={"35vh"} alt="CK Logo" className={classes["hero_img"]} src={CKLogo} />
          <div className={classes["welcome"]}>
            Hello and welcome! My name is Courtney Koko and I am a full-stack developer based
            in Houston, Texas. I specialize in helping individuals and organizations bring their
            digital vision to fruition. With a focus on web applications and custom
            e-commerce solutions, I bring a wealth of experience and technical know-how
            to every project I undertake.
          </div>
        </div>
        <div className={classes["hero_subsection"]}>
          <img alt="arrow" className={classes['arrow']} src={Arrow} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
