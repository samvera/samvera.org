import Link from "next/link";
import React from "react";
import SidebarLinks from "./Links";
import SidebarNewsAndEvents from "./NewsAndEvents";
import { useRouter } from "next/router";

export default function Sidebar({ title, parentDir, sideNav }) {
  const router = useRouter();

  return (
    <aside className="sidebar bg-white -mt-4 p-8 border-t-4 border-samDarkRed col-span-1 md:col-span-4 text-center">
      {/* Only display parent / child links if NOT on News & Events page */}
      {router.pathname !== "/news/[slug]" && (
        <>
          <h2>{title}</h2>
          <ul>
            {sideNav.map((item) => (
              <li key={item.slug}>
                <Link href={`/${parentDir}/${item.slug}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
        </>
      )}

      <SidebarLinks />
      <hr />
      <SidebarNewsAndEvents />
    </aside>
  );
}
