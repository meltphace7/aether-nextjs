import React, {Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Image from "next/image";
import Head from 'next/head'
import residentialOne from "../../../public/imgs/modern-house-3.jpg";
import residentialTwo from "../../../public/imgs/modern-house-4.jpg";
import residentialThree from "../../../public/imgs/gallery-2/home-8.jpg";

const ResidentialConstructionPage: React.FC = () => {
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
          <title>Residential Construction | Tieton Construction</title>
          <meta
            name="description"
            content="Residential Construction service page for Tieton Construction"
          />
        </Head>
        <div className={classes["service-page"]}>
          <header
            className={`${classes["service-hero"]} ${classes["residential-hero"]}`}
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <div className={classes["service-hero-overlay"]}>
              <div className={classes["hero-text"]}>
                <h1>Residential Construction</h1>
                <h2>Elegant Dream Homes</h2>
              </div>
            </div>
          </header>
          <section className={classes["service-section"]}>
            <h1>From Dream to Reality</h1>
            <p>
              At Tieton Construction, our residential construction service
              crafts homes that epitomize elegance, functionality, and
              timelessness. Each residence is more than a dwelling; it&apos;s a
              thoughtful investment in your future. Our commitment to quality
              ensures not just beautiful structures but enduring homes, designed
              for comfort and growth. With meticulous attention to detail and a
              focus on timeless design, we create spaces that are not only
              perfect for today but for the cherished moments of tomorrow—a
              place where families can thrive and create lasting memories.
            </p>
            <div className={classes["service-section__imgs"]}>
              <div className={classes["service-section__img-container"]}>
                <Image src={residentialOne} alt="Nice remodeled kitchen" />
              </div>
              <div className={classes["service-section__img-container"]}>
                <Image src={residentialTwo} alt="Nice remodeled bathroom" />
              </div>
              <div className={classes["service-section__img-container"]}>
                <Image src={residentialThree} alt="Nice remodeled kitchen" />
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
};

export default ResidentialConstructionPage;
