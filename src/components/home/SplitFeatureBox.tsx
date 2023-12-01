import React, { useState, useEffect } from "react";
import classes from "./SplitFeatureBox.module.css";
import Link from "next/link";
import Image from "next/image";
import seattle from "../../../public/imgs/seattle.jpg";
import { useInView } from "react-intersection-observer";

const SplitFeatureBox: React.FC = () => {
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
    <section className={classes["split-feature-box"]}>
      <div
        ref={sectionRef}
        className={`${classes["feature-box__text-container"]}  ${
          !sectionRevealed ? classes["feature--hidden"] : ""
        }`}
      >
        <h1>
          Our <span>Roots</span> Run Deep
        </h1>
        <div className={classes.accent}></div>
        <p>
          Rooted in the Pacific Northwest, we blend regional charm with
          innovative solutions. Adaptable and committed, we deliver quality
          projects, harmonizing craftsmanship with the ever-changing landscape.
        </p>
        <Link href="/about" className="button">
          About Us
        </Link>
      </div>
      <div className={classes["split-feature-box__img-container"]}>
        <Image src={seattle} alt="Seattle and Mount Rainier" />
      </div>
    </section>
  );
};

export default SplitFeatureBox;
