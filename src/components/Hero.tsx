import React, { useEffect, useRef } from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globalImg from '../../public/images/GLOBAL.svg';
import Image from 'next/image';

const Hero = () => {

    const imgRef = useRef(null);

    useEffect(() => {
    gsap.fromTo(
      '.heroText',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.5 }
    );

    
    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const { current } = imgRef;
        if (current) {
          const { offsetWidth, offsetHeight } = current;
      
          // Calculate the desired position for the top-left corner of the image
          let imageX = clientX - offsetWidth / 2;
          let imageY = clientY - offsetHeight;
      
          // Ensure the image stays within the viewport
          const maxImageX = window.innerWidth - offsetWidth;
          const maxImageY = window.innerHeight - offsetHeight;
          imageX = Math.min(imageX, maxImageX);
          imageX = Math.max(imageX, 0);
          imageY = Math.min(imageY, maxImageY);
          imageY = Math.max(imageY, 0);
      
          gsap.to(current, {
            x: imageX,
            y: imageY,
            duration: 0, // Adjust the duration for smooth movement
            ease: 'none',
          });
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    
  }, []);

  return (
    <section className={styles.hero}>
        <h1 className={`${styles.heroText} heroText`}>Payments designed for</h1>
        <h1 className={`${styles.globalText} heroText`}>GLOBAL OUTCOMES</h1>
        <p className={styles.paragraph}>
          <strong>Juspay</strong> powers leading enterprises around the world,<br></br> simplifying global
          coverage, orchestration, conversions,<br></br> fraud reduction and seamless
          customer experiences.
        </p>
        <button className={styles.ctaButton}>Schedule a demo   
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        </button>
       <div className={styles.imageWrapper}>
        <Image
          src={globalImg}
          alt="Global Image"
          layout="intrinsic"
          className={styles.heroImage}
          ref={imgRef}
        />
      </div>
    </section>
  );
};

export default Hero;
