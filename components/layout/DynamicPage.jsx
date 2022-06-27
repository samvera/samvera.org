import Breadcrumbs from "../Breadcrumbs";
import Layout from "./Layout";
import Main from "./Main";
import MarkdownContent from "../MarkdownContent";
import Sidebar from "../sidebar/Sidebar";

export default function DynamicPage({ config, content, frontmatter, sideNav }) {
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
