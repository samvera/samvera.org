import { LogoCloverIIIF, LogoServerlessIIIF } from "components/home/SVGLogos";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function LogoWrapper({ children }) {
  return <div className="flex items-center justify-start h-16">{children}</div>;
}

export default function AppBanner({ banner }) {
  const {
    bannerImage,
    description,
    githubUrl,
    headline,
    logo,
    name,
    url,
    version,
  } = banner;

  const isSvgLogo = ["Clover IIIF", "Serverless IIIF"].includes(name);

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden isolate bg-gradient-to-b from-samBlue-100/20">
        <div className="pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="max-w-2xl mx-auto">
              <div className="max-w-lg">
                {/* Logo */}
                {isSvgLogo ? (
                  <LogoWrapper>
                    {name === "Clover IIIF" ? (
                      <LogoCloverIIIF />
                    ) : (
                      <LogoServerlessIIIF />
                    )}
                  </LogoWrapper>
                ) : (
                  <Image
                    className={`w-auto h-16`}
                    src={logo}
                    alt={`${name} logo`}
                  />
                )}

                <div className="mt-12 sm:mt-16 lg:mt-12">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex space-x-6"
                  >
                    <span className="px-3 py-1 text-sm font-semibold leading-6 rounded-full text-samGrey bg-samGrey/10 ring-1 ring-inset ring-samGrey/10">
                      Whats new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped {version}</span>
                      <ChevronRightIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-samGreyDark sm:text-5xl swiper-no-swiping">
                  {headline}
                </h1>
                <p className="mt-6 text-lg leading-8 text-samGrey swiper-no-swiping">
                  {description}
                </p>
                <div className="flex items-center mt-8 gap-x-6">
                  <a href={url} className="button">
                    Documentation
                  </a>
                  <a
                    href={githubUrl}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-samBlue [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="max-w-2xl mx-auto md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl">
                      <Image
                        src={bannerImage}
                        alt={`${name} application screenshot`}
                        height={500}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
