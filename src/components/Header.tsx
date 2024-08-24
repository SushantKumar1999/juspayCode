import React, {useEffect} from 'react';
import styles from '../styles/hero.module.css';
import Image from 'next/image';
import Logo from '..//../public/logo.svg';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    useEffect(() => {
        gsap.fromTo(
          `.${styles.navList} li`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2  }
        );
        
      }, []);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="Juspay Logo"
              width={100}
              height={50}
              className={styles.logo}
            />
          </li>
          <li>About us</li>
          <li>Docs</li>
          <li>Integrations</li>
          <li><FontAwesomeIcon icon={faGlobe} className={styles.icon} /></li>
          <li>Contact us <FontAwesomeIcon icon={faCaretRight} className={styles.icon} /></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
