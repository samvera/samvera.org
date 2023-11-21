import BlogPostPreview from "components/news/BlogPostPreview";
import Breadcrumbs from "components/Breadcrumbs";
import Layout from "components/layout/Layout";
import Main from "components/layout/Main";
import { formatDateString } from "lib/date-helpers";
import { getBlogPosts } from "lib/cms/get-blog-posts";
import { getNewsPreviews } from "lib/markdown-helpers";

const CONFIG = {
  parentDir: "news-and-events",
  parentDirLabel: "News and Events",
};

export default function NewsAndEventsPage({ blogPosts = [], previews }) {
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

        <div className="py-12 bg-white">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                News and Events
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn about the latest News and Events in the Samvera Community.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Blog Posts from the CMS */}
              {blogPosts.map((post) => {
                const {
                  content,
                  image,
                  publishDate,
                  slug = "#",
                  tag = [],
                  title,
                } = post.fields;
                return (
                  <BlogPostPreview
                    key={post.sys.id}
                    cmsContent={content}
                    image={image}
                    publishDate={formatDateString(publishDate)}
                    slug={slug}
                    tag={tag}
                    title={title}
                  />
                );
              })}

              {/* Blog Posts from local markdown files */}
              {previews.map((preview, index) => {
                const {
                  excerpt,
                  frontmatter: { categories, date, title },
                  slug,
                } = preview;

                return (
                  <BlogPostPreview
                    key={index}
                    markdownContent={excerpt}
                    publishDate={formatDateString(date)}
                    slug={slug}
                    tag={categories}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { previews } = getNewsPreviews();
  const subsetOfPreviews = previews.slice(0, 30);

  const blogPosts = await getBlogPosts();

  const openGraphData = {
    "og:title": "News and Events - Samvera",
    "og:description":
      "Learn about the latest News and Events in the Samvera Community.",
  };

  return {
    props: { blogPosts, openGraphData, previews: subsetOfPreviews },
  };
}
