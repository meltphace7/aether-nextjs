import React, {useState, useEffect} from 'react'
import classes from './AboutOverlay.module.css';
import Image from 'next/image';
import world from "../../../public/imgs/fisheye-world-2.jpg";

const AboutOverlay: React.FC = () => {
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
    <section className={classes.section}>
      <div className={classes.text}>
        <h1>
          FEARLESS INNOVATIVE AND <span>BOLD</span>
        </h1>
        <h2>
          AETHER STRIVES TO BUILD YOUR DIGITAL WORLD TO IT&apos;S FULL POTENTIAL
        </h2>
      </div>
      <div className={classes["section-overlay"]}></div>
      <Image
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        src={world}
        alt="fisheye world"
      />
    </section>
  );
}

export default AboutOverlay
