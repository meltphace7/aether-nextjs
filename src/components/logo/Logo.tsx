import React from 'react'
import Image from 'next/image';
import logo from "../../../public/icons/BDLOGO-white.png";
import tietonLogo from "../../../public/icons/tieton_logo.svg";
import classes from './Logo.module.css';

const Logo:React.FC = () => {
    return (
        <div className={classes.logo}>
            <Image src={tietonLogo} alt="company logo" className={classes['logo-icon']} />
            <h1>TIETON</h1>
            <p>Construction</p>
        </div>
    )
}

export default Logo
