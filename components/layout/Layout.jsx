import BannerContact from "../BannerContact";
import BannerLicense from "../BannerLicense";
import BannerPartners from "../BannerPartners";
import React from "react";
import Footer from "./Footer";
import OuterWrapper from "./OuterWrapper";
import NavBar from "../nav/NavBar";

export default function Layout({ children }) {
  return (
    <div className="text-samGrey font-cooperBook bg-white">
      <NavBar />
      <OuterWrapper>{children}</OuterWrapper>
      <BannerContact />
      <BannerPartners />
      <BannerLicense />
      <Footer />
    </div>
  );
}
