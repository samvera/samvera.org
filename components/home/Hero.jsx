import React from "react";

export default function HomeHero() {
  return (
    <section className="lg:relative bg-samGrey text-white">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">A vibrant and</span>{" "}
            <span className="block text-samBlue xl:inline">
              welcoming community
            </span>
          </h1>

          <p className="pt-0 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            "Samvera&trade; is a vibrant and welcoming community of information
            and technology professionals who share challenges, build expertise,
            and create sustainable, best-in-class solutions, making the world’s
            digital collections accessible now and into the future."
          </p>

          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="button">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="button-inverted">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/washu-samvera-group.jpeg"
          alt=""
        />
      </div>
    </section>
  );
}
