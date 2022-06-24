import DynamicPage from "../../components/layout/DynamicPage";
import {
  getMarkdownPageContent,
  getSideNav,
  getPaths,
} from "../../lib/markdown-helpers";

const config = {
  parentDir: "what-is-samvera",
  parentDirLabel: "What is Samvera?",
};

export default function WhatIsSamveraPage({ content, frontmatter, sideNav }) {
  return (
    <DynamicPage
      config={config}
      content={content}
      frontmatter={frontmatter}
      sideNav={sideNav}
    />
  );
}

export async function getStaticPaths() {
  const paths = getPaths(`markdown/${config.parentDir}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, frontmatter } = getMarkdownPageContent(
    `markdown/${config.parentDir}/${slug}.md`
  );
  const { sideNav } = getSideNav(`markdown/${config.parentDir}`);
  return {
    props: {
      content,
      frontmatter,
      sideNav,
    },
  };
}
