import Link from "next/link";
import React from "react";
import { SAMVERA_PARTNERS } from "app-config";
import getContentful from "lib/get-contentful";

export default function BannerPartners() {
  const contentful = getContentful();
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    async function fetchEntries() {
      const entries = await contentful.getEntries({
        content_type: "samveraPartner",
      });
      console.log("entries", entries);

      if (!entries.items) {
        return console.error("Error getting entries.");
      }
      setEntries(entries.items);
    }

    fetchEntries();
  }, [contentful]);

  return (
    <section className="py-8 bg-samBlue">
      <h3 className="pb-4 text-center title">Samvera Partners</h3>
      <div className="container">
        <ul className="grid grid-cols-2 gap-4 ml-0 list-none lg:gap-6 lg:px-10 md:grid-cols-3 xl:grid-cols-4 ">
          {entries.map(
            ({ fields: { location, name, url = "" }, sys: { id } }) => (
              <li key={id} className="text-left">
                <a
                  href={url}
                  className="text-samGreyDark hover:text-samDarkRed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
