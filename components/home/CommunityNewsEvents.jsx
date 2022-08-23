import React from "react";
import Link from "next/link";

export default function CommunityNewsEvents({ items }) {
  return (
    <section className="bg-none md:bg-community-news">
      <div className="container px-0 md:px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 md:col-span-2">
            <h2 className="section-title">The Samvera Community</h2>
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
            <div className="flex justify-around pt-5">
              <Link href="/getting-started/getting-started">
                <a className="button">Getting started</a>
              </Link>
            </div>
          </div>
          <div
            className="p-10 md:col-span-1"
            style={{ backgroundImage: "url(/images/news-bg.jpeg)" }}
          >
            <h2 className="section-title">News &amp; Events</h2>
            <ul>
              {items.map((item) => (
                <li key={item.slug} className="mb-3">
                  <Link href={`/news/${item.slug}`}>
                    <a className="text-samGreyDark font-cooperBold">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/news">
              <a className="button">View all news</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
