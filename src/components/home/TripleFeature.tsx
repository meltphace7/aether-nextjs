import React from "react";
import classes from "./TripleFeature.module.css";
import Image from 'next/image';
import code from '../../../public/icons/code.svg';
import create from "../../../public/icons/edit.svg";
import earth from "../../../public/icons/globe.svg";
import codeIMG from '../../../public/imgs/code.jpg';
import designIMG from "../../../public/imgs/design.jpg";
import deployIMG from "../../../public/imgs/deploy.jpg";

const TripleFeature: React.FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.feature}>
        <div className={classes["feature-text"]}>
          <Image src={create} alt="Design icon" />
          <h2>
            <span>01</span>&nbsp;DESIGN
          </h2>
          <div className={classes.accent}></div>
          <p>
            Unleash the power of a visually stunning and uniquely tailored brand
            identity with our design service. From eye-catching logos to
            captivating website layouts, we transform your vision into a
            cohesive and memorable visual story.
          </p>
        </div>
        <div className={classes["feature-img-container"]}>
          <Image src={designIMG} alt="" />
        </div>
      </div>
      <div className={classes.feature}>
        <div className={classes["feature-text"]}>
          <Image src={code} alt="Design icon" />
          <h2>
            <span>02</span>&nbsp;DEVELOP
          </h2>
          <div className={classes.accent}></div>
          <p>
            AETHER utilizes the latest in web technologies to transform your dream design into a beautiful, impactful, interactive website which will look stellar on any device and deliver a memorable user experience.   
          </p>
        </div>
        <div className={classes["feature-img-container"]}>
          <Image src={codeIMG} alt="" />
        </div>
      </div>
      <div className={classes.feature}>
        <div className={classes["feature-text"]}>
          <Image src={earth} alt="Design icon" />
          <h2>
            <span>03</span>&nbsp;DEPLOY
          </h2>
          <div className={classes.accent}></div>
          <p>
            Time for your brand to blast off!  AETHER will help you secure a custom web domain if you don't already have one.  Then we deploy your site to the web on a safe and secure web server, protected with SSL encryption.
          </p>
        </div>
        <div className={classes["feature-img-container"]}>
          <Image src={deployIMG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TripleFeature;
