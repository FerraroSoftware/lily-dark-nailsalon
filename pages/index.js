import Head from "next/head";
import BestNail from "../components/BestNail";
import Previewservices from "../components/Previewservices";
import Hero from "../components/Hero";
import Nailart from "../components/Nailart";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flexi Nail Spa</title>
        <meta
          name="description"
          content="Indulge in the ultimate pampering experience at Flexi Nail Spa in Orlando. Our luxurious nail services, performed by skilled technicians, will leave you feeling rejuvenated and relaxed. We use only the best products and techniques to ensure your satisfaction. Flexible appointment times available."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero></Hero>
      <BestNail></BestNail>
      <Previewservices></Previewservices>
      <Nailart></Nailart>
      <Popular></Popular>
    </>
  );
}
