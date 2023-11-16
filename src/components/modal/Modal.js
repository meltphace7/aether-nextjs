import classes from "./Modal.module.css";
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
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
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  ) : null;
};

export default Modal;
