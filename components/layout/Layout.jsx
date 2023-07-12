import BannerContact from "../BannerContact";
import BannerLicense from "../BannerLicense";
import BannerPartners from "../BannerPartners";
import Footer from "./Footer";
import Head from "next/head";
import OuterWrapper from "./OuterWrapper";
import React from "react";
import SidebarLinks from "../sidebar/Links";
import { prefix } from "prefix";
import HeaderNew from "./HeaderNew";

const description =
  "Samvera™ is a vibrant and welcoming community of information and technology professionals who share challenges, build expertise, and create sustainable, best-in-class solutions, making the world’s digital collections accessible now and into the future. Samvera’s suite of repository software tools offers flexible and rich user interfaces tailored to distinct content types on top of a robust back end – giving adopters the best of both worlds.";

export default function Layout({ children, title }) {
  return (
    <div className="font-openSans text-samGreyDark">
      <Head>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#121212" />
          <link rel="icon" href={`${prefix}/images/favicon.ico`} />
          <link rel="canonical" href="https://samvera.org/" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </Head>
      <HeaderNew />
      <OuterWrapper>{children}</OuterWrapper>
      <BannerContact />
      <SidebarLinks />
      <BannerPartners />
      <BannerLicense />
      <Footer />
    </div>
  );
}
