import { useEffect, useState } from "react";

import getContentful from "lib/get-contentful";

export default function useSamveraPartners() {
  const contentful = getContentful();

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    (async function init() {
      const partners = await contentful.getEntries({
        content_type: "samveraPartner",
      });

      if (!partners.items) {
        return console.error("Error getting partners.");
      }

      const sorted = partners.items.sort((a, b) =>
        a.fields.name.localeCompare(b.fields.name)
      );
      const groomedData = sorted.map((record) => ({
        ...record.fields,
        id: record.sys.id,
      }));
      setPartners(groomedData);
    })();
  }, [contentful]);

  return { partners };
}
