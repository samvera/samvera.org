import getContentful from "lib/get-contentful";

export async function getBlogPosts(limit = 20) {
  const contentful = getContentful();
  if (!contentful) return [];

  let blogPosts = [];
  try {
    blogPosts = await contentful.getEntries({
      content_type: "blogPost",
      limit,
    });

    if (!blogPosts.items) return [];
    blogPosts.items.sort((a, b) => {
      return new Date(b.fields.publishDate) - new Date(a.fields.publishDate);
    });
  } catch (e) {
    console.error("Error getting blogPosts.", e);
    return [];
  }

  return blogPosts.items;
}
