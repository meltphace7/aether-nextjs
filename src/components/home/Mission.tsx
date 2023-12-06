import React, { useState, useEffect } from "react";
import classes from "./Mission.module.css";
import Image from "next/image";
import Link from "next/link";
import modern from "../../../public/imgs/modern-4.jpg";
import { useInView } from "react-intersection-observer";

const Feature: React.FC = () => {
  // Intersection Observer pop-up / fade animation
  const [sectionRevealed, setSectionRevealed] = useState<boolean>(false);

  const options = { root: null, threshold: 0.2 };

  const { ref: sectionRef, inView: sectionIsVisible } = useInView(options);

  useEffect(() => {
    if (sectionIsVisible) {
      setSectionRevealed(true);
    }
  }, [sectionIsVisible]);
  return (
    <section
      ref={sectionRef}
      className={classes.feature}
      // className={`${classes["feature"]} ${
      //   !sectionRevealed ? classes["feature--hidden"] : ""
      // }`}
    >
      <div className={classes["feature-title"]}>
        <h1>
          DESIGN WITH <span>PURPOSE</span>
        </h1>
      </div>
      <div className={classes["feature-box"]}>
        <h2>
          <span className="highlight-2">YOUR BRAND.</span> YOUR STYLE.
        </h2>
        <div className={classes.accent}></div>
        <p>
          Elevate your business with our seasoned web design and development
          experts. Harnessing creativity and technical prowess, we craft
          powerful brands and compelling web experiences that propel your
          business to new heights of success.
        </p>
      </div>
    </section>
  );
};

export default Feature;
