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
  const [isLeftSide, setIsLeftSide] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(true);

  // Prefetch hoverImage to reduce loading time
  const [hoverImageLoaded, setHoverImageLoaded] = useState(false);

  // Refs for GSAP animations
  const imageRef = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    // GSAP animation for the text
    gsap.fromTo(
      `.${styles.heroText}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.inOut', stagger: 1 }
    );

    // Mouse follow animation using GSAP Timeline
    const tl = gsap.timeline();
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX.current += (mouseX.current - posX.current) / 10;
        posY.current += (mouseY.current - posY.current) / 10;

        tl.set(imageRef.current, {
          css: {
            left: posX.current - 50, // Adjust for image offset
            top: posY.current - 50,
          },
        });
      },
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.pageX;
      mouseY.current = e.pageY;

      const screenWidth = window.innerWidth;
      setIsLeftSide(e.clientX < screenWidth / 2);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Preload hoverImage
    const img = new window.Image(); // Use the native Image constructor
    img.src = hoverImage.src;
    img.onload = () => setHoverImageLoaded(true);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    isAnimationActive.current = false;
    setIsImageVisible(false);
  };

  const handleMouseLeave = () => {
    isAnimationActive.current = true;
    setIsImageVisible(true);
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

      {/* Render images based on the mouse's side and visibility */}
      {isImageVisible && (
        <>
          {isLeftSide ? (
            <div ref={imageRef} className={`${styles.followBox} ${styles.leftSide}`} style={{ position: 'absolute', pointerEvents: 'none' }}>
              <div className={styles.imageContainer}>
                <Image src={globalImage} alt="Global Image" layout="fill" priority />
              </div>
              <div className={styles.infoBox}>
                <span className={styles.amount}>$500Bn+</span>
                <span className={styles.label}>Annual TPV</span>
              </div>
            </div>
          ) : (
            hoverImageLoaded && (
              <div ref={imageRef} className={`${styles.followBox} ${styles.rightSide}`} style={{ position: 'absolute', pointerEvents: 'none' }}>
                <div className={styles.imageContainer}>
                  <Image src={hoverImage} alt="Hover Image" layout="fill" priority />
                </div>
                <div className={styles.infoBox}>
                  <span className={styles.amount}>125Mn+</span>
                  <span className={styles.label}>Daily Txn</span>
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
