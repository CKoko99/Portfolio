import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classes from "./Navbar.module.css";
import ham from "../../../Images/Icons/ham.png";
import { useState } from "react";
function Navbar() {
  const [modalOpen, setModalOpen] = useState(false)
  function closeModalHandler(){
    setModalOpen(false)
  }
  function openModalHandler(){
    setModalOpen(true)
  }
  let modal =<></>
  if(modalOpen){
     modal = <> <div className={classes["modal"]}>
    <h1 className={classes["modal-exit"]} onClick={closeModalHandler}>X</h1>
  <HashLink to="#about">
    <h1 onClick={closeModalHandler} className={classes["top-subsection__links"]}>About</h1>
  </HashLink>
  <HashLink smooth to="#projects">
    <h1 onClick={closeModalHandler} className={classes["top-subsection__links"]}>
      Portfolio
    </h1>
  </HashLink>
  <HashLink to="#contact">
    <h1 onClick={closeModalHandler} className={classes["top-subsection__links"]}>Contact</h1>
  </HashLink>
  <Link>
    <h1 onClick={closeModalHandler} className={classes["top-subsection__links"]}>Resume</h1>
  </Link>
</div></>
  }else{
     modal = <></>
  }
  return (
    <>
      <div className={classes.Navbar}>
        <div className={classes["top-section"]}>
          <div className={classes["top-subsection"]}>
            <Link to="/">
              <h1 className={classes["Name"]}>Courtney Koko</h1>
            </Link>
          </div>
          <div className={classes["top-subsection"]}>
            <div className={classes["desktop"]}>
              <HashLink to="#about">
                <h1 className={classes["top-subsection__links"]}>About</h1>
              </HashLink>
              <HashLink smooth to="#projects">
                <h1 className={classes["top-subsection__links"]}>Portfolio</h1>
              </HashLink>
              <HashLink to="#contact">
                <h1 className={classes["top-subsection__links"]}>Contact</h1>
              </HashLink>
              <Link>
                <h1 className={classes["top-subsection__links"]}>Resume</h1>
              </Link>
            </div>
            <div className={classes["mobile"]}>
              <img alt="ham" onClick={openModalHandler} className={classes["ham"]} src={ham} />
              {modal}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
