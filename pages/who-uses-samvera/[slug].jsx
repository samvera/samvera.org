import DynamicPage from "components/layout/DynamicPage";
import {
  getMarkdownPageContent,
  getSideNav,
  getPaths,
} from "lib/markdown-helpers";

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

export default function WhatIsSamveraPage({
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

  return {
    props: {
      content,
      frontmatter,
      sideNav,
      sideNewsAndEvents,
    },
  };
}
