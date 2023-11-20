import React, {useState, useEffect} from "react";
import classes from "./FeatureBoxTwo.module.css";
import Image from "next/image";
import abstractTwo from "../../../public/imgs/abstract-fractal-2.jpg";
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

  return (
    <section
      ref={sectionRef}
      className={`${classes["feature-box-section"]} ${
        !sectionRevealed ? classes["feature--hidden"] : ""
      }`}
    >
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
