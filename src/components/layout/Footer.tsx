import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";
import Image from "next/image";
import hoursIcon from "../../../public/icons/time-outline.svg";
import phoneIcon from "../../../public/icons/call-outline.svg";
import emailIcon from "../../../public/icons/mail-outline.svg";
import addressIcon from "../../../public/icons/location-outline.svg";
import facebookLogo from "../../../public/icons/logo-facebook.svg";
import instagramLogo from "../../../public/icons/logo-instagram.svg";
import googleLogo from "../../../public/icons/logo-google.svg";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes["footer-top-row"]}>
        <div className={classes["contact"]}>
          <Image src={phoneIcon} alt="Phone icon" />
          <p>(503) 710-2781</p>
        </div>
        <div className={classes["contact"]}>
          <Image src={emailIcon} alt="Phone icon" />
          <p>brock.dallman@gmail.com</p>
        </div>
        <div className={classes["contact"]}>
          <Image src={addressIcon} alt="Phone icon" />
          <p>1900 Meadow Lark Ave</p>
          <p> Yakima WA, 98902</p>
        </div>
        <div className={classes["contact"]}>
          <Image src={hoursIcon} alt="Phone icon" />
          <p>Monday - Friday</p>
          <p> 7:30AM - 5:30PM</p>
        </div>
      </div> */}
      <div className={classes["footer-bottom-row"]}>
        <div className={classes["footer-text"]}>
          <p>&copy; 2023 AETHER All Right Reserved</p>
          <p>Website by Brock Dallman</p>
        </div>

        <div className={classes["logo-container"]}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={classes["link-list"]}>
          <a href="#">
            <Image
              src={facebookLogo}
              alt="facebook logo"
              className={classes["link-logo"]}
            />
          </a>
          <a href="#">
            <Image
              src={instagramLogo}
              alt="Instagram logo"
              className={classes["link-logo"]}
            />
          </a>
          <a href="#">
            <Image
              src={googleLogo}
              alt="Google logo"
              className={classes["link-logo"]}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
