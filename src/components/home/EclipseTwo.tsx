import React from 'react'
import classes from './EclipseTwo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import arrowIcon from '../../../public/icons/out-icon.svg';

const EclipseTwo: React.FC = () => {

    return (
      <section className={classes.section}>
        <div className={classes["section-text"]}>
          <h1>
            <span className="highlight-1">BE</span>&nbsp;&nbsp;&nbsp;
            <span>BOLD.</span>
          </h1>
          <div className={classes.accent}></div>
          <h1>
            <span className="highlight-2">GO</span>&nbsp;&nbsp;&nbsp;
            <span className="highlight-1">BEYOND.</span>
          </h1>
        </div>

       
          <Link className="button" href="/contact">CONTACT</Link>
        
       

        <div className={classes.bg}></div>
        <div className={classes.sphere}></div>
      </section>
    );
}

export default EclipseTwo
