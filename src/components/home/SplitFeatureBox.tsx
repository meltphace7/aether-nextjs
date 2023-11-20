import React, {useState, useEffect } from 'react'
import classes from './SplitFeatureBox.module.css';
import Link from 'next/link';
import Image from 'next/image';
import cityLights from '../../../public/imgs/city-lights-vert.jpg';
import { useInView } from "react-intersection-observer";

const SplitFeatureBox: React.FC = () => {
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
      className={`${classes["split-feature-box"]} ${
        !sectionRevealed ? classes["feature--hidden"] : ""
      }`}
    >
      <div className={classes["split-feature-box__text-container"]}>
        <h1>Our Roots Run Deep</h1>
        <div className={classes.accent}></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque culpa
          dicta quia aperiam ipsa cupiditate aut fuga aliquam eius aspernatur,
          fugiat consequatur praesentium necessitatibus ipsum non, sit quaerat
          minus veritatis.
        </p>
        <Link href="/about" className="button">
          About Us
        </Link>
      </div>
          <div className={classes["split-feature-box__img-container"]}>
              
        <Image src={cityLights} alt="City lights"  />
      </div>
    </section>
  );
}

export default SplitFeatureBox
