import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import classes from './Hero.module.css'
import door from "../../../public/imgs/abstract-door.jpg";

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
        <div className={classes.sphere}>
          <div className={classes["sphere-overlay"]}>
            <Image src={door} alt="door" />
          </div>
        </div>
        <div className={classes["hero-text"]}>
          <h1>
            <span className="highlight-1">PUSHING</span> BOUNDARIES
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Hero
