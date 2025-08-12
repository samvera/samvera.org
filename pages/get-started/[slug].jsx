import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import ContactUs from "components/get-started/ContactUs";
import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "get-started",
  parentDirLabel: "Get Started",
};

export default function GetStartedPage({ content, frontmatter, slug }) {
  // Community Leadership page
  if (slug === "contact-us") {
    return (
      <ContactUs config={CONFIG} content={content} frontmatter={frontmatter} />
    );
  }

  return (
    <DynamicPage config={CONFIG} content={content} frontmatter={frontmatter} />
  );
}

export async function getStaticPaths() {
  const paths = getPaths(`markdown/${CONFIG.parentDir}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, frontmatter } = getMarkdownPageContent(
    `markdown/${CONFIG.parentDir}/${slug}.md`,
  );

  const openGraphData = buildWorkOpenGraphData(
    CONFIG.parentDirLabel,
    frontmatter.title,
    `${CONFIG.parentDir}/${slug}`,
  );

  return {
    props: {
      content,
      frontmatter,
      openGraphData,
      slug,
    },
  };
}
