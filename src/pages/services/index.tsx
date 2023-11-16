import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import newConstruction from "../../../public/imgs/construction-new.jpg";
import remodel from "../../../public/imgs/construction-remodel.jpg";
import demolition from "../../../public/imgs/demolition.jpg";
import excavation from "../../../public/imgs/excavation.jpg";

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
        <title>TEST CORP - Services</title>
        <meta name="description" content="Services page for TEST CORP" />
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              nisi provident exercitationem, modi sequi architecto tenetur
              porro, magnam velit cum explicabo assumenda maxime, ullam vitae
              magni quos excepturi odit natus! Necessitatibus repellendus harum
              quaerat, natus repellat quod et cumque quisquam id fuga. Possimus
              dolore consectetur doloremque fuga ea eaque, aliquam numquam
              quibusdam libero iure, dicta quidem, ducimus sequi neque corporis.
            </p>
          </div>
          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={newConstruction} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>New Construction</h1>
              <div className={classes.accent}></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reiciendis error iusto velit distinctio blanditiis, totam
                excepturi placeat accusamus, ab voluptate rerum fugiat omnis
                architecto laborum numquam laudantium id doloribus. Ipsam eum
                quisquam eligendi vel.
              </p>
              <Link href="/services/new-construction" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image src={remodel} alt="remodeling" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Remodeling</h1>
              <div className={classes.accent}></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reiciendis error iusto velit distinctio blanditiis, totam
                excepturi placeat accusamus, ab voluptate rerum fugiat omnis
                architecto laborum numquam laudantium id doloribus. Ipsam eum
                quisquam eligendi vel.
              </p>
              <Link href="/services/remodeling" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={classes["service"]}>
            <div className={classes["service__img-container"]}>
              <Image src={demolition} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Demolition</h1>
              <div className={classes.accent}></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reiciendis error iusto velit distinctio blanditiis, totam
                excepturi placeat accusamus, ab voluptate rerum fugiat omnis
                architecto laborum numquam laudantium id doloribus. Ipsam eum
                quisquam eligendi vel.
              </p>
              <Link href="/services/demolition" className="button">
                Learn More
              </Link>
            </div>
          </div>

          <div className={`${classes["service"]} ${classes["service-alt"]}`}>
            <div className={classes["service__img-container"]}>
              <Image src={excavation} alt="new construction" />
            </div>
            <div className={classes["service__text-container"]}>
              <h1>Excavation</h1>
              <div className={classes.accent}></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                reiciendis error iusto velit distinctio blanditiis, totam
                excepturi placeat accusamus, ab voluptate rerum fugiat omnis
                architecto laborum numquam laudantium id doloribus. Ipsam eum
                quisquam eligendi vel.
              </p>
              <Link href="/services/excavation" className="button">
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
