import React from 'react'
import classes from './DoubleFeature.module.css';

const DoubleFeature: React.FC = () => {
    return (
      <section className={classes.section}>
        <div className={classes.feature}>
          <h2>Project Scope</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur hic laboriosam officiis alias aliquam praesentium,
            autem expedita illum porro! Quae, numquam non vero labore corporis
            doloremque harum expedita aliquam voluptatem cum, ipsa iure pariatur
            enim!
          </p>
        </div>
        <div className={classes.feature}>
          <h2>Project Scope</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur hic laboriosam officiis alias aliquam praesentium,
            autem expedita illum porro! Quae, numquam non vero labore corporis
            doloremque harum expedita aliquam voluptatem cum, ipsa iure pariatur
            enim!
          </p>
        </div>
      </section>
    );
}

export default DoubleFeature
