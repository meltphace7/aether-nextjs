import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";
import Image from "next/image";
import facebookLogo from "../../../public/icons/logo-facebook.svg";
import instagramLogo from "../../../public/icons/logo-instagram.svg";
import googleLogo from "../../../public/icons/logo-google.svg";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Link href="/">
        <Logo />
      </Link>

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
    </footer>
  );
};

export default Footer;
