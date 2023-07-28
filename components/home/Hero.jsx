import Link from "next/link";
import { prefix } from "prefix";

export default function HomeHero() {
  return (
    <section className="text-white lg:relative bg-samGrey">
      <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-36 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block text-white xl:inline">A vibrant and</span>{" "}
            <span className="block text-samBlue xl:inline">
              welcoming community
            </span>
          </h1>

          <p className="max-w-md pt-0 mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            &ldquo;Samvera&trade; is a vibrant and welcoming community of
            information and technology professionals who share challenges, build
            expertise, and create sustainable, best-in-class solutions, making
            the world’s digital collections accessible now and into the
            future.&rdquo;
          </p>

          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link className="button" href="/get-started/getting-started">
                Get started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                className="button-inverted"
                href="/repository-solutions/applications-demos"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={`${prefix}/images/washu-samvera-group.jpeg`}
          alt=""
        />
      </div>
    </section>
  );
}
