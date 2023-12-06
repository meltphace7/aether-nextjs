import React from 'react'
import Image from 'next/image';
import aether from "../../../public/icons/aether_logo_white.svg";
import classes from './Logo.module.css';

const Logo:React.FC = () => {
    return (
        <div className={classes.logo}>
            <Image src={aether} alt="aether company logo" className={classes['logo-icon']} />
        </div>
    )
}

export default Logo
