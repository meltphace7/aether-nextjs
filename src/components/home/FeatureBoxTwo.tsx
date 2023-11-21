import React, {useState, useEffect} from "react";
import classes from "./FeatureBoxTwo.module.css";
import Image from "next/image";
import modern from "../../../public/imgs/modern.jpg";
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
          <Image src={modern} alt="abstract Image" />
        </div>
        <div className={classes["feature-box__text-container"]}>
          <h1>
            Form <span>Function</span> Future
          </h1>

          <div className={classes.accent}></div>
          <p>
            Dedicated to sustainability, modernity, and functionality, we
            seamlessly integrate eco-friendly practices with cutting-edge
            design. Building the future with innovation and a commitment to
            lasting excellence.
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
