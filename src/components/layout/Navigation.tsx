import React from "react";
import Link from "next/link";
import classes from "./Navigation.module.css";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import downIcon from "../../../public/icons/chevron-down-outline.svg";

const Navigation: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className={classes.navigation}>
      <Link href="/">
        <Logo />
      </Link>
      <ul className={classes['nav-menu']}>
        <li>
          <Link href="/" className={pathname === "/" ? classes.active : ""}>
            Home
          </Link>
        </li>
        <li className={classes.dropdown}>
          <Link
            href="/services"
            className={pathname === "/services" ? classes.active : ""}
          >
            Services
          </Link>
          <Image src={downIcon} alt="down icon" />
          <ul className={classes["dropdown-menu"]}>
            <li>
              <Link
                href="/services/service-1"
                className={
                  pathname === "/services/service-1" ? classes.active : ""
                }
              >
                Service One
              </Link>
            </li>
            <li>
              <Link
                href="/services/service-2"
                className={
                  pathname === "/services/service-2" ? classes.active : ""
                }
              >
                Service Two
              </Link>
            </li>
            <li>
              <Link
                href="/services/service-3"
                className={
                  pathname === "/services/service-3" ? classes.active : ""
                }
              >
                Service Three
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? classes.active : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className={pathname === "/faq" ? classes.active : ""}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? classes.active : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;