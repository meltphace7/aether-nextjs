import React from 'react'
import classes from './SplitFeatureBox.module.css';
import Link from 'next/link';
import Image from 'next/image';
import cityLights from '../../../public/imgs/city-lights-vert.jpg';

const SplitFeatureBox:React.FC = () => {
    return (
        <section className={classes['split-feature-box']}>
            <div className={classes['split-feature-box__text-container']}>
                <h1>Our Roots Run Deep</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque culpa dicta quia aperiam ipsa cupiditate aut fuga aliquam eius aspernatur, fugiat consequatur praesentium necessitatibus ipsum non, sit quaerat minus veritatis.
                </p>
                <Link href="/about" className="button">About Us</Link>
            </div>
            <div className={classes["split-feature-box__img-container"]}>
                <Image src={cityLights} alt="City lights" /> 
            </div>
        </section>
    )
}

export default SplitFeatureBox
