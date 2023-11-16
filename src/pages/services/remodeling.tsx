import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Head from "next/head";
import Image from "next/image";
import remodelOne from "../../../public/imgs/remodel.jpg";
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
      <title>TEST CORP - Demolition Service</title>
        <meta
          name="description"
          content="Excavation service page for TEST CORP"
        />
      </Head>
    <div className={classes["service-page"]}>
      <header
        className={`${classes["service-hero"]} ${classes["remodel-hero"]}`}
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          pariatur nihil recusandae voluptates soluta rem, id mollitia quisquam,
          quam cum dolores assumenda ullam a itaque autem dolore fugiat
          temporibus ipsam ipsa suscipit laudantium laborum nisi! Iure
          repudiandae, quas, suscipit itaque optio nihil eaque ipsum possimus,
          sunt dolor voluptates tenetur quisquam explicabo magni vel veniam.
          Aliquam delectus fuga voluptas dolorum asperiores. Repudiandae,
          praesentium maiores! Quidem quis fugit ipsam beatae assumenda sequi a,
          voluptatum veniam dignissimos repellendus non alias laboriosam ad
          sint.
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
