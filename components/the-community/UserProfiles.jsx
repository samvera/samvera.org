import { useEffect, useState } from "react";

import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/layout/Card";
import Layout from "../layout/Layout";
import Main from "components/layout/Main";
import MarkdownContent from "components/MarkdownContent";
import RichTextContent from "components/RichTextContent";
import getContentful from "lib/get-contentful";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserProfilesPage({ config, content, frontmatter }) {
  const contentful = getContentful();
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userProfiles = await contentful.getEntries({
        content_type: "userProfile",
      });

      if (!userProfiles.items) {
        return console.error("Error getting userProfiles.");
      }
      setUserProfiles(userProfiles.items);
    }

    fetchData();
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

      <MarkdownContent content={content} />
      <Main>
        <h2>Community Profiles</h2>
        {userProfiles
          .filter((user) => !user.fields.isManager)
          .map(({ fields: { title, content } }, actionIdx) => (
            <Card key={title} header={title} className="mb-10">
              <RichTextContent content={content} />
            </Card>
          ))}

        <h2 className="pt-12">Manager Profiles</h2>
        {userProfiles
          .filter((user) => user.fields.isManager)
          .map(({ fields: { title, content } }, actionIdx) => (
            <Card key={title} header={title} className="mb-10">
              <RichTextContent content={content} />
            </Card>
          ))}
      </Main>
    </Layout>
  );
}
