import classes from "./Slider.module.css";
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import prevIcon from "../../../public/icons/chevron-back-outline.svg";
import nextIcon from "../../../public/icons/chevron-forward-outline.svg";

import remodel from '../../../public/imgs/gallery/remodel-2.jpg'

//<Image src={props.images[curSlide]} alt="sdsd" width={300} height={300} />;

const Backdrop = (props) => {

  return <div className={classes.backdrop} />;
};

const SliderOverlay = (props) => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = props.images.length - 1;

  useEffect(() => {
    console.log(props)
    const slide = +props.image - 1;
    console.log('INCOMING SLIDE', slide)
    setCurSlide(slide)
  }, [props])

  const nextSlideHandler = function () {
    if (curSlide === maxSlide) {
      setCurSlide(0);
      
    } else {
      setCurSlide((prevstate) => prevstate + 1);
    }
  }

  const prevSlideHandler = function () {
    if (curSlide === 0) {
       setCurSlide(maxSlide);
    } else {
     setCurSlide((prevstate) => prevstate - 1);
    }
  };

  const closeSliderHandler = function () {
    props.close();
  }

  return (
    <div className={classes.slider}>
      <div className={classes.slide}>
        {props.images && (
          <Image
            src={props.images[curSlide]}
            alt="sdsd"
            width={1200}
            height={800}
          />
        )}
      </div>
      <div className={classes["slider-controls"]}>
        <button onClick={prevSlideHandler}>
          <Image src={prevIcon} alt="previous icon" />
        </button>

        <button onClick={nextSlideHandler}>
          <Image src={nextIcon} alt="next icon" />
        </button>
      </div>
      <div className={classes["slide-count"]}>
        <p>{`${curSlide + 1} / ${maxSlide + 1}`}</p>
        <button
          onClick={closeSliderHandler}
          className={classes["close-button"]}
        >
          X
        </button>
      </div>
    </div>
  );
};

const Slider = (props) => {
  const [domReady, setDomReady] = useState(false);
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    setPortalElement(document.getElementById("overlay"));
    setDomReady(true);
  }, []);

  return domReady ? (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <SliderOverlay images={props.images} close={props.close} image={props.image} />,
        portalElement
      )}
    </Fragment>
  ) : null;
};

export default Slider;
