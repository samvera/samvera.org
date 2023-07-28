import { prefix } from "prefix";
import { useRef, useEffect } from "react";

import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

const SlideWrapper = ({ children }) => (
  <div className="px-12 py-10 text-center bg-white">
    <div className="mb-4 lowercase font-fontinBold">Applications</div>
    {children}
  </div>
);

const SlideTitle = ({ children }) => (
  <h2 className="text-samDarkRed section-title">{children}</h2>
);

const SlideContent = ({ children }) => (
  <div className="px-5 text-left">{children}</div>
);

export default function Applications() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // Swiper styles inject
    const params = {
      injectStyles: [
        `
    .swiper-button-next svg,
    .swiper-button-prev svg {
      color: #383d3b
    }
      `,
      ],
    };

    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);

  const slides = [
    {
      title: "Institutional Repositories",
      content: (
        <p>
          Samvera is being used as a base for a number of institutional
          repositories (IRs) each of which contains a range of content types.
          Many of the Samvera partners have developed IR with Hyrax. For
          instance, George Washington University, UNC Chapel Hill, the
          University of Hull, UK cultural heritage organisations, and many
          others have an IR containing electronic dissertations and theses
          (ETDs), past examination papers, learning materials, journal articles,
          small datasets and more. For more information visit{" "}
          <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319621/Samvera+Implementations+In-production">
            Samvera Wiki
          </a>{" "}
          Implementations Information Page.
        </p>
      ),
    },
    {
      title: "Media Collections",
      content: (
        <p>
          Avalon, an access platform for online audio and video was developed by
          Indiana University and Northwestern University using the Samvera
          stack. Amongst others, WGBH, a public broadcaster in Boston, the
          University of Virginia, the University of Houston and Washington
          University are utilizing Avalon and Samvera to manage their digital
          media content.
        </p>
      ),
    },
    {
      title: "Solution Bundles",
      content: (
        <>
          <p>
            The <span className="font-cooperBold">Avalon Media System</span> is
            a collaborative Samvera-based project for managing and providing
            online access to digital video and audio. It is now available as a
            Samvera “solution bundle”.
          </p>
          <p>
            <span className="font-cooperBold">Hyku</span> is the result of a
            collaboration to extend the existing Samvera project codebase to
            build, bundle, and promote a feature-rich, robust, flexible digital
            repository that is easy to install, configure, and maintain. &nbsp;
            <a href="https://hyku.samvera.org/">Learn more</a>
          </p>
        </>
      ),
    },
    {
      title: "Data and Preservation",
      content: (
        <>
          <p>
            The Samvera software is being used as the basis for data
            repositories, for instance “Deep Blue Data” at the University of
            Michigan and “Imago” at Indiana University. &nbsp;The Digital
            Repository of Ireland is “a national repository for Ireland’s
            humanities, social sciences and cultural heritage data.”
          </p>
          <p>
            A number of Samvera Partners are investigating the use of our
            software for dealing with the long-term preservation of research
            data. &nbsp;In the UK, the Universities of York and Hull have been
            integrating the open-source preservation system Archivematica into
            their Samvera workflows.
          </p>
        </>
      ),
    },
    {
      title: "Archives and Special Collections",
      content: (
        <p>
          Samvera is being used in conjunction with archives and special
          collections. &nbsp;The University of York in the UK has used it as the
          basis for their Archbishops’ Registers site, providing access to more
          than 20,000 pages of early manuscripts. &nbsp;Princeton University has
          used Samvera to create “Figgy”, a workflow tool for digitizing a wide
          range of formats including archival materials, ephemera, maps, audio,
          and coins.
        </p>
      ),
    },
    {
      title: "Publishing",
      content: (
        <p>
          Fulcrum is a community-based, open source publishing platform based on
          Samvera that helps publishers present their authors’ research outputs
          in a durable, discoverable, accessible and flexible form. It is hosted
          on the University of Michigan library infrastructure, specifically
          designed to curate digital objects. Interoperable with other
          publishing tools and integrated into the information supply chain,
          Fulcrum ensures that content is discovered by readers and impact is
          tracked. Fulcrum aims to implement accessible systems and features and
          effect change by sharing and maintaining a high standard of
          accessibility.
        </p>
      ),
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${prefix}/images/applications-bg.jpeg)` }}
      className="py-16 bg-fixed"
    >
      <div className="max-w-4xl mx-auto">
        <swiper-container
          init="false"
          ref={swiperElRef}
          loop="true"
          navigation="true"
          space-betwee="50"
          slides-per-view="1"
        >
          {slides.map((slide, index) => (
            <swiper-slide key={index}>
              <SlideWrapper>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideContent>{slide.content}</SlideContent>
              </SlideWrapper>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}
