import { getMarkdownPageContent, getPaths } from "lib/markdown-helpers";

import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";

/**
 * This is where the magic happens.
 * 'parentDir' is the value of this file's parent directory
 * along with a matching directory title which exists in
 * /markdown.
 *
 * For example:
 * /markdown/my-cool-directory/...
 * /pages/my-cool-directory/...
 */
const CONFIG = {
  parentDir: "who-uses-samvera",
  parentDirLabel: "Who uses Samvera?",
};

export default function WhatIsSamveraPage({ content, frontmatter }) {
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
    },
  };
}
