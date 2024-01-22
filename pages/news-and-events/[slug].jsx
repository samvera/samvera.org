import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import BlogPost from "components/news/BlogPost";
import Breadcrumbs from "components/Breadcrumbs";
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
  let post = {};
  let blogPostTitle = "";

  if (markdownContent) {
    const { categories, date, title } = markdownContent.frontmatter;

    post.mdContent = markdownContent.content;
    post.publishDate = date;
    post.tag = categories;
    post.title = title;

    blogPostTitle = title;
  } else if (blogPost) {
    post = { ...blogPost };
    blogPostTitle = blogPost.title;
  } else {
    return <p>Error retrieving blog post</p>;
  }

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
              label: blogPostTitle,
            },
          ]}
        />
        <BlogPost post={post} />
      </Main>
    </Layout>
  );
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
  let blogPost = null;
  const contentful = getContentful();

  // Get Markdown blog post from file system
  const markdownContent =
    getMarkdownPageContent(`markdown/${CONFIG.parentDir}/${slug}.md`) || null;

  try {
    // Get Blog Post by slug value from Contentful
    const response = await contentful.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    if (response.total > 0) {
      blogPost = response.items[0].fields;
    }
  } catch {
    console.error(`Error retrieving blog post: ${slug} from Contentful`);
  }

  const ogTitle = markdownContent
    ? markdownContent.frontmatter.title
    : blogPost.title;

  const openGraphData = buildWorkOpenGraphData(
    CONFIG.parentDirLabel,
    ogTitle,
    `${CONFIG.parentDir}/${slug}`,
    blogPost?.image?.fields?.file?.url
  );

  return {
    props: {
      blogPost,
      markdownContent,
      openGraphData,
    },
  };
}
