import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Contact.module.css";
import Image from 'next/image';
import hoursIcon from '../../../public/icons/time-outline.svg';
import phoneIcon from "../../../public/icons/call-outline.svg";
import emailIcon from "../../../public/icons/mail-outline.svg";
import addressIcon from "../../../public/icons/location-outline.svg";

const ContactPage: React.FC = () => {
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
        <title>Contact | Tieton Construction</title>
        <meta name="description" content="Contact page for Tieton Construction" />
      </Head>
      <div className={classes["contact-page"]}>
        <header
          className={classes["contact-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <h1>Let&apos;s Get In Touch</h1>
          </div>
        </header>
        <section className={classes["contact-main"]}>
          <div className={classes["contact-row"]}>
            <div className={classes["contact-container"]}>
              <Image src={hoursIcon} alt="hours icon" />
              <h1>Hours</h1>
              <div className={classes.accent}></div>
              <h2>Monday - Friday</h2>
              <h2>7:30AM - 5:30PM</h2>
            </div>
            <div className={classes["contact-container"]}>
              <Image src={phoneIcon} alt="phone icon" />
              <h1>Phone</h1>
              <div className={classes.accent}></div>
              <h2>(509)-555-2983</h2>
            </div>
          </div>

          <div className={classes["contact-row"]}>
            <div className={classes["contact-container"]}>
              <Image src={emailIcon} alt="email icon" />
              <h1>Email</h1>
              <div className={classes.accent}></div>
              <h2>testcorp@gmail.com</h2>
            </div>
            <div className={classes["contact-container"]}>
              <Image src={addressIcon} alt="address icon" />
              <h1>Address</h1>
              <div className={classes.accent}></div>
              <h2>1900 Meadow Lark Ave</h2>
              <h2>Seattle WA, 98702</h2>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ContactPage;
