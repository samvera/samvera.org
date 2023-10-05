import Breadcrumbs from "../Breadcrumbs";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import MarkdownContent from "../MarkdownContent";
import React from "react";
import RichTextContent from "components/RichTextContent";
import getContentful from "lib/get-contentful";

export default function ExamplesAndDemos({ config, content, frontmatter }) {
  const contentful = getContentful();
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    async function fetchEntries() {
      const entries = await contentful.getEntries({
        content_type: "examplesAndDemos",
      });

      if (!entries.items) {
        return console.error("Error getting entries.");
      }
      setEntries(entries.items);
    }

    fetchEntries();
  }, [contentful]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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

        <div className="mb-10 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {entries.map((entry, actionIdx) => (
            <div
              key={entry.fields.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === entries.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === entries.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={entry.fields.url} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {entry.fields.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  <RichTextContent content={entry.fields.description} />
                </p>
              </div>
              <span
                className="absolute text-gray-300 pointer-events-none right-6 top-6 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </Main>
    </Layout>
  );
}
