import React from 'react'
import Image from 'next/image';
import logo from "../../../public/icons/BDLOGO-white.png";
import classes from './Logo.module.css';

const Logo:React.FC = () => {
    return (
        <div className={classes.logo}>
            <Image src={logo} alt="company logo" className={classes['logo-icon']} />
            <h1>Test Corp</h1>
        </div>
    )
}

export default Logo
