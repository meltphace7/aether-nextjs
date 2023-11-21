import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
import Hero from '../components/home/Hero';
import FeatureBox from '../components/home/FeatureBox';
import SplitFeatureBox from '../components/home/SplitFeatureBox';
import FeatureBoxTwo from "../components/home/FeatureBoxTwo";
import FeatureOverlay from "../components/home/FeatureOverlay";
import { useInView } from "react-intersection-observer";
//
import Feature from "../components/home/Feature";
import remodelImg from '../../public/imgs/remodel-2.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Tieton Construction</title>
        <meta name="description" content="Tieton Construction homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <Hero />
          <FeatureBox />
          <SplitFeatureBox />
        <FeatureBoxTwo />
        <FeatureOverlay />
        <Feature
          title="This is what we do"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam consequatur non! Blanditiis sapiente, exercitationem labore sed ipsam earum provident! Quia ullam consectetur atque autem, laudantium ratione asperiores aliquid itaque, ea saepe corrupti necessitatibus."
          buttonText="Learn More"
          path={"/about"}
          imgSrc={remodelImg}
        />
      </main>
    </>
  );
}
