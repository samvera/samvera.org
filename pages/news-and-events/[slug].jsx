import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import BlogPost from "components/news/BlogPost";
import Breadcrumbs from "components/Breadcrumbs";
import DynamicNewsContent from "components/layout/DynamicNewsContent";
import Layout from "components/layout/Layout";
import Main from "components/layout/Main";
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
  } else if (blogPost) {
    return (
      <Layout>
        <Main>
          <Breadcrumbs
            items={[
              {
                href: `/${CONFIG.parentDir}`,
                label: CONFIG.parentDirLabel,
              },
              {
                label: blogPost.title,
              },
            ]}
          />
          <BlogPost post={blogPost} />
        </Main>
      </Layout>
    );
  } else {
    return <p>Error retrieving blog post</p>;
  }
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
  let blogPost;
  const contentful = getContentful();

  // Get Markdown blog posts from file system
  const markdownContent =
    getMarkdownPageContent(`markdown/${CONFIG.parentDir}/${slug}.md`) || null;

  try {
    // Get Blog Post by slug value from Contentful
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
