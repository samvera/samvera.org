import React from "react";
import { prefix } from "prefix";
import { useRouter } from "next/router";

export default function BannerContact() {
  const router = useRouter();

  return (
    <section
      className="bg-samGrey flex flex-col justify-center items-center text-white p-10 pb-16 bg-fixed md:bg-[center_right] bg-center"
      style={{
        backgroundImage: `url(${prefix}/images/hydra-transparency.png)`,
      }}
    >
      <h3 className="mb-6 text-center text-white title">
        Growing open technologies, together.
      </h3>
      <button
        className="button"
        onClick={() => router.push("mailto:contact@samvera.org")}
      >
        Contact Us
      </button>
    </section>
  );
}
