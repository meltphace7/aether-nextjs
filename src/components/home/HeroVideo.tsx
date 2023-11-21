import React from 'react'
import Link from 'next/link'
import classes from './HeroVideo.module.css'

const HeroVideo:React.FC = () => {
    return (
      <header className={classes["video-header"]}>
        <video
          src={require("../../../public/videos/construction-video(720p).mp4")}
          autoPlay
          muted
          loop
          className={classes["bg-video"]}
        />
        <div className={classes["bg-video__overlay"]}>
          <div className={classes["hero-text"]}>
            <h1>
              Build <span>Today</span>
            </h1>
            <h2>The Future is Now</h2>
            <Link href="/contact" className="button">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    );
}

export default HeroVideo
