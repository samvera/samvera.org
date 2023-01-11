import Applications from "components/home/Applications";
import BenefitHow from "components/home/BenefitHow";
import CommunityNewsEvents from "components/home/CommunityNewsEvents";
import Head from "next/head";
import HomeLayout from "components/home/Layout";
import HomeHero from "components/home/Hero";
import { getSideNav } from "lib/markdown-helpers";
import { prefix } from "prefix";

export default function Home({ sideNav }) {
  return (
    <>
      <Head>
        <title>
          Samvera - a vibrant and welcoming community developing repository
          software tools
        </title>
        <meta name="description" content="Samvera is cool" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <HomeLayout>
        <HomeHero />
        <BenefitHow />
        <Applications />
        <CommunityNewsEvents items={sideNav.slice(0, 5)} />
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  const { sideNav } = getSideNav(`markdown/news`);

  return {
    props: { sideNav },
  };
}
