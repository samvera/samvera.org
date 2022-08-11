import BannerContact from "components/BannerContact";
import BannerLicense from "components/BannerLicense";
import BannerPartners from "components/BannerPartners";
import React from "react";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

export default function HomeLayout({ children }) {
  return (
    <div className="text-samGrey font-cooperBook bg-white">
      <Header />
      <main>
        {children}
        <BannerContact />
        <BannerPartners />
        <BannerLicense />
      </main>
      <Footer />
    </div>
  );
}
