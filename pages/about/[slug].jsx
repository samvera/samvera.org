import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import CommunityLeadership from "components/about/CommunityLeadership";
import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "about",
  parentDirLabel: "About Samvera",
};

export default function AboutPage({ content, frontmatter, slug }) {
  // Special case for Community Leadership page
  if (slug === "community-leadership") {
    return (
      <CommunityLeadership
        config={CONFIG}
        content={content}
        frontmatter={frontmatter}
      />
    );
  }

  // Regular dynamic page
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
    `markdown/${CONFIG.parentDir}/${slug}.md`
  );

  const openGraphData = buildWorkOpenGraphData(
    CONFIG.parentDirLabel,
    frontmatter.title,
    `${CONFIG.parentDir}/${slug}`
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
