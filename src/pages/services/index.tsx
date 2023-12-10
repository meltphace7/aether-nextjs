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
              Our comprehensive services cover the spectrum of construction
              needs. From commercial construction that establishes solid
              foundations for businesses to residential construction, home
              additions, and remodels that transform living spaces, our
              versatile team excels in every project. Committed to excellence
              and quality, we bring expertise to each service, ensuring the
              highest standards of craftsmanship. Whether it&apos;s building the
              future of commercial spaces or enhancing the warmth of homes,
              Tieton Construction stands as a trusted partner in delivering
              unparalleled construction solutions.
            </p>
          </div>
          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={branding} alt="branding" 
              className={classes['branding-img']}
              />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>GRAPHIC DESIGN</h1>
              <div className={classes.accent}></div>
              <p>
                Our commercial construction service guarantees efficiency. Our
                dedicated team consistently delivers projects ahead of schedule
                and under budget, ensuring optimal value for our clients.
              </p>
              <Link href="/services/branding" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image src={design} alt="design" className={classes['design-img']}/>
            </div>
            <div className={classes["service__text-container"]}>
              <h1>WEB DESIGN</h1>
              <div className={classes.accent}></div>
              <p>
                We bring dreams to life with our residential construction
                service. Crafting homes with timeless elegance, we create more
                than houses; we build cherished homes, tailored to reflect your
                unique vision.
              </p>
              <Link
                href="/services/design"
                className="button"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={development} alt="development" className={classes['development-img']} />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>WEB DEVELOPMENT</h1>
              <div className={classes.accent}></div>
              <p>
                Tieton Construction&apos;s home additions service seamlessly
                expands your living space. Whether a new deck or a wing, we
                deliver top-notch quality, minimizing disruption to your
                lifestyle for a stress-free enhancement.
              </p>
              <Link href="/services/development" className="button">
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
