import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Portfolio.module.css";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';


const PortfolioPage: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  // Parallax effect for Header
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
        <title>Portfolio | AETHER DESIGN</title>
        <meta
          name="description"
          content="Portfolio page for Aether"
        />
      </Head>
      <div className={classes["portfolio-page"]}>
        <header
          className={classes["portfolio-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Portfolio</h1>
              <h2>Check Out Our Work</h2>
            </div>
          </div>
        </header>
        <section className={classes["portfolio-section"]}>
          
        </section>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;
