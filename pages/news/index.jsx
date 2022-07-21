import { getNewsPreviews, getSideNav } from "lib/markdown-helpers";
import Breadcrumbs from "components/Breadcrumbs";
import Layout from "components/layout/Layout";
import Link from "next/link";
import Main from "components/layout/Main";
import MarkdownContent from "components/MarkdownContent";
import NewsMeta from "components/news/Meta";
import Sidebar from "components/sidebar/Sidebar";

const CONFIG = {
  parentDir: "news",
  parentDirLabel: "News and Events",
};

export default function NewsAndEventsPage({ previews, sideNav }) {
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
              href: CONFIG.parentDir,
              label: CONFIG.parentDirLabel,
            },
          ]}
        />
        <h1 className="mb-6">News &amp; Events</h1>
        {previews.map((preview) => {
          const {
            content,
            frontmatter: { categories, date, title },
            slug,
          } = preview;
          return (
            <article>
              <h2>
                <Link href={`/news/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <NewsMeta categories={categories} date={date} />
            </article>
          );
        })}
      </Main>
      <Sidebar
        title={CONFIG.parentDirLabel}
        parentDir={CONFIG.parentDir}
        sideNav={sideNav}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const { previews } = getNewsPreviews();
  const { sideNav } = getSideNav(`markdown/${CONFIG.parentDir}`);

  return {
    props: { previews, sideNav },
  };
}
