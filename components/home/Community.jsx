import Link from "next/link";

export default function Community() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Samvera Community
          </h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p>
              Samvera is not (and has never been) grant funded. It is
              distributed, robust and open. The Samvera Community&nbsp;was
              conceived and executed, under its original name “Hydra”, as a
              collaborative, open source effort from its very beginning in 2008.
            </p>
            <p>
              Samvera has grown into a vibrant, highly active community
              including more than 30 Partners who formally support our work and
              development.
            </p>
            <p>
              Samvera is designed so that adopters can each have their own mix
              of features; variation is part of the plan. For adopters who do
              not have the resourcing to create their own variant, the Samvera
              Community has developed rather more “off-the-shelf” application
              bundles.
            </p>
          </div>

          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link href="/getting-started" className="button">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
