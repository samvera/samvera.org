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
  parentDir: "2014/02",
  parentDirLabel: "2014 February Posts",
};

export default function TwentyFourteen02Page({
  content,
  frontmatter,
  sideNav,
}) {
  return (
    <DynamicPage
      config={CONFIG}
      content={content}
      frontmatter={frontmatter}
      sideNav={sideNav}
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
  return {
    props: {
      content,
      frontmatter,
      sideNav,
    },
  };
}
