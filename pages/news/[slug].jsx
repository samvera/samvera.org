import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import DynamicNewsContent from "components/layout/DynamicNewsContent";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "news",
  parentDirLabel: "News and Events",
};

export default function NewsPage({ content, frontmatter }) {
  return (
    <DynamicNewsContent
      config={CONFIG}
      content={content}
      frontmatter={frontmatter}
    />
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
    },
  };
}
