import React from "react";
import classes from "./Feature.module.css";
import Image from "next/image";
import abstractOne from "../../../public/imgs/abstract-fractal.jpg";
import Link from "next/link";

interface FeatureProps {
    title: string;
    content: string;
    buttonText: string;
  imgSrc: any;
  path: string;

}

const Feature: React.FC<FeatureProps> = (props) => {
  return (
    <section className={classes["feature-box-section"]}>
      <div className={classes["feature-box"]}>
        <div className={classes["feature-box__img-container"]}>
        <Image src={props.imgSrc} alt="abstract Image" />
        </div>
        <div className={classes["feature-box__text-container"]}>
          <h1>{props.title}</h1>
          <div className={classes.accent}></div>
          <p>
                      {props.content}
          </p>
          <Link href={props.path} className="button">
            {props.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
