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
              href: `/${CONFIG.parentDir}`,
              label: CONFIG.parentDirLabel,
            },
          ]}
        />
        <h1 className="mb-6">News &amp; Events</h1>
        {previews.map((preview) => {
          const {
            excerpt,
            frontmatter: { categories, date, title },
            slug,
          } = preview;

          return (
            <article key={title} className="mb-12">
              <h2>
                <Link href={`/news/${slug}`}>
                  <a className="text-samGreyDark normal-case hover:text-samDarkRed">
                    {title}
                  </a>
                </Link>
              </h2>
              <NewsMeta categories={categories} date={date} />
              <MarkdownContent content={excerpt} />
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
