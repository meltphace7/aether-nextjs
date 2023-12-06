
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import FeatureBox from "../components/home/FeatureBox";
import TripleFeature from '../components/home/TripleFeature';
import EclipseFeature from "../components/home/Eclipse";
import EclipseTwo from "../components/home/EclipseTwo";
import ParallaxText from '../components/home/ParallaxText';
import FeatureBoxTwo from "../components/home/FeatureBoxTwo";
import FeatureOverlay from "../components/home/FeatureOverlay";
import CircleFeature from '../components/home/CircleFeature';
//

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>AETHER DESIGN</title>
        <meta name="description" content="AETHER DESIGN | homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <Hero />

        <Mission />
        <CircleFeature />
        <ParallaxText />
        <TripleFeature />
        <FeatureBoxTwo />
        <FeatureBox />
        <EclipseFeature />
        <EclipseTwo />
      </main>
    </>
  );
}
