import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import brockImg from "../../../public/imgs/BROCK-DALLMAN_PORTRAIT.jpg";
import classes from "@/styles/About.module.css";

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>TEST CORP - About</title>
        <meta name="description" content="About page for TEST CORP" />
      </Head>
      <div className={classes['about-page']}>
        <h1 className={classes["page-title"]}>About</h1>
        <div className={classes["bio-container"]}>
          <Image
            className={classes["bio-image"]}
            src={brockImg}
            alt="Brock"
            width={500}
            height={900}
          />

          <div className="bio-text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere pariatur omnis illum consequatur aperiam enim possimus laudantium consequuntur, exercitationem, dolore nam velit? Quaerat, laudantium aspernatur id quos, quo officia atque culpa sequi quidem animi nemo vel quasi sint repellat deserunt eum tenetur excepturi itaque! Alias, ea debitis qui ipsum quisquam molestiae, quae sunt a doloremque consequuntur itaque voluptas placeat?
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
