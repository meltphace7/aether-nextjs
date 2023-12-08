import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import classes from './Hero.module.css'
import core from "../../../public/imgs/circle-core.jpg";

const Hero: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={classes.hero}
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className={classes["hero-overlay"]}>
        
        <div className={classes.circle}>
          <div className={classes["circle-overlay"]}></div>
          <Image src={core} alt="core" />
        </div>
        <div className={classes["hero-text"]}>
          <h1>
            <span className="highlight-1">CREATIVE</span> TO THE CORE
          </h1>
        </div>
        <div className={classes['bg-circle']}></div>
      </div>
    </header>
  );
}

export default Hero
