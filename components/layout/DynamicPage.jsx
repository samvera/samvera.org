import Breadcrumbs from "../Breadcrumbs";
import Layout from "./Layout";
import Main from "./Main";
import MarkdownContent from "../MarkdownContent";

export default function DynamicPage({ config, content, frontmatter }) {
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
    </Layout>
  );
}
