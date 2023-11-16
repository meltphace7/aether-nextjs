import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Portfolio.module.css";
import Head from "next/head";
import Image from "next/image";
import remodelOne from "../../../public/imgs/gallery/remodel.jpg";
import remodelTwo from "../../../public/imgs/gallery/remodel-2.jpg";
import remodelThree from "../../../public/imgs/gallery/remodel-3.jpg";
import remodelFour from "../../../public/imgs/gallery/remodel-4.jpg";
import remodelFive from "../../../public/imgs/gallery/remodel-5.jpg";
import remodelSix from "../../../public/imgs/gallery/remodel-6.jpg";
import remodelSeven from "../../../public/imgs/gallery/remodel-7.jpg";
import remodelEight from "../../../public/imgs/gallery/remodel-8.jpg";
import remodelNine from "../../../public/imgs/gallery/remodel-9.jpg";
import remodelTen from "../../../public/imgs/gallery/remodel-10.jpg";
import remodelEleven from "../../../public/imgs/gallery/remodel-11.jpg";
import remodelTwelve from "../../../public/imgs/gallery/remodel-12.jpg";

import Slider from '../../components/gallery/Slider';

const sliderImages = [
    remodelOne,
    remodelTwo,
    remodelThree,
    remodelFour,
    remodelFive,
];

const PortfolioPage: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(true);

    const toggleModalHandler = function () {
        setModalVisible(prevstate => !prevstate);
    }

  return (
    <Fragment>
      <Head>
        <title>TEST CORP - Demolition Service</title>
        <meta
          name="description"
          content="Demolition service page for TEST CORP"
        />
      </Head>
      <div className={classes["portfolio-page"]}>
        <header className={classes["portfolio-hero"]}>
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Portfolio</h1>
              <h2>Check Out Our Work</h2>
            </div>
          </div>
        </header>
        <section className={classes["portfolio-section"]}>
          <div className={classes["grid-gallery"]}>
            <div className={classes["grid-item"]}>
              <Image src={remodelOne} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelTwo} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelThree} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelFour} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelFive} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelSix} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelSeven} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelEight} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelNine} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelTen} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelEleven} alt="remodel" />
            </div>
            <div className={classes["grid-item"]}>
              <Image src={remodelTwelve} alt="remodel" />
            </div>
          </div>

                  <button onClick={toggleModalHandler} >SHOW Slider</button>
         {modalVisible && <Slider images={sliderImages} />}
          {/* <div className={classes["gallery-slider"]}>
            <div className={classes["slide"]}>
              <Image src={remodelOne} alt="remodel" />
            </div>
            <div className={classes["slide"]}>
              <Image src={remodelTwo} alt="remodel" />
            </div>
            <div className={classes["slide"]}>
              <Image src={remodelThree} alt="remodel" />
            </div>
          </div> */}
        </section>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;
