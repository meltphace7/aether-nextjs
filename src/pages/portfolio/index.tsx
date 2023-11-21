import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Portfolio.module.css";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
// GALLERY ONE
import comOne from "../../../public/imgs/gallery-3/commercial-1.jpg";
import comTwo from "../../../public/imgs/gallery-3/commercial-2.jpg";
import comThree from "../../../public/imgs/gallery-3/commercial-3.jpg";
import comFour from "../../../public/imgs/gallery-3/commercial-4.jpg";
import comFive from "../../../public/imgs/gallery-3/commercial-5.jpg";
import comSix from "../../../public/imgs/gallery-3/commercial-6.jpg";
import comSeven from "../../../public/imgs/gallery-3/commercial-7.jpg";
import comEight from "../../../public/imgs/gallery-3/commercial-8.jpg";
import comNine from "../../../public/imgs/gallery-3/commercial-9.jpg";
// GALLERY TWO
import homeOne from "../../../public/imgs/gallery-2/home-1.jpg";
import homeTwo from "../../../public/imgs/gallery-2/home-2.jpg";
import homeThree from "../../../public/imgs/gallery-2/home-3.jpg";
import homeFour from "../../../public/imgs/gallery-2/home-4.jpg";
import homeFive from "../../../public/imgs/gallery-2/home-5.jpg";
import homeSix from "../../../public/imgs/gallery-2/home-6.jpg";
import homeSeven from "../../../public/imgs/gallery-2/home-7.jpg";
import homeEight from "../../../public/imgs/gallery-2/home-8.jpg";
import homeNine from "../../../public/imgs/gallery-2/home-9.jpg";

import Slider from "../../components/gallery/Slider";
// GALLERY THREE
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


const remodelImages = [
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
  remodelTwelve,
];

const homeImages = [
homeOne,
  homeTwo,
  homeThree,
  homeFour,
  homeFive,
  homeSix,
  homeSeven,
  homeEight,
  homeNine,
  
];

const commercialImages = [
  comOne,
  comTwo,
  comThree,
  comFour,
  comFive,
  comSix,
  comSeven,
  comEight,
  comNine,
];

const PortfolioPage: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const [sliderVisible, setSliderVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [galleryImages, setGalleryImages] =
    useState<StaticImageData[]>(remodelImages);

  const toggleSliderVisibilityHandler = function () {
    setSliderVisible((prevstate) => !prevstate);
  };

  const imageClickHandler = function (event: React.MouseEvent<HTMLDivElement>) {
    const image = event.currentTarget.dataset!.image || "";
    const gallery = event.currentTarget.dataset!.gallery || "";
    console.log("gallery", gallery);

    if (gallery === "1") {
      setGalleryImages(remodelImages);
    }
    if (gallery === "2") {
      setGalleryImages(homeImages);
    }
    if (gallery === "3") {
      setGalleryImages(commercialImages);
    }
    console.log(image);

    setSelectedImage(image);
    toggleSliderVisibilityHandler();
  };

  // Parallax effect for Header
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
        <title>Portfolio | Tieton Construction</title>
        <meta
          name="description"
          content="Demolition service page for TEST CORP"
        />
      </Head>
      <div className={classes["portfolio-page"]}>
        <header
          className={classes["portfolio-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Portfolio</h1>
              <h2>Check Out Our Work</h2>
            </div>
          </div>
        </header>
        <section className={classes["portfolio-section"]}>
          <div className={classes["gallery-container"]}>
            <h1 className={classes["gallery-h1"]}>Commercial</h1>
            <div className={classes["grid-gallery"]}>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="1"
                  src={comOne}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="2"
                  src={comTwo}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="3"
                  src={comThree}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="4"
                  src={comFour}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="5"
                  src={comFive}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="6"
                  src={comSix}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="7"
                  src={comSeven}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="8"
                  src={comEight}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="3"
                  data-image="9"
                  src={comNine}
                  alt="remodel"
                />
              </div>
            </div>
            <Link href="/services/commercial-construction" className="button">
              Learn More About Commercial
            </Link>
          </div>
          <div className={classes["gallery-container"]}>
            <h1 className={classes["gallery-h1"]}>New Homes</h1>
            <div className={classes["grid-gallery"]}>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="1"
                  src={homeOne}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="2"
                  src={homeTwo}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="3"
                  src={homeThree}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="4"
                  src={homeFour}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="5"
                  src={homeFive}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="6"
                  src={homeSix}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="7"
                  src={homeSeven}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="8"
                  src={homeEight}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="2"
                  data-image="9"
                  src={homeNine}
                  alt="remodel"
                />
              </div>
            </div>
            <Link href="/services/residential-construction" className="button">
              Learn More About New Homes
            </Link>
          </div>
          <div className={classes["gallery-container"]}>
            <h1 className={classes["gallery-h1"]}>Remodels</h1>
            <div className={classes["grid-gallery"]}>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="1"
                  src={remodelOne}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="2"
                  src={remodelTwo}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="3"
                  src={remodelThree}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="4"
                  src={remodelFour}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="5"
                  src={remodelFive}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="6"
                  src={remodelSix}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="7"
                  src={remodelSeven}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="8"
                  src={remodelEight}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="9"
                  src={remodelNine}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="10"
                  src={remodelTen}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="11"
                  src={remodelEleven}
                  alt="remodel"
                />
              </div>
              <div className={classes["grid-item"]}>
                <Image
                  onClick={imageClickHandler}
                  data-gallery="1"
                  data-image="12"
                  src={remodelTwelve}
                  alt="remodel"
                />
              </div>
            </div>
            <Link href="/services/remodeling" className="button">
              Learn More About Remodels
            </Link>
          </div>

          {sliderVisible && (
            <Slider
              images={galleryImages}
              close={toggleSliderVisibilityHandler}
              image={selectedImage}
            />
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;
