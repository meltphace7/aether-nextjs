import React, { Fragment } from "react";
import Head from "next/head";
import classes from "@/styles/Contact.module.css";

const Contact: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>TEST CORP - Contact</title>
        <meta name="description" content="Contact page for TEST CORP" />
      </Head>
      <div className={classes['contact-page']}>
        <h1 className={classes["page-title"]}>Contact</h1>
      </div>
    </Fragment>
  );
};

export default Contact;
