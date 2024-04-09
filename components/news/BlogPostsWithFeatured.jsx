import FadeIn from "components/FadeIn";
import RichTextContent from "components/RichTextContent";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { formatDateString } from "lib/date-helpers";

const User = () => (
  <span className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
    <UserCircleIcon className="flex-none w-6 h-6 rounded-full bg-gray-50" />
    Samvera.org Admin
  </span>
);

export default function BlogPostsWithFeatured({ blogPosts = [] }) {
  if (blogPosts.length === 0) {
    return null;
  }

  const featuredPost = blogPosts[0].fields;

  return (
    <FadeIn className="py-24 bg-gray-50 sm:py-28">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
          <time
            dateTime={formatDateString(featuredPost.publishDate)}
            className="block text-sm leading-6 text-gray-600"
          >
            {formatDateString(featuredPost.publishDate)}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-samGreyDark sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <div className="mt-4 text-lg leading-8 text-gray-600">
            <RichTextContent content={featuredPost.content.content[0]} />
          </div>
          <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={`/news-and-events/${featuredPost.slug}`}
                className="text-sm font-semibold leading-6"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <User />
            </div>
          </div>
        </article>
        <div className="w-full max-w-2xl pt-12 mx-auto border-t border-gray-900/10 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {blogPosts.slice(1).map((post) => {
              const {
                content,
                image,
                publishDate,
                slug = "#",
                tag = [],
                title,
              } = post.fields;
              const postDate = formatDateString(publishDate);

              return (
                <article key={post.sys.id} className="py-12">
                  <div className="relative max-w-xl group">
                    <time
                      dateTime={postDate}
                      className="block text-sm leading-6 text-gray-600"
                    >
                      {postDate}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={`/news-and-events/${slug}`}>
                        <span className="absolute inset-0" />
                        {title}
                      </a>
                    </h2>
                    <div className="mt-4 text-sm leading-6 text-gray-600">
                      <RichTextContent content={content.content[0]} />
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <User />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
