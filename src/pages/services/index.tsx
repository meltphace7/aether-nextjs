import React, { Fragment } from "react";
import Head from "next/head";
import classes from "@/styles/Services.module.css";

const Services: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>TEST CORP - Services</title>
        <meta name="description" content="Services page for TEST CORP" />
      </Head>
      <div className={classes["services-page"]}>
        <h1 className={classes["page-title"]}>Services</h1>
      </div>
    </Fragment>
  );
};

export default Services;
