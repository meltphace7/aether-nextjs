import React, { useEffect, useState } from 'react'
import classes from './Hero.module.css';
import Link from 'next/link';

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
      <div
        className={classes["hero-text-container"]}
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <h1>WELCOME TO THIS WEBSITE</h1>
        <h2>We deliver high quality services</h2>
        <Link href="/contact" className="button">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Hero
