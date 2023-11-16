import classes from "./Slider.module.css";
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import prevIcon from "../../../public/icons/chevron-back-outline.svg";
import nextIcon from "../../../public/icons/chevron-forward-outline.svg";

import remodel from '../../../public/imgs/gallery/remodel-2.jpg'

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const SliderOverlay = (props) => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = props.images.length - 1;

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

  console.log(props.images)
  return (
    <div className={classes.slider}>
      <button onClick={prevSlideHandler}>
        <Image src={prevIcon} alt="previous icon" />
      </button>
      <Image src={props.images[curSlide]} alt="sdsd" width={300} height={300} />
      <button onClick={nextSlideHandler}>
        <Image src={nextIcon} alt="next icon" />
      </button>
      <div className={classes['slide-count']}>{`${curSlide + 1} / ${maxSlide + 1}`}</div>

      <div className={classes['slider-controls']}></div>
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
        <SliderOverlay images={props.images} />,
        portalElement
      )}
    </Fragment>
  ) : null;
};

export default Slider;
