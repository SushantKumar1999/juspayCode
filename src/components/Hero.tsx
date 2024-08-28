import React, { useEffect, useRef } from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';
import GlobalOutcomes from './GlobalOutcomes';

const Hero = () => {

    useEffect(() => {
    gsap.fromTo(
      ` .${styles.heroText}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.inOut', stagger: 2 }
    );
    
  }, []);

  return (
    <section className={styles.hero}>
        <h1 className={`${styles.heroText} heroText`}>Payments designed for</h1>
        <GlobalOutcomes></GlobalOutcomes>
        <Logo></Logo>
        <button className={styles.ctaButton}>Schedule a demo   
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        </button>
    </section>
  );
};

export default Hero;
