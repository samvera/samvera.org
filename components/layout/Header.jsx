/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavItem from "components/nav/NavItem";
import { siteNavigation } from "site-navigation";

console.log("siteNavigation", siteNavigation);

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

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <img
                  className="h-16 w-auto"
                  src={`/images/samvera-logo-tm.svg`}
                  alt="Samvera Logo"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 font-fontinBold lowercase"
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
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src={`/images/samvera-logo-tm.svg`}
                    alt="Samvera Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {siteNavigation &&
                    siteNavigation.map((item) => (
                      <Link key={item.slug} href={item.items[0].href}>
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.label}
                          </span>
                        </a>
                      </Link>
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
