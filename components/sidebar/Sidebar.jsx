import Link from "next/link";
import React from "react";
import SidebarLinks from "./Links";
import SidebarGeneric from "./Generic";
import { useRouter } from "next/router";

export default function Sidebar({
  title,
  parentDir,
  sideNav,
  sideNewsAndEvents,
}) {
  const router = useRouter();

  return (
    <aside className="sidebar bg-white -mt-4 p-8 border-t-4 border-samDarkRed col-span-1 md:col-span-4 text-center">
      {/* Only display parent / child links if NOT on News & Events page */}
      {router.pathname !== "/news/[slug]" && (
        <SidebarGeneric items={sideNav} parentDir={parentDir} title={title} />
      )}

      <SidebarLinks />

      {router.pathname !== "/news" && (
        <>
          <hr />
          <SidebarGeneric
            items={sideNewsAndEvents}
            parentDir="news"
            title="News and Events"
          />
        </>
      )}
    </aside>
  );
}
