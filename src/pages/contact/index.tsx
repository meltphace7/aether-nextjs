import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Contact.module.css";
import Image from 'next/image';
import { useForm } from "@formspree/react";
import ModalMessage from '../../components/modal/ModalMessage';
import hoursIcon from '../../../public/icons/time-outline.svg';
import phoneIcon from "../../../public/icons/call-outline-white.svg";
import emailIcon from "../../../public/icons/mail-outline-white.svg";
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

    const [state, handleSubmit] = useForm("meqweoep");
    const [modalIsShown, setModalIsShown] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
      if (state.succeeded) {
        setMessage("Message Sent!");
        setModalIsShown(true);
      }
    }, [state.succeeded]);

    const closeModalHandler = () => {
      setModalIsShown(false);
    };
  return (
    <Fragment>
      <Head>
        <title>Contact | AETHER DESIGN</title>
        <meta
          name="description"
          content="Contact page for Tieton Construction"
        />
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
                <Image src={phoneIcon} alt="phone icon" />
              <h2>(503)-710-2783</h2>
            </div>

            <div className={classes["contact-container"]}>
                <Image src={emailIcon} alt="email icon" />
              <h2>brock.dallman@gmail.com</h2>
            </div>
          </div>
          <h1 className={classes['contact-form__h1']}>SEND A MESSAGE</h1>
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            id="contact-form"
          >
            <div className={classes.form__row}>
              <div className={classes.form__group__top}>
                <label htmlFor="firstName">Your Name</label>
                <input
                  className={classes["form__input--name"]}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className={classes.form__group__top}>
                <label htmlFor="email">Your Email</label>
                <input
                  className={classes["form__input--email"]}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className={classes.form__group}>
              <label htmlFor="subject">Subject</label>
              <input
                className={classes["form__input--subject"]}
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className={classes.form__group}>
              <label htmlFor="message">Message</label>
              <textarea
                className={classes.form__message}
                name="message"
                id="message"
                required
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          {modalIsShown && (
            <ModalMessage onCloseModal={closeModalHandler} message={message} />
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default ContactPage;
