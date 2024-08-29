import React, { useEffect } from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import Logo from "..//../public/logo.svg";
import { gsap } from "gsap";

const LogoImg = () => {
    useEffect(() => {
        gsap.fromTo(
          `.${styles.logoLink} `,  
          { opacity: 0, x: 70 },
          { opacity: 1, x: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
        );
    }, []);
    return (
        <a className={styles.logoLink}>
            <Image src={Logo} alt="JUSPAY Logo" className={styles.logoImg} />
          </a>
    )
}

export default LogoImg;