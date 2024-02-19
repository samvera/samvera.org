import BannerContact from "components/BannerContact";
import BannerLicense from "components/BannerLicense";
import BannerPartners from "components/BannerPartners";
import Footer from "components/layout/Footer";
import Head from "next/head";
import HeaderNew from "components/layout/HeaderNew";
import React from "react";
import { prefix } from "prefix";

const description =
  "Samvera™ is a vibrant and welcoming community of information and technology professionals who share challenges, build expertise, and create sustainable, best-in-class solutions, making the world’s digital collections accessible now and into the future. Samvera’s suite of repository software tools offers flexible and rich user interfaces tailored to distinct content types on top of a robust back end – giving adopters the best of both worlds.";

const title =
  "Samvera - a vibrant and welcoming community developing repository software tools";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-white text-samGrey font-openSans">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <HeaderNew />
      <main>
        {children}
        <BannerPartners />
        <BannerLicense />
      </main>
      <Footer />
    </div>
  );
}
