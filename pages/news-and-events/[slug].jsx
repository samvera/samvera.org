import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import DynamicNewsContent from "components/layout/DynamicNewsContent";
import { buildWorkOpenGraphData } from "lib/open-graph";
import getContentful from "lib/get-contentful";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "news-and-events",
  parentDirLabel: "News and Events",
};

export default function NewsPage({ blogPost, markdownContent }) {
  if (markdownContent) {
    return (
      <DynamicNewsContent
        config={CONFIG}
        content={markdownContent.content}
        frontmatter={markdownContent.frontmatter}
      />
    );
  }

  return <p>CMS Content goes here</p>;
}

export async function getStaticPaths() {
  const paths = getPaths(`markdown/${CONFIG.parentDir}`);

  // Get Blog Post paths from Contentful
  const contentful = getContentful();
  const blogPosts = await contentful.getEntries({
    content_type: "blogPost",
  });

  // Create paths for each blog post based on the slug value in blogPost.items[0].fields.slug
  blogPosts.items.forEach((post) => {
    paths.push({
      params: {
        slug: post.fields.slug,
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownContent =
    getMarkdownPageContent(`markdown/${CONFIG.parentDir}/${slug}.md`) || null;
  let blogPost;

  try {
    // Get Blog Post by slug value from Contentful
    const contentful = getContentful();
    const response = await contentful.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    blogPost = response.items[0].fields;
  } catch {}

  const ogTitle = markdownContent
    ? markdownContent.frontmatter.title
    : blogPost.title;

  const openGraphData = buildWorkOpenGraphData(
    CONFIG.parentDirLabel,
    ogTitle,
    `${CONFIG.parentDir}/${slug}`
  );

  return {
    props: {
      blogPost,
      markdownContent,
      openGraphData,
    },
  };
}
