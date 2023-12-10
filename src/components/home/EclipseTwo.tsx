import React, {useState, useEffect } from 'react'
import classes from './EclipseTwo.module.css';
import Link from 'next/link';
import { useInView } from "react-intersection-observer";

const EclipseTwo: React.FC = () => {
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
    <section className={classes.section}>
      <div
        ref={sectionRef}
        // className={classes["section-text"]}
        className={`${classes["section-text"]} ${
          !sectionRevealed ? classes["hidden"] : ""
        }`}
      >
        <h1>
          <span className="highlight-1">BE</span>&nbsp;
          <span>BOLD</span>
        </h1>
        <div className={classes.accent}></div>
        <h1>
          <span className="highlight-2">GO</span>&nbsp;
          <span className="highlight-1">BEYOND</span>
        </h1>
      </div>
      <Link className="button" href="/contact">
        CONTACT
      </Link>
      <div className={classes.bg}></div>
      <div className={classes.sphere}></div>
    </section>
  );
}

export default EclipseTwo
