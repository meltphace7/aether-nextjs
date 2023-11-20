import React, {useState, useEffect} from "react";
import classes from "./Feature.module.css";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface FeatureProps {
  title: string;
  content: string;
  buttonText: string;
  imgSrc: any;
  path: string;
}

const Feature: React.FC<FeatureProps> = (props) => {
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
    <section
      ref={sectionRef}
      className={`${classes["feature-box-section"]} ${
        !sectionRevealed ? classes["feature--hidden"] : ""
      }`}
    >
      <div className={classes["feature-box"]}>
        <div className={classes["feature-box__img-container"]}>
          <Image src={props.imgSrc} alt="abstract Image" />
        </div>
        <div className={classes["feature-box__text-container"]}>
          <h1>{props.title}</h1>
          <div className={classes.accent}></div>
          <p>{props.content}</p>
          <Link href={props.path} className="button">
            {props.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
