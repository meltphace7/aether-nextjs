import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import branding from "../../../public/imgs/circle-mosaic.jpg";
import design from "../../../public/imgs/fisheye-world-beach.jpg";
import development from "../../../public/imgs/abstract-stripes.jpg";
import world from "../../../public/imgs/diagonal-lines-bw.jpg";
const ServicesPage: React.FC = () => {
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
        <title>Services | AETHER DESIGN</title>
        <meta
          name="description"
          content="Services page for Tieton Construction"
        />
      </Head>
      <div className={classes["services-page"]}>
        <header
          className={classes["services-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["services-hero-overlay"]}></div>
          <div className={classes["world-container"]}>
            <div className={classes["world-overlay"]}></div>
            <Image src={world} alt="world" />
          </div>
          <div className={classes["hero-text"]}>
            <h1>SERVICES</h1>
            <h2>MOLDING NEW REALITIES</h2>
          </div>
          <div className={classes["bg-circle"]}></div>
        </header>
        <section className={classes["services-section"]}>
          <div className={classes["services-blurb"]}>
            <h1>EXPANDING YOUR SPHERE</h1>
            <div className={classes.accent}></div>
            <p>
              At Aether, we believe in crafting digital experiences that
              resonate with your brand identity. Our dedicated team sits down
              with you to unravel the essence of your unique style, ensuring a
              tailor-made web design that captivates your audience. We go beyond
              aesthetics, creating websites that not only wow your customers but
              also elevate your online presence. Trust us to transform your
              vision into a stunning reality, providing a superior web platform
              that reflects the true essence of your brand.
            </p>
          </div>
          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image
                src={branding}
                alt="branding"
                className={classes["branding-img"]}
              />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>GRAPHIC DESIGN</h1>
              <div className={classes.accent}></div>
              <p>
                Elevate your brand with our graphic design service. From
                distinctive logos and icons to comprehensive design solutions,
                we craft visuals that captivate and communicate your identity.
                Unleash creativity and make a lasting impression with our
                unparalleled design expertise.
              </p>
              {/* <Link href="/services/branding" className="button">
                Learn More
              </Link> */}
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image
                src={design}
                alt="design"
                className={classes["design-img"]}
              />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>WEB DESIGN</h1>
              <div className={classes.accent}></div>
              <p>
                Transform your brand&apos;s essence into a captivating online
                experience with our web design service. We seamlessly translate
                your unique aesthetic into a stunning website layout, combining
                functionality with aesthetic appeal for a digital presence that
                truly stands out.
              </p>
              {/* <Link
                href="/services/design"
                className="button"
              >
                Learn More
              </Link> */}
            </div>
          </div>

          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image
                src={development}
                alt="development"
                className={classes["development-img"]}
              />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>WEB DEVELOPMENT</h1>
              <div className={classes.accent}></div>
              <p>
                Experience seamless transition from design to functionality with
                our web development service. We meticulously transform concepts
                into fast, efficient, and accessible websites tailored to meet
                your business needs.  Your site will look and perform with excellence on a phone, desktop and everything in between.
              </p>
              {/* <Link href="/services/development" className="button">
                Learn More
              </Link> */}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ServicesPage;
