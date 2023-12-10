import React, {useState, useEffect} from "react";
import classes from "./FeatureBox.module.css";
import Image from "next/image";
import modern from "../../../public/imgs/forest.jpg";
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
    <section ref={sectionRef} className={classes["feature-box-section"]}>
      <div
        // className={classes["feature-box"]}
        className={`${classes["feature-box"]} ${
          !sectionRevealed ? classes["hidden"] : ""
        }`}
      >
        <div className={classes["feature-box__overlay"]}>
          <div className={classes["feature-box__img-container"]}>
            <Image src={modern} alt="abstract Image" />
          </div>
          <div className={classes["feature-box__text-container"]}>
            <h1>
              GROW WITH <span>US</span>
            </h1>

            <div className={classes.accent}></div>
            <p>
              Our mission is to give your business an outstanding web presence
              by the merger of form and functionality. We cultivate your brands
              growth with creativity and technology to deliver a dynamic,
              outstanding user experience for your customers.
            </p>
            <Link href="/about" className="button">
              ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
