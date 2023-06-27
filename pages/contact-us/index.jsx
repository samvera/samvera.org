import DynamicPage from "components/layout/DynamicPage";
import { buildWorkOpenGraphData } from "lib/open-graph";
import { getMarkdownPageContent } from "lib/markdown-helpers";

const CONFIG = {
  parentDir: "contact-us",
  parentDirLabel: "Contact Us",
};

export default function ContactPage({ content, frontmatter }) {
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
    `${CONFIG.parentDir}`
  );

  return {
    props: {
      content,
      frontmatter,
      openGraphData,
    },
  };
}
