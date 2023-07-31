import Image from "next/image";
import svc2023 from "../../public/images/samvera-connect-2023.png";

export default function HeroSVC2023() {
  return (
    <div className="bg-white">
      <div className="relative py-0 isolate">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#de5f2b] to-[#8f2704] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Join us for Samvera Connect 2023
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                October 23rd - 26th in Philadelphia, PA
                <br />
                <a
                  href="https://samvera.atlassian.net/wiki/spaces/samvera/pages/2174877699/Samvera+Connect+2023"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  See full details on the Samvera wiki
                </a>
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="https://samveraconnect2023.sched.com/"
                  className="button"
                >
                  Register now
                </a>
                <a
                  href="https://samveraconnect2023.sched.com/"
                  className="text-sm font-semibold leading-6 text-samGrey"
                >
                  See the full schedule <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden flow-root mt-16 sm:mt-24">
              <Image
                src={svc2023}
                alt="App screenshot"
                className="mx-auto lg:max-w-4xl"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#de5f2b] to-[#8f2704] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
