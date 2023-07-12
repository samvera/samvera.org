import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";

import { Fragment } from "react";
import Link from "next/link";
import NavItem from "components/nav/NavItem";
import { prefix } from "prefix";
import { siteNavigation } from "site-navigation";
import MobileNavItem from "components/nav/MobileNavItem";

const newsNavigation = [
  {
    label: "News and Events",
    slug: "news",
    items: [
      {
        label: "News and events",
        href: "/news",
      },
      {
        label: "Samvera calendar",
        href: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/433553767/Samvera+Events+Calendar",
        isExternal: true,
      },
      {
        label: "Samvera Twitter page",
        href: "http://twitter.com/SamveraRepo",
        isExternal: true,
      },
    ],
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 ">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link legacyBehavior href="/">
              <a>
                <img
                  className="w-auto h-16"
                  src={`${prefix}/images/samvera-logo-tm.svg`}
                  alt="Samvera Logo"
                />
              </a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Desktop menu */}
          <Popover.Group
            as="nav"
            className="z-30 hidden space-x-3 lowercase lg:space-x-10 md:flex font-fontinBold"
          >
            {siteNavigation &&
              siteNavigation.map((navItem) => (
                <NavItem key={navItem.slug} navItem={navItem} />
              ))}
            {newsNavigation.map((navItem) => (
              <NavItem key={navItem.slug} navItem={navItem} />
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile navigation container */}
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-12"
                    src={`${prefix}/images/samvera-logo-tm.svg`}
                    alt="Samvera Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                {/* Mobile menu */}
                <nav className="flex flex-col">
                  {siteNavigation &&
                    siteNavigation.map((parentPage) => (
                      <MobileNavItem
                        key={parentPage.slug}
                        parentPage={parentPage}
                      />
                    ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
