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

import Slider from "../../components/gallery/Slider";

const sliderImages = [
  remodelOne,
  remodelTwo,
  remodelThree,
  remodelFour,
  remodelFive,
  remodelSix,
  remodelSeven,
  remodelEight,
  remodelNine,
    remodelTen,
    remodelEleven,
  remodelTwelve
];

const PortfolioPage: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('')

  const toggleModalHandler = function () {
    setModalVisible((prevstate) => !prevstate);
  };
    
    const imageClickHandler = function (event: React.MouseEvent<HTMLDivElement>) {
        const image = event.currentTarget.dataset!.image || '';
        console.log(image);
        setSelectedImage(image);
        toggleModalHandler();
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
              <Image
                onClick={imageClickHandler}
                data-image="1"
                src={remodelOne}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="2"
                src={remodelTwo}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="3"
                src={remodelThree}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="4"
                src={remodelFour}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="5"
                src={remodelFive}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="6"
                src={remodelSix}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="7"
                src={remodelSeven}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="8"
                src={remodelEight}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="9"
                src={remodelNine}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="10"
                src={remodelTen}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="11"
                src={remodelEleven}
                alt="remodel"
              />
            </div>
            <div className={classes["grid-item"]}>
              <Image
                onClick={imageClickHandler}
                data-image="12"
                src={remodelTwelve}
                alt="remodel"
              />
            </div>
          </div>
          {modalVisible && (
            <Slider
              images={sliderImages}
              close={toggleModalHandler}
              image={selectedImage}
            />
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;
