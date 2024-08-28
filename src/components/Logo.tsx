import React, { useEffect } from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';


const Logo = () => {
    useEffect(() => {
        gsap.fromTo(
            ` .${styles.paragraphs}`,
            { opacity: 0, y: 30 },
            { opacity: 0.5, y: 0, duration: 2.5, ease: 'power2.inOut', stagger: 0.2 }
          ); 
    }, [])

    return (
        <p className={styles.paragraph}>
          <strong>Juspay</strong> <span className={styles.paragraphs}>powers leading enterprises around the world,<br></br> simplifying global
          coverage, orchestration, conversions,<br></br> fraud reduction and seamless
          customer experiences.</span>
        </p>  
    )
}

export default Logo;

