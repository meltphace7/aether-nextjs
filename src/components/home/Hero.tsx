import React from 'react'
import classes from './Hero.module.css';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
      <div className={classes.hero}>
        <div className={classes["hero-text-container"]}>
          <h1>WELCOME TO THIS WEBSITE</h1>
          <h2>We deliver high quality services</h2>
            <Link href="/contact" className="button">Contact Us</Link>
            </div>
      </div>
    );
}

export default Hero
