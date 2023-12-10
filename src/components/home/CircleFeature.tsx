import React, { useState, useEffect } from "react";
import classes from "./CircleFeature.module.css";
import Image from "next/image";
import Link from "next/link";
import water from "../../../public/imgs/abstract-style.jpg";
import { useInView } from "react-intersection-observer";

const CircleFeature = () => {
  // Intersection Observer pop-up / fade animation
  const [sectionRevealed, setSectionRevealed] = useState<boolean>(false);

  const options = { root: null, threshold: 0.2 };

  const { ref: sectionRef, inView: sectionIsVisible } = useInView(options);

  useEffect(() => {
    if (sectionIsVisible) {
      setSectionRevealed(true);
    }
  }, [sectionIsVisible]);

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
    <section className={classes.section}>
      <div className={classes["text-container"]}>
        <h1>
          LET THE <span className="highlight-1">CREATIVITY </span>&nbsp;FLOW
        </h1>
        <div className={classes.accent}></div>
        <p>
          AETHER works with you to enhance your brand by conceiving bold artistic designs and translating them into an immersive and memorable website that will leave a lasting impression on your customers.
        </p>
        <Link href="/services" className="button">
          OUR SERVICES
        </Link>
      </div>
      <div className={classes.overlay}>
        <div className={classes.circle}></div>
      </div>
      <Image
        src={water}
        alt="water"
        style={{ transform: `translateY(${240 - offsetY * 0.09}px)` }}
      />
    </section>
  );
};

export default CircleFeature;
