import BannerContact from "../BannerContact";
import BannerLicense from "../BannerLicense";
import BannerPartners from "../BannerPartners";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import OuterWrapper from "./OuterWrapper";
import React from "react";
import SidebarLinks from "../sidebar/Links";
import { prefix } from "prefix";
import { useRouter } from "next/router";

const description =
  "Samvera builds and maintains open-source repository software (Hyku, Hyrax, Avalon), free to run and steered in the open by the institutions that fund it.";

export default function Layout({ children, title }) {
  const { asPath } = useRouter();
  const canonical = `https://samvera.org${asPath.split("?")[0].split("#")[0]}`;
  return (
    <div className="font-openSans text-samGreyDark">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Head>
      <Header />
      <OuterWrapper>{children}</OuterWrapper>
      <BannerContact />
      <SidebarLinks />
      <BannerPartners />
      <BannerLicense />
      <Footer />
    </div>
  );
}
