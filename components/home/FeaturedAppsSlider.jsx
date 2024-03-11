import React, { useEffect, useRef } from "react";

import MockTailwindBanner from "./MockTailwindBanner";
import avalonLogo from "/assets/featured-repo-banners/logo-avalon.png";
import avalonScreen from "/assets/featured-repo-banners/avalon.png";
import cloverIIIFSceen from "/assets/featured-repo-banners/clover-iiif.png";
import hykuLogo from "/assets/featured-repo-banners/logo-hyku.png";
import hykuSceen from "/assets/featured-repo-banners/hyku2.png";
import hyraxLogo from "/assets/featured-repo-banners/logo-hyrax.png";
import hyraxSceen from "/assets/featured-repo-banners/hyrax2.png";
import { registerSwiper } from "lib/swiper";
import serverlessIIIFSceen from "/assets/featured-repo-banners/serverless-iiif.png";

registerSwiper();

const slides = [
  {
    bgImg: avalonScreen,
    description:
      "Avalon Media System is a free, open source software system for managing and providing access to large collections of digital audio and video.",
    githubUrl: "https://github.com/avalonmediasystem/avalon/",
    headline: "Media management for teaching, learning and research",
    logo: avalonLogo,
    name: "Avalon Media System",
    url: "https://www.avalonmediasystem.org/",
    version: "7.7",
  },
  {
    bgImg: cloverIIIFSceen,
    description:
      "Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source.",
    githubUrl: "https://github.com/samvera-labs/clover-iiif",
    headline: "Showcase IIIF Manifests as interoperable web content",
    logo: null,
    name: "Clover IIIF",
    url: "https://samvera-labs.github.io/clover-iiif/",
    version: "2.3.1",
  },
  {
    bgImg: hykuSceen,
    description:
      "Hyku is a digital repository that provides a robust and flexible platform for institutions to manage, preserve, and provide access to digital content.",
    githubUrl: "https://github.com/hybox",
    headline: "The next-generation repository solution",
    logo: hykuLogo,
    name: "Hyku",
    url: "https://hyku.samvera.org/",
    version: "7.7",
  },
  {
    bgImg: hyraxSceen,
    description:
      "Hyrax is a repository solution that allows deposit of content via configurable workflows; description with customizable metadata; and user-level control over that content.",
    githubUrl: "https://github.com/samvera/hyrax",
    headline: "An open-source, Samvera-powered repository front-end",
    logo: hyraxLogo,
    name: "Hyrax",
    url: "https://hyrax.samvera.org/",
    version: "5.0.0",
  },
  {
    bgImg: serverlessIIIFSceen,
    description:
      "A cost-effective, infinitely scalable IIIF Image API v2.1 and v3.0 compliant service packaged as an AWS Serverless Application with minimum setup and no maintenance. Suitable for large institutional collections or small digital humanities projects. ",
    githubUrl: "https://github.com/samvera/serverless-iiif",
    headline: "Fast, zoomable images without servers",
    logo: null,
    name: "Serverless IIIF",
    url: "https://samvera.github.io/serverless-iiif/",
    version: "5.0.2",
  },
];

const FeaturedAppsSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const refCurrent = swiperRef.current;
    const params = {
      autoplay: {
        delay: 6000,
      },
      injectStyles: [
        `
        @media (max-width: 640px) {
          .swiper-button-next svg,
          .swiper-button-prev svg {
            display: none;
          }
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          color: #383d3b
        }

        .swiper-pagination-bullet-active {
          background-color: #383d3b;
        }

        swiper-slide {
          user-select: auto !important;
          -webkit-user-select: auto !important;
          -moz-user-select: auto !important;
          -ms-user-select: auto !important;
        }
      `,
      ],
    };

    Object.assign(refCurrent, params);
    refCurrent.initialize();

    refCurrent.addEventListener("click", handleSlideClick);

    return () => {
      refCurrent.removeEventListener("click", handleSlideClick);
    };
  }, []);

  function handleSlideClick(pointerEvent) {
    const clickedOnSelectableText =
      pointerEvent.target.className.includes("swiper-no-swiping");

    if (clickedOnSelectableText) return;

    const swiper = swiperRef.current.swiper;
    const clickedOnLeftHalf = pointerEvent.x < swiper.width / 2;

    if (clickedOnLeftHalf) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }

  return (
    <section className="">
      <swiper-container
        init="false"
        ref={swiperRef}
        loop="true"
        pagination="true"
        slides-per-view="1"
        speed="1500"
      >
        {slides.map((slide) => (
          <swiper-slide key={slide.name}>
            <MockTailwindBanner banner={slide} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default FeaturedAppsSlider;
