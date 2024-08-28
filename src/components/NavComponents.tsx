import React, { useEffect} from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';

const NavComp = () => {
    useEffect(() => {
        gsap.fromTo(
          ` .${styles.logoText} span`,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.2, ease: 'power2.inOut', stagger: 0.1 }
        );
        
    }, []);
    return (
        <a className={styles.logoText}>
        <span>J</span>
        <span>U</span>
        <span>S</span>
        <span>P</span>
        <span className={styles.smallA}>A</span>
        <span className={styles.smallY}>Y</span>
      </a>
    )
};

export default NavComp;