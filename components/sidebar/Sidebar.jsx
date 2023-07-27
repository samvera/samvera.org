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
    <aside className="z-10 col-span-1 p-8 -mt-4 text-center bg-white border-t-4 sidebar border-samDarkRed md:col-span-4">
      {/* Only display parent / child links if NOT on News & Events page */}
      {router.pathname !== "/news-and-events/[slug]" && (
        <SidebarGeneric items={sideNav} parentDir={parentDir} title={title} />
      )}

      <SidebarLinks />

      {router.pathname !== "/news-and-events" && (
        <>
          <hr />
          <SidebarGeneric
            items={sideNewsAndEvents}
            parentDir="news-and-events"
            title="News and Events"
          />
        </>
      )}
    </aside>
  );
}
