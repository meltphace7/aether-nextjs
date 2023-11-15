import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>TEST CORP Official Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Brock Dallman Art Official Site" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
