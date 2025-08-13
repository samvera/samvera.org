import { createClient } from "contentful";

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
  }

  return client;
}

export default getContentful;
