import React, { useState, useEffect } from "react";
import classes from "./FeatureBoxTwo.module.css";
import Image from "next/image";
import sun from "../../../public/imgs/sun.jpg";
import bg from "../../../public/imgs/dark-abstract-3.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeatureTwo: React.FC = () => {
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
    <section ref={sectionRef} className={classes["feature-box-section"]}>
      <div
        className={`${classes["feature-box"]} ${
          !sectionRevealed ? classes["hidden"] : ""
        }`}
      >
        <div className={classes["feature-box__text-container"]}>
          <h1>
            BUILDING BETTER <span>WORLDS</span>
          </h1>

          <div className={classes.accent}></div>
          <p>
            We specialize in building beautiful, intuitive websites that deliver
            a rich user experience and feature your business content in an
            elegant and meaningful way. Have a look at some of our projects.
          </p>
          <Link href="/portfolio" className="button">
            OUR WORK
          </Link>
        </div>
        <div className={classes["feature-box__img-container"]}>
          <Image src={sun} alt="abstract Image" />
        </div>
      </div>
      <div className={classes.overlay}></div>
      <Image
        style={{ transform: `translateY(${240 - offsetY * 0.09}px)` }}
        className={classes["bg-img"]}
        src={bg}
        alt="dunes"
      />
    </section>
  );
};

export default FeatureTwo;
