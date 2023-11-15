import React, {useEffect, useState } from 'react'
import classes from './Hero.module.css'

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
        <div className={classes['hero-text']}>
          <h1>Who We Are</h1>
          <h2>Committed to Excellence</h2>
        </div>
      </div>
    </header>
  );
}

export default Hero
