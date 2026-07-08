import BannerLicense from "components/BannerLicense";
import BannerPartners from "components/BannerPartners";
import Footer from "components/layout/Footer";
import Head from "next/head";
import Header from "components/layout/Header";
import React from "react";
import { prefix } from "prefix";

const description =
  "Samvera builds and maintains open-source repository software (Hyku, Hyrax, Avalon), free to run and steered in the open by the institutions that fund it.";

const title =
  "Samvera - open-source repository software, governed by its community";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-white text-samGrey font-openSans">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>
        {children}
        <BannerPartners />
        <BannerLicense />
      </main>
      <Footer />
    </div>
  );
}
