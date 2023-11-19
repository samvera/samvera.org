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
        <meta name="theme-color" content="#121212" />
        <link rel="icon" href={`${prefix}/images/favicon.ico`} />
        <link rel="canonical" href="https://samvera.org/" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://samvera.org/" />
        <meta property="og:site_name" content="Samvera" />
        <meta name="twitter:card" content="summary_large_image" />
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
