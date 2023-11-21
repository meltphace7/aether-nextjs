import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Head from "next/head";
import Image from "next/image";
import remodelOne from "../../../public/imgs/gallery/remodel-11.jpg";
import remodelTwo from "../../../public/imgs/remodel-2.jpg";
import remodelThree from "../../../public/imgs/remodel-3.jpg";

const RemodelingPage: React.FC = () => {
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
        <title>Remodeling | Tieton Construction</title>
        <meta
          name="description"
          content="Remodeling service page for Tieton Construction"
        />
      </Head>
      <div className={classes["service-page"]}>
        <header
          className={`${classes["service-hero"]} ${classes["remodels-hero"]}`}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["service-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Remodeling</h1>
              <h2>Beautiful Transformations</h2>
            </div>
          </div>
        </header>
        <section className={classes["service-section"]}>
          <h1>Rejuvante Your Home</h1>
          <p>
            At Tieton Construction, our home remodeling service turns your
            vision into reality, transcending the limits of possibility. Whether
            it's a rejuvenated kitchen, a luxurious bathroom, or a complete home
            transformation, our skilled team excels at making dreams come to
            life. With a commitment to quality and attention to detail, we
            ensure each remodel enhances the functionality, beauty, and overall
            value of your home. Experience the profound impact of our remodeling
            expertise as we reimagine and elevate your living spaces, creating a
            home that reflects your unique lifestyle and aspirations.
          </p>
          <div className={classes["service-section__imgs"]}>
            <div className={classes["service-section__img-container"]}>
              <Image src={remodelTwo} alt="Nice remodeled kitchen" />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image src={remodelOne} alt="Nice remodeled bathroom" />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image src={remodelThree} alt="Nice remodeled kitchen" />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default RemodelingPage;
