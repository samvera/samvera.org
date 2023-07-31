import Applications from "components/home/Applications";
import BenefitHow from "components/home/BenefitHow";
import CommunityNewsEvents from "components/home/CommunityNewsEvents";
import HeroSVC2023 from "components/home/HeroSVC2023";
import HomeHero from "components/home/Hero";
import HomeLayout from "components/home/Layout";
import Image from "next/image";
import { getSideNav } from "lib/markdown-helpers";

export default function Home({ sideNav }) {
  return (
    <>
      <HomeLayout>
        <HeroSVC2023 />
        <BenefitHow />
        <Applications />
        <CommunityNewsEvents items={sideNav.slice(0, 5)} />
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  const { sideNav } = getSideNav(`markdown/news-and-events`);

  return {
    props: { sideNav },
  };
}
