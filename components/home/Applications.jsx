import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SlideWrapper = ({ children }) => (
  <div className="bg-white text-center py-10 px-12">
    <div className="lowercase mb-4 font-fontinBold">Applications</div>
    {children}
  </div>
);

const SlideTitle = ({ children }) => (
  <h2 className="text-samDarkRed section-title">{children}</h2>
);

const SlideContent = ({ children }) => (
  <div className="text-left px-5">{children}</div>
);

export default function Applications() {
  return (
    <section
      style={{ backgroundImage: "url(/images/applications-bg.jpeg)" }}
      className="py-16 bg-fixed"
    >
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Institutional Repositories</SlideTitle>
              <SlideContent>
                <p>
                  Samvera is being used as a base for a number of institutional
                  repositories (IRs) each of which contains a range of content
                  types. Many of the Samvera partners have developed IR with
                  Hyrax. For instance, George Washington University, UNC Chapel
                  Hill, the University of Hull, UK cultural heritage
                  organisations, and many others have an IR containing
                  electronic dissertations and theses (ETDs), past examination
                  papers, learning materials, journal articles, small datasets
                  and more. For more information visit{" "}
                  <a href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/422319621/Samvera+Implementations+In-production">
                    Samvera Wiki
                  </a>{" "}
                  Implementations Information Page.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Media Collections</SlideTitle>
              <SlideContent>
                <p>
                  Avalon, an access platform for online audio and video was
                  developed by Indiana University and Northwestern University
                  using the Samvera stack. Amongst others, WGBH, a public
                  broadcaster in Boston, the University of Virginia, the
                  University of Houston and Washington University are utilizing
                  Avalon and Samvera to manage their digital media content.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Solution Bundles</SlideTitle>
              <SlideContent>
                <p>
                  The{" "}
                  <span className="font-cooperBold">Avalon Media System</span>{" "}
                  is a collaborative Samvera-based project for managing and
                  providing online access to digital video and audio. It is now
                  available as a Samvera “solution bundle”.
                </p>
                <p>
                  <span className="font-cooperBold">Hyku</span> is the result of
                  a collaboration to extend the existing Samvera project
                  codebase to build, bundle, and promote a feature-rich, robust,
                  flexible digital repository that is easy to install,
                  configure, and maintain. &nbsp;Hyku is a solution bundle that
                  can be installed locally or run in the cloud.&nbsp; It is
                  based on <span className="font-cooperBold">Hyrax,</span>
                  &nbsp;a Community-developed Ruby gem that allows users to
                  design and build their own, customized installation of our
                  software.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Data and Preservation</SlideTitle>
              <SlideContent>
                <p>
                  The Samvera software is being used as the basis for data
                  repositories, for instance “Deep Blue Data” at the University
                  of Michigan and “Imago” at Indiana University. &nbsp;The
                  Digital Repository of Ireland is “a national repository for
                  Ireland’s humanities, social sciences and cultural heritage
                  data.”
                </p>
                <p>
                  A number of Samvera Partners are investigating the use of our
                  software for dealing with the long-term preservation of
                  research data. &nbsp;In the UK, the Universities of York and
                  Hull have been integrating the open-source preservation system
                  Archivematica into their Samvera workflows.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Archives and Special Collections</SlideTitle>
              <SlideContent>
                <p>
                  Samvera is being used in conjunction with archives and special
                  collections. &nbsp;The University of York in the UK has used
                  it as the basis for their Archbishops’ Registers site,
                  providing access to more than 20,000 pages of early
                  manuscripts. &nbsp;Princeton University has used Samvera to
                  create “Figgy”, a workflow tool for digitizing a wide range of
                  formats including archival materials, ephemera, maps, audio,
                  and coins.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideTitle>Publishing</SlideTitle>
              <SlideContent>
                <p>
                  Fulcrum is a community-based, open source publishing platform
                  based on Samvera that helps publishers present their authors’
                  research outputs in a durable, discoverable, accessible and
                  flexible form. It is hosted on the University of Michigan
                  library infrastructure, specifically designed to curate
                  digital objects. Interoperable with other publishing tools and
                  integrated into the information supply chain, Fulcrum ensures
                  that content is discovered by readers and impact is tracked.
                  Fulcrum aims to implement accessible systems and features and
                  effect change by sharing and maintaining a high standard of
                  accessibility.
                </p>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
