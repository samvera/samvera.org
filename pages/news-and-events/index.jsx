import Breadcrumbs from "components/Breadcrumbs";
import Layout from "components/layout/Layout";
import Link from "next/link";
import Main from "components/layout/Main";
import MarkdownContent from "components/MarkdownContent";
import NewsMeta from "components/news/Meta";
import { getNewsPreviews } from "lib/markdown-helpers";
import getContentful from "lib/get-contentful";
import BlogPosts from "components/news/BlogPosts";

const CONFIG = {
  parentDir: "news-and-events",
  parentDirLabel: "News and Events",
};

export default function NewsAndEventsPage({ blogPosts = [], previews }) {
  console.log("blogPosts", blogPosts);
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
        {/* <h1 className="mb-6">News &amp; Events</h1> */}

        {/* Blog Posts from the CMS */}
        {blogPosts.length > 0 && (
          <BlogPosts posts={blogPosts} className="mb-12" />
        )}

        {/* News Previews from the Markdown files */}
        {previews.map((preview) => {
          const {
            excerpt,
            frontmatter: { categories, date, title },
            slug,
          } = preview;

          return (
            <article key={title} className="mb-12 break-words">
              <h2>
                <Link legacyBehavior href={`/news-and-events/${slug}`}>
                  <a className="normal-case text-samGreyDark hover:text-samDarkRed">
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
    </Layout>
  );
}

export async function getStaticProps() {
  const contentful = getContentful();
  const { previews } = getNewsPreviews();
  let blogPosts = [];

  try {
    blogPosts = await contentful.getEntries({
      content_type: "blogPost",
    });

    // Order by publish date
    blogPosts.items.sort((a, b) => {
      return new Date(b.fields.publishDate) - new Date(a.fields.publishDate);
    });
  } catch (e) {
    return console.error("Error getting blogPosts.");
  }

  if (!blogPosts.items) {
    return console.error("Error getting blogPosts.");
  }

  return {
    props: { blogPosts: blogPosts.items, previews },
  };
}
