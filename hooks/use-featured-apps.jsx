import { useEffect, useState } from "react";

import getContentful from "lib/get-contentful";
import { getGithubRepoData } from "lib/github";

export default function useFeaturedApps() {
  const contentful = getContentful();

  const [featuredApps, setFeaturedApps] = useState([]);

  useEffect(() => {
    (async function init() {
      try {
        const featuredApps = await contentful.getEntries({
          content_type: "featuredApp",
        });

        if (!featuredApps.items) {
          return console.error("Error getting featuredApps.");
        }

        // Parse out the useful data
        const parsedContent = featuredApps.items.map((record) => {
          return {
            bannerImage: {
              src: record.fields.bannerImage?.fields?.file?.url,
              height:
                record.fields.bannerImage?.fields?.file?.details?.image?.height,
              width:
                record.fields.bannerImage?.fields?.file?.details?.image?.width,
            },
            description: record.fields.description,
            githubHandle: record.fields.githubHandle,
            githubUrl: record.fields.githubUrl || "",
            headline: record.fields.headline,
            id: record.sys.id,
            logo: {
              src: record.fields.logo?.fields?.file?.url,
              height: record.fields.logo?.fields?.file?.details?.image?.height,
              width: record.fields.logo?.fields?.file?.details?.image?.width,
            },
            name: record.fields.name,
            url: record.fields.url,
          };
        });

        // Add Github data to the featuredApps
        const response = await getGithubRepoData(parsedContent);

        setFeaturedApps(response);
      } catch (error) {
        console.error("Error getting featuredApps.", error);
      }
    })();
  }, [contentful]);

  return [...featuredApps];
}
