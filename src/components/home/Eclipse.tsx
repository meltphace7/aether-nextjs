import React from 'react';
import Image from 'next/image';
import classes from './Eclipse.module.css';
import eyeIcon from "../../../public/icons/eye.svg";
import reactIcon from '../../../public/icons/react-green.svg';
import upIcon from "../../../public/icons/trend-up-green.svg";

const QuadFeature = () => {
    return (
      <section className={classes.section}>
        <div className={classes["section-text"]}>
          <h1>
            <span className={classes["highlight-1"]}>ECLIPSE</span> THE{" "}
            <span className={classes["highlight-2"]}>ORDINARY</span>
          </h1>
          <div className={classes.accent}></div>
          <h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stand
            out from the competition and go beyond the pale.&nbsp;&nbsp;
          </h2>
        </div>
        <div className={classes.feature}>
          <div className={classes["feature-title__container"]}>
            <Image src={eyeIcon} alt="react icon" />
            <h1>
              ENVISION YOUR{" "}
              <span className={classes["highlight-1"]}>FUTURE</span>
            </h1>
          </div>
          <div className={classes.accent}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            laudantium, incidunt ab assumenda ratione eaque quis veniam
            doloremque nobis consequatur nihil laboriosam vitae nulla cupiditate
            voluptatum eius possimus id dolor. Nobis suscipit explicabo unde
            sint ratione, magnam laudantium laboriosam impedit!
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            laudantium, incidunt ab assumenda ratione eaque quis veniam
            doloremque nobis consequatur nihil laboriosam vitae nulla cupiditate
            voluptatum eius possimus id dolor. Nobis suscipit explicabo unde
            sint ratione, magnam laudantium laboriosam impedit!
          </p>
        </div>

        <div className={classes.feature}>
          <div className={classes["feature-title__container"]}>
            <Image src={upIcon} alt="react icon" />
            <h1>
              TRANSCEND WITH{" "}
              <span className={classes["highlight-1"]}>STYLE</span>
            </h1>
          </div>
          <div className={classes.accent}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            laudantium, incidunt ab assumenda ratione eaque quis veniam
            doloremque nobis consequatur nihil laboriosam vitae nulla cupiditate
            voluptatum eius possimus id dolor. Nobis suscipit explicabo unde
            sint ratione, magnam laudantium laboriosam impedit!
          </p>
        </div>
        <div className={classes.bg}></div>
        <div className={classes.sphere}></div>

     
      </section>
    );
}

export default QuadFeature
