import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";
import { getMarkdownPageContent } from "lib/markdown-helpers";

const CONFIG = {
  parentDir: "why-use-samvera",
  parentDirLabel: "Why use Samvera?",
};

export default function WhatIsSamveraPage({ content, frontmatter }) {
  return (
    <DynamicPage config={CONFIG} content={content} frontmatter={frontmatter} />
  );
}

export async function getStaticProps() {
  const { content, frontmatter } = getMarkdownPageContent(
    `markdown/${CONFIG.parentDir}/index.md`
  );

  const openGraphData = buildWorkOpenGraphData(
    CONFIG.parentDirLabel,
    frontmatter.title,
    `${CONFIG.parentDir}/index`
  );

  return {
    props: {
      content,
      frontmatter,
      openGraphData,
    },
  };
}
