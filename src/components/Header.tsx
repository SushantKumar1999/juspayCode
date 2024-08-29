import React, { useEffect } from "react";
import styles from "../styles/hero.module.css";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe,faEarthEurope,faCaretRight,faEarthAmerica,faEarthAsia, faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import NavComp from "./NavComponents";
import LogoImg from "./LogoImg";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.navLinks} li`,  
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
  }, []);
   
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <LogoImg></LogoImg>
          <NavComp></NavComp>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a className={styles.navLink}>About us</a>
          </li>
          <li>
            <a className={styles.navLink}>Docs</a>
          </li>
          <li>
            <a className={styles.navLink}>Integrations</a>
          </li>
          <li className={styles.iconContainer}>
            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
            <div className={styles.region}>
               <div className={styles.regiontext}>REGION</div>
               <div className={styles.regions}><FontAwesomeIcon icon={faEarthAfrica} />Southeast Asia</div>
               <div className={styles.regions}><FontAwesomeIcon icon={faEarthAmerica} />Latin America</div>
               <div className={styles.regions}><FontAwesomeIcon icon={faEarthAmerica} />North America</div>
               <div className={styles.regions}><FontAwesomeIcon icon={faEarthEurope} /> Europe</div>
               <div className={styles.regions}><FontAwesomeIcon icon={faEarthAsia} />India</div>
            </div>
          </li>
          <li>
            <a
              className={`${styles.navLink} ${styles.contactUs}`}
            >
              Contact us
              <FontAwesomeIcon
                icon={faCaretRight}
                className={styles.arrowIcon}
              />{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
