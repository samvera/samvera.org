import { createClient } from "contentful";
import { applyReviewOverrides } from "./review-overrides";

let client;

function getContentful() {
  if (!client) {
    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
      throw new Error(
        "Contentful Space ID is not defined in environment variables.",
      );
    }

    if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
      throw new Error(
        "Contentful Access Token is not defined in environment variables.",
      );
    }

    client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

    // DEV-ONLY: community review overlay. Patches reviewed fields in fetched results when
    // NEXT_PUBLIC_REVIEW_OVERRIDES === "true". Never writes to Contentful.
    if (process.env.NEXT_PUBLIC_REVIEW_OVERRIDES === "true") {
      const getEntries = client.getEntries.bind(client);
      client.getEntries = async (query) => {
        const res = await getEntries(query);
        if (res && res.items) res.items = applyReviewOverrides(res.items);
        return res;
      };
    }
  }

  return client;
}

export default getContentful;
