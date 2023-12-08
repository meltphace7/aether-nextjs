import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import classes from "@/styles/FAQ.module.css";
import Accordian from '../../components/faq/Accordian';

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
        <title>FAQ | AETHER DESIGN</title>
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
          <Accordian
            content={[
              {
                question: "What services do you provide?",
                answer:
                  "We provide web development, web design and general graphic design to help make your brand succesful.",
              },
              {
                question:
                  "How long does it take for the average website to be completed?",
                answer:
                  "Usually around a couple weeks but it can vary greatly depending on complexity and features.",
              },
              {
                question: "How much for a completely customized website?",
                answer:
                  "A completey customized website can cost from five to eight thousand dollars depending on features and that amount of features.",
              },
              {
                question: "How much does a basic business website cost",
                answer:
                  "A basic business web site with 5 pages costs two thousand dollars.  This includes three rounds of revisions so you can change it to your satisfaction.  Every revision session after that will cost an  additional 300 dollars.",
              },
            ]}
          />
        </section>
      </div>
    </Fragment>
  );
}

export default FaqPage;
