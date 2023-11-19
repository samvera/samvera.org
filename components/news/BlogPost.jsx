import Date from "components/date";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import MarkdownContent from "components/MarkdownContent";
import React from "react";
import RichTextContent from "components/RichTextContent";
import TagCloud from "components/TagCloud";

const BlogPost = ({ post }) => {
  const { content, image, mdContent, publishDate, slug, tag, title } = post;
  const imageDescription = image?.fields?.description || image?.fields?.title;

  return (
    <div className="px-6 py-10 bg-white lg:px-8">
      <div className="max-w-3xl mx-auto text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-samDarkRed">
          <Date dateString={publishDate} />
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-samGreyDark sm:text-4xl">
          {title}
        </h1>

        {image && (
          <figure className="mt-8">
            <img
              className="object-cover aspect-video rounded-xl bg-gray-50"
              src={image.fields.file.url}
              alt={image.fields.title || image.fields.description}
            />
            {imageDescription && (
              <figcaption className="flex mt-4 text-sm leading-6 text-gray-500 gap-x-2">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                {imageDescription}
              </figcaption>
            )}
          </figure>
        )}

        <div className="max-w-3xl mt-10">
          {/* Render Markdown content if it exists */}
          {mdContent && <MarkdownContent content={mdContent} />}

          {/* Render CMS content if it exists */}
          {content && <RichTextContent content={content} />}

          <h3 className="mt-10 mb-6">Tags</h3>
          <TagCloud tag={tag} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
