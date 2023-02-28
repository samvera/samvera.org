import DynamicPage from "components/layout/DynamicPage";
import { getMarkdownPageContent, getSideNav } from "lib/markdown-helpers";
import { buildWorkOpenGraphData } from "lib/open-graph";

const CONFIG = {
  parentDir: "contact-us",
  parentDirLabel: "Contact Us",
};

export default function ContactPage({
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

export async function getStaticProps() {
  const { content, frontmatter } = getMarkdownPageContent(
    `markdown/${CONFIG.parentDir}/index.md`
  );
  const { sideNav } = getSideNav(`markdown/${CONFIG.parentDir}`);
  const { sideNav: sideNewsAndEvents } = getSideNav(`markdown/news`);

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
      sideNav,
      sideNewsAndEvents,
    },
  };
}
