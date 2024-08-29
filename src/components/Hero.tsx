import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';
import GlobalOutcomes from './GlobalOutcomes';
import globalImage from '../../public/images/GLOBAL.svg';
import hoverImage from '../../public/images/hover.svg';
import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  const isAnimationActive = useRef(true);
  const [isImageVisible, setIsImageVisible] = useState(true); // State to control image visibility

  useEffect(() => {
    gsap.fromTo(
      `.${styles.heroText}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.inOut', stagger: 2 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      // Only move the element if animation is active
      if (isAnimationActive.current) {
        const followElement = document.querySelector(`.${styles.followBox}`);
        if (followElement) {
          gsap.to(followElement, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      }
    };

    // Attach mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    isAnimationActive.current = false; // Stop animation
    setIsImageVisible(false); // Hide the image
  };

  const handleMouseLeave = () => {
    isAnimationActive.current = true; // Resume animation
    setIsImageVisible(true); // Show the image
  };

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Header />
      </div>
      <section className={styles.hero}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1 className={`${styles.heroText} heroText`}>Payments designed for</h1>
        </div>
        {/* Wrap GlobalOutcomes with handlers to control animation and image visibility */}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <GlobalOutcomes />
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Logo />
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className={styles.ctaButton}>
          Schedule a demo
          <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        </button>
        </div>
      </section>
      {/* Element that follows the cursor */}
      {isImageVisible && (
        <div className={styles.followBox}>
        <div className={styles.imageContainer}>
          <Image src={globalImage} alt="Global Image" layout="fill" />
        </div>
        <div className={styles.infoBox}>
          <span className={styles.amount}>$500Bn+</span>
          <span className={styles.label}>Annual TPV</span>
        </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
