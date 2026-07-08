import Image from "next/image";
import Link from "next/link";
import groupPhoto from "../../public/images/washu-samvera-group.jpeg";

const lead =
  "Every director who funds a repository has to answer two questions to a provost or a board. Will the platform still be supported in five years, and who decides where it goes? Samvera makes both answerable in the open. The software (Hyku, Hyrax, Avalon) is free to download and run on your own terms. What you fund is the community that maintains it, sets its direction, and keeps it here.";

const bodyOne =
  "For consortia, one Samvera platform runs many institutions from a single installation, each with its own branding, access controls, and configuration, so the cost of shared infrastructure is shared across members. That's how most of the community already runs it.";

const bodyTwo =
  "Your collections live in documented, interoperable standards (Dublin Core, IIIF, OAI-PMH, RDF), so your description and metadata stay yours and stay portable. Host it yourself or choose any service provider. You're never locked to one.";

export default function HomeHero() {
  return (
    <section className="text-white lg:relative bg-samGrey">
      <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-36 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            <span className="block text-white xl:inline">
              Repository infrastructure your institution helps steer,
            </span>{" "}
            <span className="block text-samBlue xl:inline">
              funded to outlast the next budget cycle.
            </span>
          </h1>

          <p className="max-w-md pt-0 mx-auto mt-5 text-lg text-gray-300 md:max-w-3xl">
            {lead}
          </p>

          <p className="max-w-md mx-auto mt-4 text-base text-gray-300 md:max-w-3xl">
            {bodyOne}
          </p>

          <p className="max-w-md mx-auto mt-4 text-base text-gray-300 md:max-w-3xl">
            {bodyTwo}
          </p>

          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link className="button" href="/the-community/samvera-partners">
                See the case for Samvera Partnership
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                className="button-inverted"
                href="/get-started/getting-started"
              >
                Get started with repository solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={groupPhoto}
          alt="Samvera Connect group photo"
        />
      </div>
    </section>
  );
}
