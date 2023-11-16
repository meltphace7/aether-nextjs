import React from "react";
import classes from "./FeatureOverlay.module.css";
import Link from "next/link";
import Image from "next/image";
import cityScape from "../../../public/imgs/city-lights.jpg";

const FeatureOverlay: React.FC = () => {
  return (
    <section className={classes["feature-overlay"]}>
      <div className={classes["feature-overlay__text-container"]}>
        <h1>Building Better for Life</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          odit deleniti laboriosam eveniet velit rem quisquam maxime eum, quia
          consectetur quae nisi, cupiditate reprehenderit error veritatis
          voluptates aperiam deserunt veniam?
        </p>
        <Link href="/services" className="button">
          Our Work
        </Link>
          </div>
          <Image src={cityScape} alt="city scape" />
    </section>
  );
};

export default FeatureOverlay;