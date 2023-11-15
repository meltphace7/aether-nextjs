import React, { Fragment } from 'react'
import Head from 'next/head';
import classes from "@/styles/FAQ.module.css";

const Faq:React.FC = () => {
    return (
      <Fragment>
        <Head>
          <title>TEST CORP - FAQ</title>
          <meta name="description" content="Frequently Asked Questions page for TEST CORP" />
        </Head>
        <div className={classes["faq-page"]}>
          <h1 className={classes["page-title"]}>FAQ</h1>
        </div>
      </Fragment>
    );
}

export default Faq;
