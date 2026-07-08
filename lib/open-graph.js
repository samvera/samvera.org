import { prefix } from "prefix";

const image = "images/1200px-Samvera_logo.png";

const description =
  "Samvera builds and maintains open-source repository software (Hyku, Hyrax, Avalon), free to run and steered in the open by the institutions that fund it.";

const title =
  "Samvera - open-source repository software, governed by its community";

export const defaultOpenGraphData = {
  "og:description": description,
  "og:image": `${prefix}/${image}`,
  "og:image:secure_url": `${prefix}/${image}`,
  "og:site_name": title,
  "og:title": title,
  "og:type": "website",
  "og:url": "https://samvera.org",
};

export function buildWorkOpenGraphData(page, title, urlPath, imageUrl = image) {
  if (!page) return {};

  const ogTitle = `${title} - ${page}`;

  const openGraphData = !page
    ? {}
    : {
        "og:description": description,
        "og:image": imageUrl,
        "og:imageUrl:secure_url": imageUrl,
        "og:site_name": `${ogTitle} - Samvera`,
        "og:title": `${ogTitle} - Samvera`,
        "og:type": "website",
        "og:url": `https://samvera.org/${urlPath}`,
      };

  return openGraphData;
}
