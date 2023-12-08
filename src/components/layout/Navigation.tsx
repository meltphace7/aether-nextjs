import classes from './Navigation.module.css';
import React, { useState, useEffect } from 'react'
import Logo from '../logo/Logo';
import Link from 'next/link';
import Image from 'next/image';
import arrowDown from "../../../public/icons/chevron-down-outline.svg";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
   const pathname = usePathname();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

    const handleCheck = () => {
      setIsChecked((prevState) => !prevState);
    };
  
    const closeMenuHandler = () => {
      setIsChecked((prevState) => !prevState);
    };
  
  const serviceToggleHandler = function () {
    setServicesOpen(prevstate => !prevstate);
  }

  
  return (
    <nav className={classes["nav-bar"]}>
      <Link href="/" className={classes["logo-container"]}>
        <Logo />
      </Link>

      <div className={classes["nav-container"]}>
        <Link className={classes.contact} href="#">
          CONTACT
        </Link>

        <div className={classes.nav}>
          <input
            type="checkbox"
            className={classes["nav__checkbox"]}
            id="navi-toggle"
            onChange={handleCheck}
            checked={isChecked}
          />
          <label htmlFor="navi-toggle" className={classes["nav__button"]}>
            <span className={classes["nav__icon"]}>&nbsp;</span>
          </label>
          <div
            className={classes["nav__background"]}
            onClick={closeMenuHandler}
          >
            &nbsp;
          </div>
          <nav className={classes["nav__nav"]}>
            <ul className={classes["nav__list"]}>
              <li className={classes["nav__item"]}>
                <Link
                  onClick={closeMenuHandler}
                  href="/"
                  className={
                    pathname === "/"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                >
                  <span>01</span>&nbsp;HOME
                </Link>
              </li>
              <li className={`${classes["nav__item"]} ${classes["dropdown"]}`}>
                <div
                  onClick={serviceToggleHandler}
                  // href="/services"
                  className={
                    pathname === "/services"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                >
                  <div className={classes["dropdown-btn"]}>
                    <span>02</span>&nbsp;<p>SERVICES</p>
                    <Image
                      className={
                        servicesOpen
                          ? `${classes["arrow-up"]}`
                          : `${classes["arrow-down"]}`
                      }
                      src={arrowDown}
                      alt="arrow down"
                    />
                  </div>
                </div>
                <ul
                  className={`${classes["sub-menu"]} ${
                    !servicesOpen
                      ? `${classes["animate-out"]}`
                      : `${classes["animate-in"]}`
                  }`}
                >
                  <li className={classes["nav__item"]}>
                    <Link
                      onClick={closeMenuHandler}
                      href="/services"
                      className={
                        pathname === "/services"
                          ? `${classes.active} ${classes["nav__link"]}`
                          : classes["nav__link"]
                      }
                    >
                      &mdash;&nbsp;ALL SERVICES
                    </Link>
                  </li>
                  <li className={classes["nav__item"]}>
                    <Link
                      onClick={closeMenuHandler}
                      href="/services/branding"
                      className={
                        pathname === "/services/branding"
                          ? `${classes.active} ${classes["nav__link"]}`
                          : classes["nav__link"]
                      }
                    >
                      &mdash;&nbsp;BRANDING
                    </Link>
                  </li>
                  <li className={classes["nav__item"]}>
                    <Link
                      onClick={closeMenuHandler}
                      href="/services/design"
                      className={
                        pathname === "/services/design"
                          ? `${classes.active} ${classes["nav__link"]}`
                          : classes["nav__link"]
                      }
                    >
                      &mdash;&nbsp;DESIGN
                    </Link>
                  </li>
                  <li className={classes["nav__item"]}>
                    <Link
                      onClick={closeMenuHandler}
                      href="/services/development"
                      className={
                        pathname === "/services/development"
                          ? `${classes.active} ${classes["nav__link"]}`
                          : classes["nav__link"]
                      }
                    >
                      &mdash;&nbsp;DEVELOPMENT
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={classes["nav__item"]}>
                <Link
                  onClick={closeMenuHandler}
                  href="/about"
                  className={
                    pathname === "/about"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                >
                  <span>03</span>&nbsp;ABOUT
                </Link>
              </li>

              <li className={classes["nav__item"]}>
                <Link
                  onClick={closeMenuHandler}
                  className={
                    pathname === "/portfolio"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                  href="/portfolio"
                >
                  <span>04</span>&nbsp;PORTFOLIO
                </Link>
              </li>

              <li className={classes["nav__item"]}>
                <Link
                  onClick={closeMenuHandler}
                  href="/faq"
                  className={
                    pathname === "/faq"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                >
                  <span>05</span>&nbsp;FAQ
                </Link>
              </li>

              <li className={classes["nav__item"]}>
                <Link
                  onClick={closeMenuHandler}
                  href="/contact"
                  className={
                    pathname === "/contact"
                      ? `${classes.active} ${classes["nav__link"]}`
                      : classes["nav__link"]
                  }
                >
                  <span>06</span>&nbsp;CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navigation
