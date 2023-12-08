import React, { Fragment, useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Head from "next/head";
import Image from "next/image";
import Slider from "../../components/gallery/Slider";

const BrandingPage: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Image Slider
  const [sliderVisible, setSliderVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const toggleSliderVisibilityHandler = function () {
    setSliderVisible((prevstate) => !prevstate);
  };

  const imageClickHandler = function (event: React.MouseEvent<HTMLDivElement>) {
    const image = event.currentTarget.dataset!.image || "";

    setSelectedImage(image);
    toggleSliderVisibilityHandler();
  };
  return (
    <Fragment>
      <Head>
        <title>Brainding | Aether</title>
        <meta
          name="description"
          content="Branding service page for Aether"
        />
      </Head>
      <div className={classes["service-page"]}>
        <header
          className={`${classes["service-hero"]} ${classes["branding-hero"]}`}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["service-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Branding</h1>
              <h2>Beautiful Transformations</h2>
            </div>
          </div>
        </header>
        <section className={classes["service-section"]}>
          <h1>Rejuvante Your Home</h1>
          <p>
            At Tieton Construction, our home remodeling service turns your
            vision into reality, transcending the limits of possibility. Whether
            it&apos;s a rejuvenated kitchen, a luxurious bathroom, or a complete
            home transformation, our skilled team excels at making dreams come
            to life. With a commitment to quality and attention to detail, we
            ensure each remodel enhances the functionality, beauty, and overall
            value of your home. Experience the profound impact of our remodeling
            expertise as we reimagine and elevate your living spaces, creating a
            home that reflects your unique lifestyle and aspirations.
          </p>
          {/* <div className={classes["service-section__imgs"]}>
            <div className={classes["service-section__img-container"]}>
              <Image
                src={remodelOne}
                alt="Nice remodeled kitchen"
                data-image="1"
                onClick={imageClickHandler}
              />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image
                src={remodelTwo}
                alt="Nice remodeled bathroom"
                data-image="2"
                onClick={imageClickHandler}
              />
            </div>
            <div className={classes["service-section__img-container"]}>
              <Image
                src={remodelThree}
                alt="Nice remodeled kitchen"
                data-image="3"
                onClick={imageClickHandler}
              />
            </div>
          </div> */}
        </section>
    
      </div>
    </Fragment>
  );
};

export default BrandingPage;
