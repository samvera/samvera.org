import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "repository-solutions",
  parentDirLabel: "Repository Solutions",
};

export default function TheCommunityPage({ content, frontmatter, slug }) {
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
