import getContentful from "lib/get-contentful";

export async function getBlogPosts(limit = 20) {
  const contentful = getContentful();
  let blogPosts = [];

  try {
    // Get Blog Post paths from Contentful
    blogPosts = await contentful.getEntries({
      content_type: "blogPost",
      limit,
    });

    // Order by publish date
    blogPosts.items.sort((a, b) => {
      return new Date(b.fields.publishDate) - new Date(a.fields.publishDate);
    });
  } catch (e) {
    return console.error("Error getting blogPosts.");
  }

  if (!blogPosts.items) {
    return console.error("Error getting blogPosts.");
  }

  return blogPosts.items;
}
