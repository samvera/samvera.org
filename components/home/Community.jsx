import FadeIn from "components/FadeIn";
import Link from "next/link";

const bodyOne = `The honest answer to "will this still be funded and supported in five years" is that you can check before you spend anything. Samvera publishes how it's governed and who steers it. Direction runs through a Board of Directors, the Roadmaps Alignment Group, and working groups that set priorities in the open. OASIS hosts Samvera as its neutral organizational home, so no single vendor owns the project. A prospective funder reads the governance, the contributors, and how the community sustains itself, then decides.`;

const bodyTwo =
  "That governance is the ownership. Samvera Partners, the institutions that contribute to the community, nominate and elect the Board and vote on the direction the platform takes, alongside peer libraries solving the same problems. Open standards are the exit guarantee underneath it. Because your metadata travels in formats anyone can read, you can move your collections to another system or provider whenever you choose.";

const bodyThree =
  "The technology is built for the work libraries actually do. Native multi-tenancy lets a consortium serve many member institutions from one platform, each fully branded and configured on its own, which is how the majority of the community is hosted today. Backend portability lets you change where your data lives without re-platforming, and migrate by reading from one store while writing to another. Cloud-compatible storage ships ready to enable. These are the parts a technical evaluator will want to confirm, and they can.";

export default function Community() {
  return (
    <FadeIn className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
            A community you can read before you commit.
          </h2>
          <div className="mt-6 leading-8 text-gray-600 lg:text-lg">
            <p>{bodyOne}</p>
            <p className="mt-4">{bodyTwo}</p>
            <p className="mt-4">{bodyThree}</p>
          </div>

          <div className="flex flex-col items-center mt-10 gap-y-4">
            <Link href="/the-community/samvera-partners" className="button">
              See what Partnership funds and how to join
            </Link>
            <Link
              href="/repository-solutions/find-your-solution"
              className="underline text-samDarkRed hover:text-samOrange"
            >
              Explore the repository solutions (Hyku, Hyrax, Avalon)
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
