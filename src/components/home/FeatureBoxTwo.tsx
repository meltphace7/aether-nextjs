import React from "react";
import classes from "./FeatureBoxTwo.module.css";
import Image from "next/image";
import abstractTwo from "../../../public/imgs/abstract-fractal-2.jpg";
import Link from "next/link";

const FeatureTwo: React.FC = () => {
  return (
    <section className={classes["feature-box-section"]}>
      <div className={classes["feature-box"]}>
        <div className={classes["feature-box__img-container"]}>
          <Image src={abstractTwo} alt="abstract Image" />
        </div>
        <div className={classes["feature-box__text-container"]}>
          <h1>Dedicated Perfection</h1>
          <div className={classes.accent}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            incidunt distinctio aspernatur eligendi excepturi laboriosam
            obcaecati, cupiditate placeat, fugit quae tempore quidem ullam iusto
            vero.
          </p>
          <Link href="/about" className="button">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
