import React, {useEffect, useState} from "react";
import classes from "./FeatureOverlay.module.css";
import Link from "next/link";
import Image from "next/image";
import cityScape from "../../../public/imgs/city-lights.jpg";
import { useInView } from "react-intersection-observer";

const FeatureOverlay: React.FC = () => {
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
    <section
      ref={sectionRef}
      className={`${classes["feature-overlay"]} ${
        !sectionRevealed ? classes["feature--hidden"] : ""
      }`}
    >
      <div className={classes["feature-overlay__text-container"]}>
        <h1>Building Better for Life</h1>
        <div className={classes.accent}></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          odit deleniti laboriosam eveniet velit rem quisquam maxime eum, quia
          consectetur quae nisi, cupiditate reprehenderit error veritatis
          voluptates aperiam deserunt veniam?
        </p>
        <Link href="/services" className="button">
          Our Work
        </Link>
      </div>
      <Image
        src={cityScape}
        alt="city scape"
        style={{ transform: `translateY(${240 - (offsetY * .10)}px)` }}
      />
    </section>
  );
};

export default FeatureOverlay;
