import React, { useEffect, useState } from 'react'
import classes from './Hero.module.css';
import Image from 'next/image';
import shard from '../../../public/imgs/shard.svg';


const Hero: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={classes.hero}
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className={classes.sphere}>
        <div className={classes["sphere-overlay"]}></div>
      </div>

      <div className={classes["hero-text"]}>
        <h1 className={classes["highlight-1"]}>FORTUNE</h1>
        <h1>FAVORS</h1>
        <h1>
          THE <span className={classes["highlight-2"]}>BOLD.</span>
        </h1>
      </div>
      <Image className={classes.shard} src={shard} alt="shard" />
    </div>
  );
}

export default Hero
