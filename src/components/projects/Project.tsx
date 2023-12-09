import React from 'react'
import classes from './Project.module.css'
import Image from 'next/image';

interface ProjectProps {
    name: string;
    description: string;
    image: any;
    link: string;
}

const Project: React.FC<ProjectProps> = (props) => {
    return (
        <a
            target="_blank"
            href={props.link}
            className={classes.project}>
            <div className={classes['img-container']}>
                <Image src={props.image} alt={props.name} />
            </div>
            <div className={classes['text']}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </a>
    )
}

export default Project
