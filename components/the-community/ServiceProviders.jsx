import { useEffect, useState } from "react";

import Breadcrumbs from "components/Breadcrumbs";
import Layout from "../layout/Layout";
import Main from "components/layout/Main";
import RichTextContent from "components/RichTextContent";
import RichTextFromMarkdown from "components/RichTextFromMarkdown";
import getContentful from "lib/get-contentful";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceProviders({ config, content, frontmatter }) {
  const contentful = getContentful();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchEntries() {
      const entries = await contentful.getEntries({
        content_type: "serviceProviderProfile",
      });
      console.log("entries", entries);

      if (!entries.items) {
        return console.error("Error getting entries.");
      }
      setEntries(entries.items);
    }

    fetchEntries();
  }, [contentful]);

  return (
    <Layout title={`${frontmatter.title} - ${config.parentDirLabel} - Samvera`}>
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

      {/* <MarkdownContent content={content} /> */}
      <Main>
        <div className="my-10 overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {entries.map(
            (
              { fields: { descriptionRich, email, logo, name, url } },
              actionIdx
            ) => (
              <div
                key={name}
                className={classNames(
                  actionIdx === 0
                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                    : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === entries?.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === entries?.length - 1
                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                    : "",
                  "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                )}
              >
                <div>
                  <img
                    src={logo?.fields?.file?.url}
                    alt={logo?.fields?.title || ""}
                  />
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-base font-semibold leading-6 ">
                    <a
                      href={url}
                      className="inline-block text-gray-900 focus:outline-none hover:text-gray-900"
                    >
                      <span className="" aria-hidden="true" />
                      {name}
                    </a>
                  </h3>
                  <a href={`mailto:${email}`} className="text-base leading-6 ">
                    {email}
                  </a>
                  <p className="text-gray-500 ">
                    <RichTextContent content={descriptionRich} />
                  </p>
                </div>
                <a
                  href={url}
                  className="absolute text-gray-300 right-6 top-6 group-hover:text-gray-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </a>
              </div>
            )
          )}
        </div>
      </Main>
    </Layout>
  );
}
