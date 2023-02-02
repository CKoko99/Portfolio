import classes from "./Contact.module.css";
import insta from '../../../Images/Icons/instagram.svg'
import github from '../../../Images/Icons/github.svg'
import linkedin from '../../../Images/Icons/linkedin.svg'

function Contact() {
  return (
    <>
      <div id="contact" className={classes["Contact"]}>
          <div className={classes["heading"]}>Get in Touch</div>
          <div className={classes['contact']}>

              <div className={classes['contact-item']}>
              <a href="mailto:CKWebDev99@gmail.com">Email: CKWebDev99@gmail.com</a>
              </div>
              <div className={classes['contact-item']}>
              Phone: (832)-420-9763
              </div>
              <div className={classes.social}>
                  Connect on Social Media
                  <div className={classes.icons}>
                      <a rel="noreferrer" target="_blank" href="https://github.com/koko2loko"><img alt="github" src={github}/></a>
                      <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ckwebdev/"><img alt="instagram" src={insta}/></a>
                      <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/courtney-koko-b49b19214/"><img alt="linkedin" src={linkedin}/></a>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Contact;
