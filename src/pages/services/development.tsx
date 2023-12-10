import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Head from "next/head";

const DevelopmentPage: React.FC = () => {
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
        <title>DEVELOPMENT | AETHER</title>
        <meta
          name="description"
          content="AETHER service page for AETHER"
        />
      </Head>
      <div className={classes["service-page"]}>
        <header
          className={`${classes["service-hero"]} ${classes["development-hero"]}`}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["service-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>DEVELOPMENT</h1>
              <h2>CYBER SPACE</h2>
            </div>
          </div>
        </header>
        <section className={classes["service-section"]}>
          <h1>From Dream to Reality</h1>
          <p>
            At Tieton Construction, our residential construction service crafts
            homes that epitomize elegance, functionality, and timelessness. Each
            residence is more than a dwelling; it&apos;s a thoughtful investment
            in your future. Our commitment to quality ensures not just beautiful
            structures but enduring homes, designed for comfort and growth. With
            meticulous attention to detail and a focus on timeless design, we
            create spaces that are not only perfect for today but for the
            cherished moments of tomorrow—a place where families can thrive and
            create lasting memories.
          </p>
         
        </section>
      
      </div>
    </Fragment>
  );
};

export default DevelopmentPage;
