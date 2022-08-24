import React from "react";
import { prefix } from "prefix";

export default function BannerContact() {
  return (
    <section
      className="bg-samGrey flex flex-col justify-center items-center text-white p-10 bg-fixed md:bg-[center_right] bg-center"
      style={{
        backgroundImage: `url(${prefix}/images/hydra-transparency.png)`,
      }}
    >
      <h3 className="title mb-6">If you want to go far, go together.</h3>
      <button>Contact Us</button>
    </section>
  );
}
