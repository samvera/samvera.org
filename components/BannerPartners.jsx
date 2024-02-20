import PartnersMap from "./PartnersMap";
import React from "react";
import getContentful from "lib/get-contentful";
import { useRouter } from "next/router";

export default function BannerPartners() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const contentful = getContentful();
  const [entries, setEntries] = React.useState([]);
  const partnersForMap = [];

  React.useEffect(() => {
    async function fetchEntries() {
      const entries = await contentful.getEntries({
        content_type: "samveraPartner",
      });

      if (!entries.items) {
        return console.error("Error getting entries.");
      }

      const sorted = entries.items.sort((a, b) =>
        a.fields.name.localeCompare(b.fields.name)
      );
      setEntries(sorted);
    }

    fetchEntries();
  }, [contentful]);

  for (const entry of entries) {
    const { location } = entry.fields;
    const { id } = entry.sys;

    if (location?.lat && location?.lon) {
      partnersForMap.push({
        lat: location.lat,
        lon: location.lon,
        id,
        name: entry.fields.name,
      });
    }
  }

  return (
    <>
      <section className="py-8 bg-samBlue">
        <h3 className="pb-4 text-center title">Samvera Partners</h3>
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 ml-0 list-none lg:gap-6 lg:px-10 md:grid-cols-3 xl:grid-cols-4 ">
            {entries.map(({ fields: { name, url = "" }, sys: { id } }) => (
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

      {isHomePage && <PartnersMap partners={partnersForMap} />}
    </>
  );
}
