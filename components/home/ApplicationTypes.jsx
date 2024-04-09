import { AtIcon } from "pages/types-of-applications";
import FadeIn from "components/FadeIn";
import Link from "next/link";
import RichTextContent from "components/RichTextContent";
import { motion } from "framer-motion";

export default function ApplicationTypes({ applicationTypes = [] }) {
  return (
    <div className="py-24 bg-samGreyDark sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <FadeIn className="max-w-2xl mx-auto lg:text-center">
          <h2
            id="applications"
            className="text-base font-semibold leading-7 text-samBlue"
          >
            Applications
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Types of Applications powered by Samvera Community technology
            solutions
          </p>
        </FadeIn>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {applicationTypes.map((at) => {
              const { title, description } = at.fields;

              return (
                <FadeIn key={at.sys.id} className="flex flex-col">
                  <dt className="flex items-center text-base font-semibold leading-7 text-white gap-x-3">
                    <AtIcon
                      atId={at.sys.id}
                      className="flex-none w-5 h-5 text-samBlue"
                      aria-hidden="true"
                    />
                    {title}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-300">
                    <div className="flex-auto [&_a]:text-samBlue">
                      <RichTextContent content={description.content[0]} />
                    </div>
                    <p className="mt-6">
                      <Link
                        href={`/types-of-applications`}
                        className="text-sm font-semibold leading-6 text-samBlue"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </FadeIn>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
