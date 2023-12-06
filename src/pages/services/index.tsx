import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import commercial from "../../../public/imgs/modern-2.jpg";
import residential from "../../../public/imgs/modern-5.jpg";
import additions from "../../../public/imgs/additions.jpg";
import remodel from "../../../public/imgs/gallery/remodel-3.jpg";

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
        <meta name="description" content="Services page for Tieton Construction" />
      </Head>
      <div className={classes["services-page"]}>
        <header
          className={classes["services-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["services-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>What We Do</h1>
              <h2>Quality Comes First</h2>
            </div>
          </div>
        </header>
        <section className={classes["services-section"]}>
          <div className={classes["services-blurb"]}>
            <h1>Building On Purpose</h1>
            <div className={classes.accent}></div>
            <p>
              Our comprehensive services cover the
              spectrum of construction needs. From commercial construction that
              establishes solid foundations for businesses to residential
              construction, home additions, and remodels that transform living
              spaces, our versatile team excels in every project. Committed to
              excellence and quality, we bring expertise to each service,
              ensuring the highest standards of craftsmanship. Whether it&apos;s
              building the future of commercial spaces or enhancing the warmth
              of homes, Tieton Construction stands as a trusted partner in
              delivering unparalleled construction solutions.
            </p>
          </div>
          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={commercial} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Commercial Construction</h1>
              <div className={classes.accent}></div>
              <p>
                Our commercial construction service
                guarantees efficiency. Our dedicated team consistently delivers
                projects ahead of schedule and under budget, ensuring optimal
                value for our clients.
              </p>
              <Link href="/services/commercial-construction" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image src={residential} alt="remodeling" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Residential Construction</h1>
              <div className={classes.accent}></div>
              <p>
                We bring dreams to life with our residential
                construction service. Crafting homes with timeless elegance, we
                create more than houses; we build cherished homes, tailored to
                reflect your unique vision.
              </p>
              <Link
                href="/services/residential-construction"
                className="button"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={additions} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Additions</h1>
              <div className={classes.accent}></div>
              <p>
                Tieton Construction&apos;s home additions service seamlessly
                expands your living space. Whether a new deck or a wing, we
                deliver top-notch quality, minimizing disruption to your
                lifestyle for a stress-free enhancement.
              </p>
              <Link href="/services/additions" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image src={remodel} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Remodeling</h1>
              <div className={classes.accent}></div>
              <p>
                Elevate your living experience with Tieton Construction&apos;s
                home remodeling service. Transform your space into a dream
                sanctuary where functionality meets style, creating a harmonious
                and personalized environment.
              </p>
              <Link href="/services/remodeling" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ServicesPage;
