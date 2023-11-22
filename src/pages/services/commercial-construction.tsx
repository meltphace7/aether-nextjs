import React, {Fragment, useState, useEffect} from "react";
import classes from "@/styles/Service.module.css";
import Head from 'next/head';
import Image from 'next/image';
import homeOne from '../../../public/imgs/gallery-3/commercial-1.jpg'
import homeTwo from "../../../public/imgs/gallery-3/commercial-6.jpg";
import homeThree from "../../../public/imgs/gallery-3/commercial-8.jpg";

const CommericialConstructionPage: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Commercial Construction | Tieton Construction</title>
        <meta
          name="description"
          content="Commercial Construction service page for Tieton Construction"
        />
      </Head>
      <div className={classes["service-page"]}>
        <header
          className={`${classes["service-hero"]} ${classes["construction-hero"]}`}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["service-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Commercial Construction</h1>
              <h2>From The Ground Up</h2>
            </div>
          </div>
        </header>
        <section className={classes["service-section"]}>
          <h1>Starting New</h1>
          <p>
            With over 20 years of industry expertise, Tieton Construction excels
            in commercial construction. Meticulous planning, unwavering focus,
            and a commitment to excellence define our approach. From inception
            to completion, we bring a wealth of experience to create stunning
            commercial spaces for both public and private entities. Our seasoned
            team combines innovation and quality craftsmanship, ensuring each
            project reflects the highest standards. Tieton Construction stands
            as a trusted partner, dedicated to building not just structures, but
            enduring landmarks that contribute to the success of businesses and
            communities.
          </p>
          <div className={classes["service-section__imgs"]}>
            <div className={classes["service-section__img-container"]}>
              <Image src={homeOne} alt="new home" />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image src={homeTwo} alt="new home" />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image src={homeThree} alt="new home" />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default CommericialConstructionPage;
