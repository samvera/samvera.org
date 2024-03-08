import "pure-react-carousel/dist/react-carousel.es.css";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import MockTailwindBanner from "./MockTailwindBanner";
import React from "react";
import avalonLogo from "/assets/featured-repo-banners/logo-avalon.png";
import hykuLogo from "/assets/featured-repo-banners/logo-hyku.png";
import hykuSceen from "/assets/featured-repo-banners/hyku1.png";
import hyraxLogo from "/assets/featured-repo-banners/logo-hyrax.png";
import logo from "/assets/featured-repo-banners/logo-serverless-iiif.svg";
import { registerSwiper } from "lib/swiper";

registerSwiper();

const slides = [
  {
    bgImg: hykuSceen,
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
    bgImg: hykuSceen,
    description: "",
    githubUrl: "#",
    headline: "",
    logo: hyraxLogo,
    name: "Clover IIIF",
    url: "",
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
    bgImg: hykuSceen,
    description: "",
    githubUrl: "#",
    headline: "",
    logo: hyraxLogo,
    name: "Hyrax",
    url: "",
    version: "1.2.3",
  },
  {
    bgImg: hykuSceen,
    description: "",
    githubUrl: "#",
    headline: "",
    logo: hyraxLogo,
    name: "Serverless IIIF",
    url: "",
    version: "1.2.3",
  },
];

const FeaturedAppsSlider = () => {
  return (
    <section className="mt-10">
      <swiper-container
        autoplay="true"
        loop="true"
        slides-per-view="1"
        speed="500"
      >
        {slides.map((slide) => (
          <swiper-slide key={slide.name}>
            <MockTailwindBanner banner={slide} />
          </swiper-slide>
        ))}
      </swiper-container>
      {/* <CarouselProvider
        infinite={true}
        interval={3000}
        isPlaying={true}
        naturalSlideWidth={16}
        naturalSlideHeight={12}
        totalSlides={slides.length}
        visibleSlides={1}
      >
        <div className="grid grid-cols-12 pb-10 border-b border-gray-200">
          <div className="flex flex-col justify-center col-span-1 justify-self-start">
            <ButtonBack className="p-0 ml-5">
              <ChevronLeftIcon className="w-8 h-8" />
            </ButtonBack>
          </div>
          <div className="col-span-10">
            <Slider>
              {slides.map(({ bgImg, alt, description, logo }, index) => (
                <Slide key={index} index={index}></Slide>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col justify-center col-span-1 justify-self-end">
            <ButtonNext className="p-0 mr-5">
              <ChevronRightIcon className="w-8 h-8" />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider> */}

      {/* <div className="relative flex flex-col justify-end isolate aspect-video">
        <Image
          src={hykuSceen}
          alt={"hey"}
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <div className="absolute bottom-0 w-full bg-white h-2/3 bg-gradient-to-b from-transparent to-white bg-opacity-20"></div>
        <p className="relative z-10 max-w-lg mx-auto mt-3 text-lg text-center ">
          Avalon Media System is a free, open source software system for
          managing and providing access to large collections of digital audio
          and video.
        </p>
      </div> */}
    </section>
  );
};

export default FeaturedAppsSlider;
