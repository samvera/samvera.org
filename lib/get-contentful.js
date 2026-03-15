import { createClient } from "contentful";

let client;

/**
 * Returns a Contentful client when both NEXT_PUBLIC_CONTENTFUL_SPACE_ID and
 * NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN are set. Otherwise returns null so the
 * app can run locally without a token (e.g. for UI work).
 */
function getContentful() {
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return null;
  }
  if (!client) {
    client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
  }
  return client;
}

export default getContentful;
