/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "About Samvera", href: "/about", current: true },
  { name: "What is Samvera?", href: "/what-is-samvera", current: false },
  { name: "Why Use Samvera?", href: "/why-use-samvera", current: false },
  { name: "Who Uses Samvera?", href: "/who-uses-samvera", current: false },
  { name: "Getting Started", href: "/getting-started", current: false },
  { name: "Who Uses Samvera?", href: "/who-uses-samvera", current: false },
  { name: "News and Events", href: "/news-and-events", current: false },
  // {
  //   name: "Donate to the Julie Allinson Award Fund",
  //   href: "/julie-alinson-fund",
  //   current: false,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function navItemsStyle(item) {
  return classNames(
    item.current ? "text-samOrange" : " hover:text-samOrange",
    "px-3 py-2 font-fontinBold lowercase text-samGreyDark leading-tight"
  );
}

export default function Example() {
  return (
    <Disclosure as="nav" className="border-b-2 border-samDarkRed">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <img
                        className="h-16 w-auto"
                        src="images/samvera-logo-tm.svg"
                        alt="Samvera Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={navItemsStyle(item)}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${navItemsStyle(item)} block`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
