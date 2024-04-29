import FadeIn from "components/FadeIn";
import Link from "next/link";

export default function Community() {
  return (
    <FadeIn className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Samvera Community
          </h2>
          <div className="mt-6 leading-8 text-gray-600 lg:text-lg">
            <p>
              Samvera is a vibrant, highly active community including more than
              30 Partners who formally support our work and development. Working
              together, members of the Samvera Community create sustainable
              repository solutions based on a common infrastructure, allowing
              the flexibility to tailor solutions to local demands and
              workflows. This provides the foundation for both highly
              customized, extensible repositories as well as turn-key solutions
              that allow adopters to get up and running quickly.
            </p>
          </div>

          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link href="/getting-started" className="button">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
