import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";
import Image from "next/image";
import facebookLogo from "../../../public/icons/logo-facebook.svg";
import instagramLogo from "../../../public/icons/logo-instagram.svg";
import googleLogo from "../../../public/icons/logo-google.svg";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes["footer-bottom-row"]}>
        <div className={classes["footer-text"]}>
          <p>&copy; {`${year}  AETHER All Right Reserved`}</p>
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
