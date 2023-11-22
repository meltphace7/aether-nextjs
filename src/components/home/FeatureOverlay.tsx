import React, {useEffect, useState} from "react";
import classes from "./FeatureOverlay.module.css";
import Link from "next/link";
import Image from "next/image";
import modernOne from "../../../public/imgs/modern-1.jpg";
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
      <div className={classes["feature-box__text-container"]}>
        <h1>
          Building <span>Better</span> for Life
        </h1>
        <div className={classes.accent}></div>
        <p>
          Explore our portfolio for a showcase of modern design, functional
          living spaces, and timeless elegance. We create homes that harmonize
          contemporary aesthetics with practical, luxurious living.
        </p>
        <Link href="/portfolio" className="button">
          Our Work
        </Link>
      </div>
      <Image
        src={modernOne}
        alt="city scape"
        style={{ transform: `translateY(${240 - offsetY * 0.05}px)` }}
      />
    </section>
  );
};

export default FeatureOverlay;
