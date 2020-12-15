import Head from "next/head";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Indexed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Pricing />
    </div>
  );
}
