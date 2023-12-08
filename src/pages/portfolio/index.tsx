import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Portfolio.module.css";
import Head from "next/head";
import Project from '../../components/projects/Project';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import alipineIMG from '../../../public/imgs/projects/ALPINEPRINTS_SCREENSHOT.jpg';
import bdArtIMG from "../../../public/imgs/projects/BDART_SCREENSHOT.jpg";
import bdPhotoIMG from "../../../public/imgs/projects/BDPHOTO_SCREENSHOT.jpg";
import trailIMG from "../../../public/imgs/projects/TRAILTRACKER_SCREENSHOT.jpg";
import tietonIMG from "../../../public/imgs/projects/TIETON_SCREENSHOT.jpg";
import rojosIMG from "../../../public/imgs/projects/ROJOS_SCREENSHOT.jpg";


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
        <meta name="description" content="Portfolio page for Aether" />
      </Head>
      <div className={classes["portfolio-page"]}>
        <header
          className={classes["portfolio-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>PROJECTS</h1>
              <h2>SELECTED WORKS</h2>
            </div>
          </div>
          <div className={classes["bg-circle"]}></div>
        </header>
        <section className={classes["portfolio-section"]}>
          <div className={classes["aesthetic-stripes"]}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className={classes.projects}>
            <Project
              name="Trail Tracker"
              description="An app where you can discover and share hiking trails."
              image={trailIMG}
              link="https://trailtracker.vercel.app/home"
            />
            <Project
              name="Alpine Prints"
              description="An online print shop where a user can shop for various mountain prints."
              image={alipineIMG}
              link="https://alpineprints.vercel.app/home"
            />
            <Project
              name="Tieton Construction"
              description="A website for Tieton construction company.  Featuring all the standard pages you would expect on a construction company website."
              image={tietonIMG}
              link="https://tieton-construction-nextjs.vercel.app/"
            />
            <Project
              name="Brock Dallman Art"
              description="The art official website for Brock Dallman.  Featuring a gallery and an online store."
              image={bdArtIMG}
              link="https://www.brockdallmanart.com/"
            />
            <Project
              name="Brock Dallman Photography"
              description="Brock Dallman's official photography website.  Featuring photo galleries, blog and an online store."
              image={bdPhotoIMG}
              link="https://www.brockdallmanphotography.com/"
            />
            <Project
              name="Rojo's Mexican Cuisine"
              description="A restaurant website featuring a menus as well as general information."
              image={rojosIMG}
              link="https://rojosmexicancuisine.vercel.app/"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;
