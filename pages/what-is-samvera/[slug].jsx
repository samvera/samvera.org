import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/layout/Layout";
import Main from "../../components/layout/Main";
import MarkdownContent from "../../components/MarkdownContent";
import Sidebar from "../../components/sidebar/Sidebar";
import fs from "fs";
import matter from "gray-matter";
import {
  getMarkdownPageContent,
  getSideNav,
  getPaths,
} from "../../lib/markdown-helpers";

const config = {
  parentDir: "what-is-samvera",
  parentDirLabel: "Yo dude",
};

export default function FooPage({ content, frontmatter, sideNav }) {
  return (
    <Layout>
      <Main>
        <Breadcrumbs
          items={[
            {
              href: "/",
              label: config.parentDirLabel,
            },
            {
              label: frontmatter.title,
            },
          ]}
        />

        <h1>{frontmatter.title}</h1>
        <MarkdownContent content={content} />
      </Main>
      <Sidebar
        title={config.parentDirLabel}
        parentDir={config.parentDir}
        sideNav={sideNav}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`markdown/${config.parentDir}`);
  const paths = getPaths(files);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(
    `markdown/${config.parentDir}/${slug}.md`,
    "utf-8"
  );
  const { content, frontmatter } = getMarkdownPageContent(fileName);
  const files = fs.readdirSync(`markdown/${config.parentDir}`);
  const sideNav = files.map((file) => {
    const slug = file.replace(".md", "");
    const readFile = fs.readFileSync(
      `markdown/${config.parentDir}/${file}`,
      "utf-8"
    );
    const { data } = matter(readFile);

    return {
      slug,
      title: data.title,
    };
  });

  console.log("frontmatter", frontmatter);

  return {
    props: {
      content,
      frontmatter,
      sideNav,
    },
  };
}
