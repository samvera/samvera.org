import Breadcrumbs from "../Breadcrumbs";
import Layout from "../layout/Layout";
import Link from "next/link";
import Main from "../layout/Main";
import MarkdownContent from "../MarkdownContent";

const groups = [
  {
    name: "Samvera Board",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/405210594/Samvera+Board+membership",
  },
  {
    name: "Roadmaps Alignment Group",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    // Write some latin text for the bio. It should be a paragraph with 3-5 sentences.
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.",
  },
  {
    name: "Product Leadership",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.",
  },
  {
    name: "Interest/Working Groups",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.",
  },
  {
    name: "Community Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.",
  },
];

export default function CommunityLeadership({ config, content, frontmatter }) {
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

        <div className="pt-8 pb-10 mx-auto">
          <ul
            role="list"
            className="grid grid-cols-1 mx-auto gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:gap-x-8 xl:col-span-2 2xl:grid-cols-3"
          >
            {groups.map((group) => (
              <li
                key={group.name}
                className="pb-2 bg-white rounded-lg shadow-xl"
              >
                {/* <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={group.imageUrl}
                  alt=""
                /> */}
                <div className="px-5 pb-4">
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    {group.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {group.bio}
                  </p>
                  {group.url && <Link href={group.url}>Learn more</Link>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  );
}
