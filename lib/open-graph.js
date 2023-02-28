const image = "/images/1200px-Samvera_logo.png";

const description =
  "Samvera™ is a vibrant and welcoming community of information and technology professionals who share challenges, build expertise, and create sustainable, best-in-class solutions, making the world’s digital collections accessible now and into the future. Samvera’s suite of repository software tools offers flexible and rich user interfaces tailored to distinct content types on top of a robust back end – giving adopters the best of both worlds.";

const title =
  "Samvera - a vibrant and welcoming community developing repository software tools";

export const defaultOpenGraphData = {
  "og:description": description,
  "og:image": image,
  "og:image:secure_url": image,
  "og:site_name": title,
  "og:title": title,
  "og:type": "website",
  "og:url": "https://samvera.org",
};

export function buildWorkOpenGraphData(page, title, urlPath) {
  if (!page) return {};

  const ogTitle = `${title} - ${page}`;

  const openGraphData = !page
    ? {}
    : {
        "og:description": description,
        "og:image": image,
        "og:image:secure_url": image,
        "og:site_name": `${ogTitle} - Samvera`,
        "og:title": `${ogTitle} - Samvera`,
        "og:type": "website",
        "og:url": `https://samvera.org/${urlPath}`,
      };

  return openGraphData;
}
