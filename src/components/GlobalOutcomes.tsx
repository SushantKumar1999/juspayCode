import React, { useEffect} from 'react';
import styles from '../styles/hero.module.css';
import { gsap } from 'gsap';

const GlobalOutcomes = () => {
    useEffect(() => {
        gsap.fromTo(
          ` .${styles.globalText} span`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.05, ease: 'power2.inOut', stagger: 0.1 }
        );
    }, []);

    return (
        <div className={styles.globalText}>
        <span>G</span>
        <span>L</span>
        <span>O</span>
        <span>B</span>
        <span>A</span>
        <span>L</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <span>S</span>
        </div>
    )
}

export default GlobalOutcomes;