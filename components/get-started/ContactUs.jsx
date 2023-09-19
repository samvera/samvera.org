import Layout from "components/layout/Layout";
import Main from "components/layout/Main";
import Breadcrumbs from "components/Breadcrumbs";
import MarkdownContent from "components/MarkdownContent";
import Link from "next/link";

const contactCards = [
  {
    title: "Community Manager",
    linkText: "heather@samvera.org",
    linkUrl: "mailto:heather@samvera.org",
    description:
      "For questions about the Samvera Community or how to get involved, contact the Samvera Community Manager, Heather Greer Klein",
  },
  {
    title: "Samvera Board",
    linkText: "board@samvera.org",
    linkUrl: "mailto:board@samvera.org",
    description: "Contact the Samvera Board",
  },
  {
    title: "Code of Conduct",
    linkText: "incident-responders@samvera.org",
    linkUrl: "mailto:incident-responders@samvera.org",
    description: `To report a <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405212316/Samvera+Code+of+Conduct+and+Anti-Harassment+Policy">Code of Conduct</a> violation`,
  },
  {
    title: "Service Providers",
    linkText: "Service Providers page",
    linkUrl: "/the-community/service-providers",
    description: `For hosted solutions, Requests for Proposals, or contracted work`,
  },
];

export default function ContactUs({ config, content, frontmatter }) {
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

        {/* <h1>{frontmatter.title}</h1> */}
        <MarkdownContent content={content} />

        <div className="py-8">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Get in touch
                  </h2>
                  <p className="mt-4 leading-7 text-gray-600">
                    Contact the Samvera Community via the following links.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  {contactCards.map((card) => (
                    <div
                      key={card.title}
                      className="p-10 rounded-2xl bg-gray-50"
                    >
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        {card.title}
                      </h3>
                      <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>
                            <Link
                              className="font-semibold "
                              href={card.linkUrl}
                            >
                              {card.linkText}
                            </Link>
                            <p
                              className="mt-3"
                              dangerouslySetInnerHTML={{
                                __html: card.description,
                              }}
                            ></p>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
