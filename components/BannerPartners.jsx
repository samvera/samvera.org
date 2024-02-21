import PartnersMap from "./PartnersMap";
import React from "react";
import getContentful from "lib/get-contentful";
import { useRouter } from "next/router";
import useSamveraPartners from "hooks/use-samvera-partners";

export default function BannerPartners() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const { partners } = useSamveraPartners();

  return (
    <>
      <section className="py-8 bg-samBlue">
        <h3 className="pb-4 text-center title">Samvera Partners</h3>
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 ml-0 list-none lg:gap-6 lg:px-10 md:grid-cols-3 xl:grid-cols-4 ">
            {partners.map(({ id, name, url }) => (
              <li key={id} className="text-left">
                {!url && name}
                {url && (
                  <a
                    href={url}
                    className="text-samGreyDark hover:text-samDarkRed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {isHomePage && <PartnersMap partners={partners} />}
    </>
  );
}
