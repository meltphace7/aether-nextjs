import React, { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import classes from "@/styles/About.module.css";
import Hero from '../../components/about/Hero';
import AboutOverlay from '../../components/about/AboutOverlay';
import brock from '../../../public/imgs/BROCK-DALLMAN_PORTRAIT.jpg'

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>About | AETHER DESIGN</title>
        <meta name="description" content="About page for Aether Design" />
      </Head>
      <div className={classes["about-page"]}>
        <Hero />
        <section className={classes["about-section"]}>
          <h1>DRIVEN BY CREATIVE PASSION</h1>
          <div className={classes.accent}></div>
          <div className={classes["blurb"]}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded
              in 2023 by Brock Dallman, Aether has thrived by upholding core
              values of quality, integrity, and community. Evolving to meet the
              demands of our fast-paced world, we remain committed to delivering
              exceptional web development services. With a focus on
              craftsmanship and ethical practices, we build not only awesome
              websites but enduring relationships with the clients serve.
              Explore our journey and discover how we transform visions into
              quality-built realities.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At
              Aether, our commitment revolves around you—the customer.
              Experience worry-free projects as we blend craftsmanship with
              efficiency, ensuring beautiful results delivered on time. Trust us
              to bring your vision to life, surpassing expectations with every
              detail and timeline met.
            </p>
          </div>
        </section>
        <AboutOverlay />
        <section className={classes["team-section"]}>
          <h1>PERSONNEL</h1>
          <div className={classes.accent}></div>
          <div className={classes["team-member"]}>
            <div className={classes["tm-text"]}>
              <h1>BROCK DALLMAN</h1>
              <h2>
                Lead Designer <span>|</span> Developer <span>|</span> Creator
              </h2>
              <div className={classes["tm-accent"]}></div>
              <p>
                Creating and learning things as always been my passion. I take
                inspiration from everywhere and converge it all with a different
                spin. As the core member of AETHER, I love a new challenge and
                look forward to working with you to create something new!
              </p>
            </div>
            <div className={classes["tm-img__container"]}>
              <Image src={brock} alt="Brock Dallman" />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
