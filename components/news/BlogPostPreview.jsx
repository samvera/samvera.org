import React from "react";
import RichTextContent from "components/RichTextContent";
import TagCloud from "components/TagCloud";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const BlogPostPreview = ({ post }) => {
  const { content, image, publishDate, slug = "#", tag = [], title } = post;

  // Convert this value: 2023-11-14T10:00+00:00 to this: November 14, 2023
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const imgSrc = image?.fields?.file?.url || "/images/1200px-Samvera_logo.png";

  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src={imgSrc}
          alt={image?.fields?.title || "Samvera logo"}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="flex items-center mt-8 text-xs gap-x-4">
          <time dateTime={publishDate} className="text-gray-500">
            {formattedDate}
          </time>
          {/* List tags */}
          <TagCloud tag={tag} />
        </div>
        <div className="relative group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={`news-and-events/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <div className="mt-5 text-sm leading-6 text-gray-600 [&>p]:line-clamp-6 [&>p]:pb-0">
            <RichTextContent content={content.content[0]} />
          </div>
        </div>
        <div className="relative flex items-center mt-8 gap-x-4">
          <UserCircleIcon className="w-10 h-10 bg-gray-100 rounded-full" />

          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <span className="absolute inset-0" />
              Samvera.org Admin
            </p>
            <p className="text-gray-600">Contributor</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPreview;
