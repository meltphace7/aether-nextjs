import React from 'react'
import Image from 'next/image';
import classes from './TeamMember.module.css';

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    image: any;
}

const TeamMember: React.FC<TeamMemberProps> = (props) => {
    return (
      <div className={classes['team-member']}>
        <div className={classes['tm-text']}>
          <h1>{props.name}</h1>
          <h2>{props.role}</h2>
          <p>{props.description}</p>
        </div>
        <div className={classes["tm-im__container"]}>
          <Image src={props.image} alt={props.name} />
        </div>
      </div>
    );
}

export default TeamMember
