import React, { useEffect, useState } from "react";
import classes from "./ParallaxText.module.css";
import Image from "next/image";
import abstract from "../../../public/imgs/abstract-stripes.jpg";
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
    <section ref={sectionRef} className={classes["feature-overlay"]}>
      <div className={classes.overlay}>
        <div
          className={`${classes["feature-box__text-container"]} ${
            !sectionRevealed ? classes["feature--hidden"] : ""
          }`}
        >
          <h1>
            DESIGN.&nbsp;<span>DEVELOP.&nbsp;</span>DEPLOY.
          </h1>
        </div>
      </div>
      <Image
        src={abstract}
        alt="city scape"
        style={{ transform: `translateY(${240 - offsetY * 0.09}px)` }}
      />
    </section>
  );
};

export default FeatureOverlay;
