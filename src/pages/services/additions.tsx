import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Image from "next/image";
import Head from 'next/head';
import additionOne from "../../../public/imgs/addition-4.jpg";
import additionTwo from "../../../public/imgs/addition.jpg";
import additionThree from "../../../public/imgs/addition-3.jpg";

const AdditionsPage: React.FC = () => {
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
          <title>Additions | Tieton Construction</title>
          <meta
            name="description"
            content="Additions service page for Tieton Construction"
          />
        </Head>
        <div className={classes["service-page"]}>
          <header
            className={`${classes["service-hero"]} ${classes["additions-hero"]}`}
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <div className={classes["service-hero-overlay"]}>
              <div className={classes["hero-text"]}>
                <h1>Additions</h1>
                <h2>Expand Your Living Space</h2>
              </div>
            </div>
          </header>
          <section className={classes["service-section"]}>
            <h1>Take It To The Next Level</h1>
            <p>
              At Tieton Construction, our home addition service transforms your
              space according to your imagination—no limits, no settling. We
              believe in enhancing your home to match your dreams. Beyond
              aesthetic appeal, our additions bring both financial and personal
              value, providing an investment in your lifestyle. Whether
              it&apos;s expanding living areas, creating a new deck, or adding
              functional spaces, our team ensures every addition seamlessly
              integrates with your existing home, creating a harmonious and
              enriched living environment tailored to your unique vision and
              needs.
            </p>
            <div className={classes["service-section__imgs"]}>
              <div className={classes["service-section__img-container"]}>
                <Image src={additionOne} alt="Nice remodeled kitchen" />
              </div>
              <div className={classes["service-section__img-container"]}>
                <Image src={additionTwo} alt="Nice remodeled bathroom" />
              </div>
              <div className={classes["service-section__img-container"]}>
                <Image src={additionThree} alt="Nice remodeled kitchen" />
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
};

export default AdditionsPage;
