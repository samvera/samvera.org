import getContentful from "lib/get-contentful";

const contentful = getContentful();

export async function getApplicationTypes() {
  try {
    const response = await contentful.getEntries({
      content_type: "applicationTypes",
    });
    return response.items;
  } catch (e) {
    return console.error("Error getting applicationTypes.");
  }
}
