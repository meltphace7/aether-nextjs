import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import classes from "@/styles/About.module.css";
import Hero from '../../components/about/Hero';
import team from '../../../public/imgs/team-members.jpg';

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Tieton Construction</title>
        <meta name="description" content="About page for Tieton Construction" />
      </Head>
      <div className={classes["about-page"]}>
        <Hero />
        <section className={classes["about-section"]}>
          <h1>Our Dedication Runs Deep</h1>
          <div className={classes.accent}></div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded
            in 2006 by Mike Higgins, Tieton construction has thrived by
            upholding core values of quality, integrity, and community. Evolving
            to meet the demands of our fast-paced world, we remain committed to
            delivering exceptional construction services. With a focus on
            craftsmanship and ethical practices, we build not only structures
            but enduring relationships within the communities we serve. Explore
            our journey and discover how we transform visions into quality-built
            realities.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At
            Tieton Construction, our commitment revolves around you—the
            customer. Experience worry-free projects as we blend craftsmanship
            with efficiency, ensuring beautiful results delivered on time. Trust
            us to bring your vision to life, surpassing expectations with every
            detail and timeline met.
          </p>
          <div className={classes["about-image__overlay"]}>
            <h2>
              We Get Things <span>Done.</span>
            </h2>
          </div>
          <div className={classes["team-section"]}>
            <h1>Our Team</h1>
            <div className={classes.accent}></div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At
              Tieton Construction, our team is a dynamic blend of adaptability,
              efficiency, friendliness, and talent. Hailing from diverse
              backgrounds, we are united by a common cause—to build beautiful,
              functional projects that fulfill our customers&apos; needs. With a
              shared commitment to perfection, our team collaborates seamlessly,
              ensuring every project is a success. Embrace a construction
              experience where professionalism meets warmth, and where expertise
              meets innovation.
            </p>
            <Image src={team} alt="team" className={classes["team-img"]} />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
