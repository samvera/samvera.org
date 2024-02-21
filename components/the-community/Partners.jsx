import { useEffect, useState } from "react";

import Breadcrumbs from "components/Breadcrumbs";
import Layout from "../layout/Layout";
import Main from "components/layout/Main";
import MarkdownContent from "components/MarkdownContent";
import useSamveraPartners from "hooks/use-samvera-partners";

export default function SamveraPartners({ config, content, frontmatter }) {
  const { partners } = useSamveraPartners();

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

      <Main>
        <ul className="grid grid-cols-2 gap-4 ml-0 list-none lg:gap-6 lg:px-10 md:grid-cols-3 xl:grid-cols-4">
          {partners.map(({ id, name, url }) => (
            <li key={id} className="text-left">
              {!url && name}
              {url && (
                <a
                  href={url}
                  className="text-samGreyDark hover:text-samDarkRed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
        <hr />

        <MarkdownContent content={content} />
      </Main>
    </Layout>
  );
}
