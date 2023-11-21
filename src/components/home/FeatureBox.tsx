import React, {useState, useEffect} from 'react';
import classes from './FeatureBox.module.css';
import Image from 'next/image';
import modernFour from '../../../public/imgs/modern-4.jpg';
import Link from 'next/link';
import { useInView } from "react-intersection-observer";

const FeatureOne: React.FC = () => {
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
          <Image src={modernFour} alt="abstract Image" />
        </div>
        <div className={classes["feature-box__text-container"]}>
          <h1>Dedicated to Perfection</h1>
          <div className={classes.accent}></div>
          <p>
            Committed to excellence, Tieton construction strives for
            perfection in every project. From meticulous planning to precise
            execution, we deliver unmatched quality, ensuring client
            satisfaction and enduring success.
          </p>
          <Link href="/services" className="button">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureOne
