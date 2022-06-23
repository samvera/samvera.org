import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/layout/Layout";
import Main from "../../components/layout/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export default function AboutPage({ content, frontmatter, sideNav }) {
  return (
    <Layout>
      <Main>
        <Breadcrumbs
          items={[
            {
              href: "/",
              label: "Home",
            },
            {
              label: "About",
            },
          ]}
        />

        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
      </Main>
      <Sidebar title="About Samvera" parentDir="about" sideNav={sideNav} />
    </Layout>
  );
}

export async function getStaticPaths() {
  /**
   * Dynamically build static files from Markdown files
   */
  const files = fs.readdirSync("markdown/about");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  /**
   * Get content for the page itself from Markdown file
   */
  const fileName = fs.readFileSync(`markdown/about/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  /**
   * Dynamically build up sidebar navigation and pass along
   */
  const files = fs.readdirSync("markdown/about");
  const sideNav = files.map((file) => {
    const slug = file.replace(".md", "");
    const readFile = fs.readFileSync(`markdown/about/${file}`, "utf-8");
    const { data } = matter(readFile);

    return {
      slug,
      title: data.title,
    };
  });

  return {
    props: {
      content,
      frontmatter,
      sideNav,
    },
  };
}
