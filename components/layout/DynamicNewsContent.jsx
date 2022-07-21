import Breadcrumbs from "../Breadcrumbs";
import Layout from "./Layout";
import Main from "./Main";
import MarkdownContent from "../MarkdownContent";
import Sidebar from "../sidebar/Sidebar";

export default function DynamicNewsPage({
  config,
  content,
  frontmatter,
  sideNav,
  sideNewsAndEvents,
}) {
  const { categories, date, title } = frontmatter;

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
              label: title,
            },
          ]}
        />
        <h1 className="mb-6">{title}</h1>
        <p className="mb-6">
          Posted on {date}{" "}
          {
            <span className="capitalize">
              {categories && ` - ${categories?.join(", ")}`}
            </span>
          }
        </p>
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
