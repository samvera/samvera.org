import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import CommunityLeadership from "components/about/CommunityLeadership";
import DynamicPage from "components/layout/DynamicPage";
import Faq from "components/about/Faq";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "the-community",
  parentDirLabel: "The Community",
};

export default function TheCommunityPage({ content, frontmatter, slug }) {
  /**
   * The following pages use customized layouts
   */
  // Community Leadership page
  if (slug === "community-leadership") {
    return (
      <CommunityLeadership
        config={CONFIG}
        content={content}
        frontmatter={frontmatter}
      />
    );
  }

  // FAQ page
  if (slug === "faq") {
    return <Faq config={CONFIG} content={content} frontmatter={frontmatter} />;
  }

  /**
   * Standard template page
   */
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
