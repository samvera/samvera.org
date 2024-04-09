import React, { useEffect, useRef } from "react";

import AppBanner from "./AppBanner";
import { registerSwiper } from "lib/swiper";
import useFeaturedApps from "hooks/use-featured-apps";

registerSwiper();

const FeaturedAppsSlider = () => {
  const swiperRef = useRef(null);
  const featuredApps = useFeaturedApps();

  useEffect(() => {
    // Set up the Swiper instance
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

    // Clean up, avoid memory leaks
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
    <section className="mb-5 min-h-[80vh]">
      <swiper-container
        init="false"
        ref={swiperRef}
        loop="true"
        pagination="true"
        slides-per-view="1"
        speed="1500"
      >
        {featuredApps.length > 0 &&
          featuredApps.map((slide) => (
            <swiper-slide key={slide.name}>
              <AppBanner banner={slide} />
            </swiper-slide>
          ))}
      </swiper-container>
    </section>
  );
};

export default FeaturedAppsSlider;
