import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import brockImg from "../../../public/imgs/BROCK-DALLMAN_PORTRAIT.jpg";
import classes from "@/styles/About.module.css";
import Hero from '../../components/about/Hero';
import team from '../../../public/imgs/team-members.jpg';

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Tieton Construction</title>
        <meta name="description" content="About page for Tieton Construction" />
      </Head>
      <div className={classes["about-page"]}>
        <Hero />
        <section className={classes["about-section"]}>
          <h1>Our Dedication Runs Deep</h1>
          <div className={classes.accent}></div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eum ullam
            doloremque vitae ea quas molestiae soluta nemo eaque adipisci,
            repellendus voluptatum quam quos, quidem consequatur. Tempora autem
            eos et corporis! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quam maxime quis exercitationem facilis autem facere, alias,
            commodi sequi dignissimos cumque obcaecati modi nesciunt quasi,
            consequatur quas. Veniam voluptas sapiente mollitia.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eum ullam
            doloremque vitae ea quas molestiae soluta nemo eaque adipisci,
            repellendus voluptatum quam quos, quidem consequatur. Tempora autem
            eos et corporis! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quam maxime quis exercitationem facilis autem facere, alias,
            commodi sequi dignissimos cumque obcaecati modi nesciunt quasi,
            consequatur quas. Veniam voluptas sapiente mollitia.
          </p>
          <div className={classes["about-image__overlay"]}>
            <h2>
              We Get Things <span>Done.</span>
            </h2>
          </div>
          <div className={classes["team-section"]}>
            <h1>Our Team</h1>
            <div className={classes.accent}></div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Ipsum suscipit
              unde blanditiis sint hic necessitatibus natus, totam eos in
              eligendi quas ex illum vero impedit quasi beatae! Quibusdam
              expedita laboriosam facere delectus doloremque dolores corporis
              ullam nam officiis similique rerum eum, natus eveniet quisquam
              ratione dignissimos, commodi voluptatem, qui dicta quidem?
              Inventore esse dolor similique exercitationem laudantium. Ipsam
              obcaecati tempore, magni, vel eligendi perferendis sint
              dignissimos cumque praesentium nobis assumenda aliquam deserunt
              quisquam quas pariatur. Dolorem odio aliquid nemo architecto
              incidunt, rerum temporibus illo ducimus unde repellat cupiditate
              quis obcaecati atque modi consectetur ipsam quod cumque distinctio
              quidem iusto nulla.
            </p>
            <Image src={team} alt="team" className={classes['team-img']} />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
