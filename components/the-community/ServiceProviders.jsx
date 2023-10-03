import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import Breadcrumbs from "components/Breadcrumbs";
import Layout from "../layout/Layout";
import MarkdownContent from "components/MarkdownContent";
import RichTextContent from "components/RichTextContent";
import RichTextFromMarkdown from "components/RichTextFromMarkdown";
import getContentful from "lib/get-contentful";

const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Payroll",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

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

      <div className="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {entries.map(
          ({ fields: { description, email, logo, name, url } }, actionIdx) => (
            <div
              key={name}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                {/* <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white"
                )}
              >
                <action.icon className="w-6 h-6" aria-hidden="true" />
              </span> */}
                {logo?.fields?.file?.url && (
                  <img
                    src={logo.fields.file.url}
                    alt={logo.fields.title}
                    className="w-48"
                  />
                )}
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={url} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  <RichTextFromMarkdown content={description} />
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
          )
        )}
      </div>
    </Layout>
  );
}
