import Breadcrumbs from "../Breadcrumbs";
import Layout from "./Layout";
import Main from "./Main";
import MarkdownContent from "../MarkdownContent";
import Sidebar from "../sidebar/Sidebar";

export default function DynamicPage({
  config,
  content,
  frontmatter,
  sideNav,
  sideNewsAndEvents,
}) {
  return (
    <Layout title={`${frontmatter.title} - ${config.parentDirLabel} - Samvera`}>
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
        sideNewsAndEvents={sideNewsAndEvents}
      />
    </Layout>
  );
}
