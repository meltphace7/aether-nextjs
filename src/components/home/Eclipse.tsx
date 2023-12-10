import React, {useState, useEffect } from "react";
import Image from "next/image";
import classes from "./Eclipse.module.css";
import eyeIcon from "../../../public/icons/eye.svg";
import reactIcon from "../../../public/icons/react-green.svg";
import upIcon from "../../../public/icons/trend-up-green.svg";
import { useInView } from "react-intersection-observer";

const EclipseFeature = () => {
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
    <section className={classes.section}>
      <div
        ref={sectionRef}
        // className={classes["section-text"]}
        className={`${classes["section-text"]} ${
          !sectionRevealed ? classes["hidden"] : ""
        }`}
      >
        <h1>
          <span className={classes["highlight-1"]}>ECLIPSE</span> THE{" "}
          <span className={classes["highlight-2"]}>ORDINARY</span>
        </h1>
        <div className={classes.accent}></div>
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stand out
          from the competition and go beyond the pale.&nbsp;&nbsp;
        </h2>
      </div>
      <div className={classes.feature}>
        <div className={classes["feature-title__container"]}>
          <Image src={eyeIcon} alt="react icon" />
          <h1>
            ENVISION YOUR <span className={classes["highlight-1"]}>FUTURE</span>
          </h1>
        </div>
        <div className={classes.accent}></div>
        <p>
          We sit down with you to find out your unique needs and preferences and
          then translate them to a beautiful, responsive website that can grow
          with your business. At Aether your needs are out number one priority.
        </p>
      </div>
      <div className={classes.feature}>
        <div className={classes["feature-title__container"]}>
          <Image src={reactIcon} alt="react icon" />
          <h1>
            NEXT LEVEL <span className={classes["highlight-1"]}>UX</span>
          </h1>
        </div>
        <div className={classes.accent}></div>
        <p>
          At Aether we specialize in the NextJS framework, which is a javascript
          framework which features server side rendering and superior search
          engine optimization. In Leyman&apos;s terms, NextJS allows for a
          lightning fast website that is easy for your potential customers to
          find on the web.
        </p>
      </div>

      <div className={classes.feature}>
        <div className={classes["feature-title__container"]}>
          <Image src={upIcon} alt="react icon" />
          <h1>
            TRANSCEND WITH <span className={classes["highlight-1"]}>STYLE</span>
          </h1>
        </div>
        <div className={classes.accent}></div>
        <p>
          Aether takes pride in our stylish designs! There&apos;s a lot of bland
          and uninspiring websites out there. We strive to make your website
          stand out and deviver a unique and captivating experience that have
          your customers returning time and time again!
        </p>
      </div>
      <div className={classes.bg}></div>
      <div className={classes.sphere}></div>
    </section>
  );
};

export default EclipseFeature;
