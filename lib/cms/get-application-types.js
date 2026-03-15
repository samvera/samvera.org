import getContentful from "lib/get-contentful";

export async function getApplicationTypes() {
  const contentful = getContentful();
  if (!contentful) return [];
  try {
    const response = await contentful.getEntries({
      content_type: "applicationTypes",
    });
    return response.items ?? [];
  } catch (e) {
    console.error("Error getting applicationTypes.", e);
    return [];
  }
}
