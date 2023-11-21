import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import classes from "@/styles/FAQ.module.css";

const FaqPage: React.FC = () => {
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
        <title>FAQ | Tieton Construction</title>
        <meta
          name="description"
          content="Frequently Asked Questions page for Tieton Construction"
        />
      </Head>
      <div className={classes["faq-page"]}>
        <header
          className={classes["faq-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </header>
        <section className={classes["faq-section"]}>
          <div className={classes["faq"]}>
            <h2 className={classes["question"]}>
              What services do you provide?
            </h2>
            <p className={classes["answer"]}>
              We provide a multitude of services from commercial and residential construction to home additions and remodeling.
            </p>
          </div>

          <div className={classes["faq"]}>
            <h2 className={classes["question"]}>
              What is the typical time to complete a bathroom remodel?
            </h2>
            <p className={classes["answer"]}>
              The typical bathroom takes around 3 - 5 weeks.
            </p>
          </div>

          <div className={classes["faq"]}>
            <h2 className={classes["question"]}>
              How long does it take to build a brand new home?
            </h2>
            <p className={classes["answer"]}>
              Usually in under 8 - 9 months with ideal circumstances. Weather
              and permiting issues can lengthen the process.
            </p>
          </div>

          <div className={classes["faq"]}>
            <h2 className={classes["question"]}>
              Do I need a Real Estate agent to purchase a new construction home?
            </h2>
            <p className={classes["answer"]}>
              No, you do not need a real estate agent to purchase a home from
              Summit Crest Construction. Of course, you are free to work with a
              real estate agent if you choose or are currently working with one,
              but it is not a requirement.
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default FaqPage;
