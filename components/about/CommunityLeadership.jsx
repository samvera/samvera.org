import Breadcrumbs from "../Breadcrumbs";
import Layout from "../layout/Layout";
import Link from "next/link";
import Main from "../layout/Main";
import MarkdownContent from "../MarkdownContent";

const groups = [
  {
    name: "Samvera Partners",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Samvera Partners are institutions, corporations or other groups that have formally committed to contributing to the Samvera Community. Samvera Partners collectively advance the project and the Community for the benefit of all participants.",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/1872461833/About+Samvera+Partners",
  },
  {    
    name: "Samvera Board",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "The Samvera Board is elected and governs in accordance with the Samvera Bylaws. Board members are individuals nominated and supported in their participation by a Samvera Partner institution. Board elections are held annually for three of nine seats in rotating groups. The term for each seat is three years with the possibility for one re-election, allowing for a total term of six consecutive years.",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/405210594/Samvera+Board+membership",
  },
  {
    name: "Roadmaps Alignment Group",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    // Write some latin text for the bio. It should be a paragraph with 3-5 sentences.
    bio: "The Roadmaps Alignment Group (formerly called Samvera Roadmap Council) works to identify conflicts and areas of alignment between the roadmaps of the Core Components Owners, Hyrax, Hyku, Valkyrie, and Avalon. This group works in consultation with the Metadata Interest Group and Samvera Service Providers. The Group identifies cross-project development opportunities, helps to arrange maintenance sprints, and coordinates communication to the Samvera Community about these activities.",
     url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/422315415/Samvera+Roadmaps+Alignment+Group",
  },
  {
    name: "Interest/Working Groups",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "We have very active working and interest groups that form the heart of our community work. Everyone is welcome to attend to learn more about a specific area of interest and to hear from others in the community.",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319284/Interest+Group+IG+and+Working+Group+WG+Hub",
  },
  {
    name: "Community Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Contact Heather Greer Klein, the Samvera Community Manager, heather@samvera.org to discuss the Community, Samvera technologies, ways to get started, for help or other questions.",
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
            className="grid grid-cols-1 mx-auto list-none gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:gap-x-8 xl:col-span-2 2xl:grid-cols-3"
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
