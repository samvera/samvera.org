import DynamicPage from "components/layout/DynamicPage";
import {
  getMarkdownPageContent,
  getSideNav,
  getPaths,
} from "lib/markdown-helpers";

/**
 * Customize this info per dynamic page
 */
const CONFIG = {
  parentDir: "getting-started",
  parentDirLabel: "Getting Started",
};

export default function GettingStartedPage({
  content,
  frontmatter,
  sideNav,
  sideNewsAndEvents,
}) {
  return (
    <DynamicPage
      config={CONFIG}
      content={content}
      frontmatter={frontmatter}
      sideNav={sideNav}
      sideNewsAndEvents={sideNewsAndEvents}
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
  const { sideNav } = getSideNav(`markdown/${CONFIG.parentDir}`);
  const { sideNav: sideNewsAndEvents } = getSideNav(`markdown/news`);

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
      sideNav,
      sideNewsAndEvents,
    },
  };
}
