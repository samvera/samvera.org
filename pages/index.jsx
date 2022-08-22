import Applications from "components/home/Applications";
import BenefitHow from "components/home/BenefitHow";
import Head from "next/head";
import HomeLayout from "components/home/Layout";
import HomeHero from "components/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Samvera - a vibrant and welcoming community developing repository
          software tools
        </title>
        <meta name="description" content="Samvera is cool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HomeHero />
        <BenefitHow />
        <Applications />
      </HomeLayout>
    </>
  );
}
