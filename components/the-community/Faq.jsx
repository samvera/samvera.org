import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

import Breadcrumbs from "../Breadcrumbs";
import { Disclosure } from "@headlessui/react";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import MarkdownContent from "../MarkdownContent";
import React from "react";
import RichTextContent from "components/RichTextContent";
import getContentful from "lib/get-contentful";

const FAQItem = ({ children }) => {
  return (
    <Disclosure as="div" className="pt-6">
      {children}
    </Disclosure>
  );
};

const Question = ({ children, open }) => {
  return (
    <dt>
      <Disclosure.Button className="flex items-start justify-between w-full px-0 text-left bg-transparent hover:bg-transparent">
        <span className="text-base font-semibold leading-7">{children}</span>
        <span className="flex items-center ml-6 h-7">
          {open ? (
            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
          )}
        </span>
      </Disclosure.Button>
    </dt>
  );
};

const Answer = ({ children }) => {
  return (
    <Disclosure.Panel
      as="dd"
      className="pr-12 mt-2 text-base leading-7 text-samGrey"
    >
      {children}
    </Disclosure.Panel>
  );
};

export default function Faq({ config, content, frontmatter }) {
  const contentful = getContentful();
  const [faqs, setFaqs] = React.useState([]);

  React.useEffect(() => {
    async function fetchEntries() {
      const entries = await contentful.getEntries({
        content_type: "faq",
      });

      if (!entries.items) {
        return console.error("Error getting entries.");
      }
      setFaqs(entries.items);
    }

    fetchEntries();
  }, [contentful]);

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

        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx}>
              {({ open }) => (
                <>
                  <Question open={open}>{faq.fields.question}</Question>
                  <Answer>
                    <RichTextContent content={faq.fields.answer} />
                  </Answer>
                </>
              )}
            </FAQItem>
          ))}
          {/* <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>What is Samvera?</Question>
                <Answer>
                  <p>
                    Samvera is an Icelandic word meaning “togetherness.” The
                    Samvera Community is a global community of technologists who
                    create and maintain repository software; you can’t install
                    Samvera, but you can install the repository solutions we
                    develop together including{" "}
                    <a href="https://www.avalonmediasystem.org/">
                      Avalon Media System
                    </a>
                    , <a href="https://www.hyrax.samvera.org/">Hyrax</a>, and{" "}
                    <a href="https://www.hyku.samvera.org/">Hyku</a>.
                    Institutions around the world rely on Samvera Community
                    supported software to provide access to their digital
                    content.
                  </p>
                  <p>
                    Samvera is also a community of practice where software
                    developers and library technologists can support and learn
                    from one another. We have active participation from metadata
                    specialists, repository managers, user experience
                    professionals, and others who contribute their expertise to
                    ensure the software stays relevant and responsive to
                    changing needs.
                  </p>

                  <p>
                    Samvera software is free and open source, available under an
                    Apache 2 license.  It offers flexible and rich user
                    interfaces tailored to distinct content types on top of a
                    robust back end – giving adopters the best of both worlds.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  Why use Samvera repository solutions?
                </Question>
                <Answer>
                  <p>
                    We believe that no single repository system can provide the
                    full range of repository-based solutions for a given
                    institution’s needs; likewise, no single institution can
                    resource the development of a full range of solutions on its
                    own. Samvera Community open-source repository solutions are
                    built collaboratively to address a broad range of repository
                    needs. Rather than being one-size-fits-all, Samvera
                    leverages an ecosystem of components that lets institutions
                    assemble and deploy robust and durable repository
                    applications that are tailored to their users&#39; needs and
                    workflows.
                  </p>
                  <p>
                    Drawing on hard lessons learned in the past about developing
                    software locally rather than working with others, the
                    Samvera Community ensures that multiple hands are in play to
                    keep the software growing and improving. While many systems
                    offer specific abilities to deposit, manage, deliver or
                    preserve digital content, the Samvera Community looks to
                    provide effective combination of these tasks to enable
                    flexible, extensible solutions that can contribute to a
                    wider content management and preservation environment.
                    Managing digital collections in this way provides the
                    content with its context and value over time and reduces the
                    work and cost of maintaining it. We could create our own
                    individual stand-alone systems, but we&#39;d be doing them
                    by ourselves. The expense of maintaining something custom in
                    the long-run, would, we believe, outstrip the costs of
                    participating in the Samvera Community effort.
                  </p>
                  <p>
                    As a grass-roots, open-source software producer, the Samvera
                    Community is accountable only to its users, which ensures
                    its sustainability. This is in part a response to concerns
                    raised about commercial software producers, which are liable
                    to alter or even eliminate products based on profitability
                    rather than the values of the cultural heritage and research
                    communities.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>Who uses Samvera, and what for?</Question>
                <Answer>
                  <p>
                    Read about{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319621/Samvera+Implementations+in+production">
                      implementations of Samvera
                    </a>{" "}
                    on our wiki.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  How is the Samvera Community governed?
                </Question>
                <Answer>
                  <p>
                    Samvera is a community, and, as such, it is governed by
                    members of the community. The{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/1872461833/About+Samvera+Partners">
                      Samvera Partners
                    </a>{" "}
                    are at the heart of how Samvera operates. They encompass
                    groups that coordinate effort across multiple institutions
                    and development efforts. These include the Board, the
                    Roadmap Alignment Group and the Component Maintenance Group,
                    as well as project-specific teams that focus on particular
                    efforts such as the Avalon Media System, Hyrax, and Hyku
                    solution bundles.
                  </p>
                  <p>
                    The Samvera Board is an elected body of nine members of the
                    Samvera Partners, with three members cycling off and on each
                    year. The Board takes on responsibility for the
                    organizational aspects of the Samvera Community, including
                    legal and financial management, and development of internal
                    Community policies.
                  </p>
                  <p>
                    All technical work is carried out according to the{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211354/Samvera+Community+Principles">
                      Samvera Community Principles
                    </a>
                    .
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  What do you mean when you say you are part of a community?
                   How does that work?
                </Question>
                <Answer>
                  <p>
                    The people involved in developing ideas and software within
                    the Samvera Community are also those using the solutions
                    created. They thus have a close understanding of the needs.
                    Participation in the Samvera Community is invited at
                    different levels: organizations can join as Partners or
                    Adopters. Partners take a more active and formal role in the
                    development of Samvera, but all are welcome to contribute as
                    they can. Contributing to the community can take many forms:
                    developing the codebase, developing metadata, contributing
                    to documentation and outreach efforts, or simply adopting
                    the Samvera technology and communicating about that
                    experience. The Samvera Community has multiple open{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319284/Interest+Group+IG+and+Working+Group+WG+Hub">
                      Interest and Working Groups
                    </a>{" "}
                    managing the community itself and contributing at various
                    levels to the development of its outputs. Work is managed in
                    concert with other users to ensure that the Samvera
                    technology meets as many shared needs as possible.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  How can I connect with the Samvera Community and stay up to
                  date on events and developments?
                </Question>
                <Answer>
                  <p>
                    There are several ways to connect with the Samvera
                    Community, and you can find them all on our{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211682/Getting+Started+in+the+Samvera+Community">
                      Getting Started wiki page
                    </a>
                    . Newcomers to the community are encouraged to join the{" "}
                    <a href="https://groups.google.com/g/samvera-community">
                      Samvera Community Google Group
                    </a>{" "}
                    and participate in Samvera on Slack. Samvera Partner
                    institutions are encouraged to join the{" "}
                    <a href="https://groups.google.com/g/samvera-partners">
                      Samvera Partners Google Group
                    </a>
                    . Samvera channels on Slack are open for anyone to follow.
                    Slack #general covers issues pertinent to the community at
                    large, whilst for developers there is Slack #dev. There is
                    also a specific channel for those interested in attending
                    our annual Samvera Connect conference, Slack #connect. The{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/overview?mode=global">
                      Samvera wiki
                    </a>{" "}
                    provides a lot of additional detailed information on Samvera
                    Community activity and its &#39;
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211682/Get+in+touch">
                      Get in touch!
                    </a>
                    &#39; page contains a fuller list of our communication
                    channels .
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  What is the purpose of Samvera Connect and other in-person
                  meetings of the Samvera Community?
                </Question>
                <Answer>
                  <p>
                    Face-to-face community events maximize the value of
                    participation in Samvera by providing opportunities for
                    Adopters to share local efforts and benefit from the vast
                    experience and expertise of others in shared knowledge and
                    practice.  In-person community events are staff development,
                    training, and networking opportunities all rolled into one.
                    By investing in staff attendance at Samvera Connect and
                    other meetings, an organization can be assured that staff
                    members are supported to learn skills and gain expertise
                    that directly impacts the development and delivery of their
                    Samvera-based repository.  
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  How do you ensure that everyone can participate in the Samvera
                  Community?
                </Question>
                <Answer>
                  <p>
                    The Samvera Community takes the inclusion of everyone who
                    wishes to participate very seriously. A{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405212316/Code+of+Conduct">
                      Code of Conduct
                    </a>{" "}
                    and{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211680/Anti-Harassment+Policy">
                      Anti-Harassment Policy
                    </a>{" "}
                    has been published, and a community group of{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211681/Samvera+Community+Helpers">
                      Samvera Helpers
                    </a>{" "}
                    provides an email address and individual contact points
                    where any behavior that is not in keeping with Samvera’s
                    principles can be flagged for attention and action. This
                    approach is applied within both the physical and virtual
                    channels through which community members interact.
                  </p>
                  <p>
                    The continuing need to find ways of enabling
                    under-represented groups within our wider sector to
                    participate in Samvera’s work is an ongoing responsibility
                    of the Samvera Partners.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  Where can I download and try Samvera repository solutions?
                </Question>
                <Answer>
                  <p>
                    There are many ways to see what Samvera Community
                    repositories can do:
                  </p>
                  <ul>
                    <li>
                      Try out Avalon Media System on the{" "}
                      <a href="https://www.avalonmediasystem.org/try-out-avalon">
                        Avalon Demo site
                      </a>
                    </li>

                    <li>
                      See Hyrax in action on the{" "}
                      <a href="https://dev.nurax.samvera.org/">
                        Hyrax development site
                      </a>
                    </li>

                    <li>
                      See the{" "}
                      <a href="https://repo.samvera.org/">
                        Samvera Community Repository
                      </a>{" "}
                      for an example of a Hyku tenant
                    </li>

                    <li>
                      Watch the{" "}
                      <a href="https://youtube.com/playlist?list=PLvnoImgmm7Cf6K3ZdMiXDSwxhmfN6sQJq">
                        latest Samvera technology and repository demo videos on
                        YouTube
                      </a>
                    </li>

                    <li>
                      Check out the repository examples below or{" "}
                      <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319621/Samvera+Implementations+in+production">
                        view the full list of known repositories using Samvera
                        Community-supported technologies
                      </a>{" "}
                      on the Samvera wiki to learn more about the specific
                      repository solutions they use and other implementation
                      details.
                    </li>
                  </ul>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  What does it cost to implement Samvera?
                </Question>
                <Answer>
                  <p>
                    Samvera software is free and open-source, but you will have
                    your own ongoing support and maintenance costs for your
                    repository implementation. Depending on the complexity and
                    degree of local customization you require in your
                    implementation, areas of cost to your institution may
                    include:
                  </p>
                  <ul>
                    <li>
                      Staff time in development, repository management, and
                      digital infrastructure
                    </li>
                    <li>Outsourcing of development, hosting, and support</li>
                    <li>
                      Staff contributions to the Samvera Community in the way of
                      participating in Samvera Working Groups and attending
                      Samvera Connect
                    </li>
                  </ul>
                  <p>
                    Most adopting institutions have a minimum of one developer,
                    one metadata librarian, and one manager investing
                    significant time in the Samvera instance.
                  </p>
                  <p>
                    Devoting resources to development using Ruby on Rails is a
                    requirement, whether that be provided in-house or through
                    one of the{" "}
                    <a href="https://samvera.org/the-community/service-providers">
                      service providers
                    </a>{" "}
                    that support Samvera, in order to capitalise on the
                    flexibility that Samvera offers.
                  </p>
                  <p>
                    Implementing Samvera represents a valuable investment in the
                    durability of your digital collections, and this comes with
                    a commitment to the work involved in building the solution
                    that’s right for you.
                  </p>
                  <p>
                    Implementing Samvera is also an important investment in the
                    future of sustainable, values-driven, open-source technology
                    for scholarly communication and cultural heritage. Learn
                    more about{" "}
                    <a href="https://samvera.org/get-started/getting-started">
                      getting started with Samvera
                    </a>{" "}
                    on our website. Follow{" "}
                    <a href="https://samvera.org/news-events/">
                      News &amp; Events
                    </a>{" "}
                    to keep in the loop about learning and training
                    opportunities.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  I have developed code that could be of use to Samvera.  How
                  can I share this with others?
                </Question>
                <Answer>
                  <p>
                    Firstly, thank you for considering sharing your work with
                    Samvera, it’s very much appreciated. There is guidance on
                    making technical contributions to Samvera available on our{" "}
                    <a href="https://samvera.github.io/tag_community.html">
                      Documentation
                    </a>{" "}
                    site.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  How do we know Samvera will be around in 5 or 10 years?
                </Question>
                <Answer>
                  <p>
                    Samvera leverages the convening power of institutions, which
                    outlasts the ebb and flow of vendor cycles. Since the
                    founding of the Samvera Community in 2008, Partner
                    institutions have made substantial investments, both
                    financially and in terms of staff time, in the Samvera
                    Community and technologies. There are now over thirty
                    Partners who have contributed to sustainability-minded
                    investments including funding to enable the hiring of a
                    Community Manager; moving to a 501(c)6 foundation model; and
                    moving to a fully elected Board.
                  </p>
                  <p>
                    These investments, in addition to the steadily growing
                    number of Samvera Adopters, testify to the durability of
                    Samvera as an avenue toward the future of accessible,
                    open-access scholarly communications and digital
                    preservation of our cultural heritage. The goal of the
                    Samvera community is to be a more sustainable long-term
                    solution than commercial options.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  Is there an exit strategy for me when I need to move to a
                  different technology?
                </Question>
                <Answer>
                  <p>
                    We know that nothing lasts forever and that some of our
                    community will probably wish to move on to other,
                    non-Samvera solutions in time.  In keeping with Samvera’s
                    use of open source components, it is important that the
                    content being managed should be openly transferable to
                    facilitate its management over time regardless of the
                    software being used.  To support this Samvera is developing
                    bulk import and export capability: the latter will allow the
                    contents of a Samvera repository to be exported in a way
                    that might be migrated to other platforms.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  I have heard the terms Hydra, Hyrax, Hyku, and HyBox
                  associated with Samvera what do they all mean?
                </Question>
                <Answer>
                  <p>
                    Samvera started as the Hydra Project in 2008, and changed to
                    its current name in 2017: this change was community-led and
                    based on a vote taken among members of the Community. For a
                    history of the development of Samvera from its Hydra roots,
                    see the{" "}
                    <a href="https://insights.uksg.org/articles/10.1629/uksg.383/">
                      article published in Insights
                    </a>{" "}
                    in November 2017.
                  </p>
                  <p>
                    Hyrax utilizes the Samvera framework to provide Adopters and
                    Partners with a base-level institutional repository (IR)
                    solution that can be customized. Hyrax combines the best
                    parts from individual implementations of Samvera software
                    into a common solution. It continues to evolve as new ideas
                    and practices emerge from the community and are taken on
                    through the{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/496632287/Hyrax+Interest+Group">
                      Hyrax Interest Group
                    </a>
                    .
                  </p>
                  <p>
                    Hyku is the product release from the Hydra-in-a-Box (HyBox)
                    project and it is built using Hyrax as its basis. Hyku is
                    designed to reduce barriers to effective asset management
                    and preservation for collections and content types of many
                    kinds, and is of particular interest to hosted service
                    providers and consortia. The{" "}
                    <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/419533203/Samvera+Hyku+Interest+Group">
                      Hyku Interest Group
                    </a>{" "}
                    has a group of service providers and institutions exploring
                    how Hyku can be utilized to serve a range of repository
                    service needs.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  My institution is moving more and more into the cloud.  Can I
                  have Samvera in the cloud?
                </Question>
                <Answer>
                  <p>
                    Hyku was created specifically to work in the cloud as a
                    multi-tenanted solution for delivering repository solutions.
                    Several Samvera repositories are also deployed or partially
                    deployed via Amazon Web Services (AWS). Amazon Machine
                    Images (AMIs), docker storage, and other cloud-friendly
                    technologies are being used to support Samvera deployment
                    and components of Samvera solution bundles. For example: the{" "}
                    <a href="http://www.avalonmediasystem.org/project">
                      Avalon
                    </a>{" "}
                    Media System, an implementation of the Samvera framework
                    focused on media content, is fully deployable in AWS and
                    uses AWS transcoding to create multiple bitrate versions of
                    uploaded content.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem>

          <FAQItem>
            {({ open }) => (
              <>
                <Question open={open}>
                  What does Samvera offer that DSpace, EPrints, ContentDM,
                  Islandora, etc. do not? What makes the Samvera approach to
                  repositories stand out?
                </Question>
                <Answer>
                  <p>
                    Many repository systems offer useful features to meet
                    repository needs. As well as offering a proven open-source
                    solution, Samvera comes with an active, engaged community to
                    work with on shared development to improve the technologies
                    and modify them as required to integrate new tools and
                    functions. Members of the community are always available
                    through the Samvera Slack channels or through our Google
                    Groups and are always willing to answer queries where they
                    can. Samvera offers flexibility in managing different types
                    of digital assets, including audiovisual and geospatial
                    data. It provides the ability to curate and build exhibits
                    from a single database. And it offers the flexibility to
                    start small and plan to grow, in stages that you can manage
                    in line with your needs and budget.
                  </p>
                  <p>
                    The Samvera Community believes that no single system can
                    provide the full range of repository-based solutions for a
                    given institution’s needs and that no single institution can
                    resource the development of a full range of solutions on its
                    own. On that basis we see value primarily in working
                    together to achieve our goals through the development of
                    shared solutions that can be adapted to meet local needs.
                  </p>
                  <p>
                    Samvera acknowledges that there are different approaches
                    that can be taken in the application of technologies to
                    create repository solutions. We welcome the broader sharing
                    of experience in applying technologies in different ways.
                    What can be achieved with developments in technology will
                    continue to evolve, and coming together to share the
                    benefits of these developments will, we believe, continue to
                    serve all involved in curating digital collections.
                  </p>
                </Answer>
              </>
            )}
          </FAQItem> */}
        </dl>
      </Main>
    </Layout>
  );
}
