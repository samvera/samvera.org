import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Link from "next/link";
import { prefix } from "prefix";
import { siteNavigation } from "site-navigation";

const newsNavigation = [
  {
    label: "News & Events",
    slug: "news-and-events",
    items: [
      {
        label: "Samvera calendar",
        href: "/news-and-events/calendar",
        isExternal: false,
      },
    ],
  },
];

/**
 * Helper function to control the position of the popovers
 */
function popOverHelper(index) {
  if (index === 0 || index === 1) {
    return "-left-24";
  }
  if (index === siteNavigation.length) {
    return "-right-4";
  }
  return "-right-16";
}

const PopOverWrapper = ({ label, items, siteNavIndex }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center text-sm leading-6 capitalize text-samGrey gap-x-1">
        {label}
        <ChevronDownIcon
          className="flex-none w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={`absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg ${popOverHelper(
            siteNavIndex,
            items
          )} top-full rounded-3xl ring-1 ring-gray-900/5`}
        >
          <div className="p-4">
            {items.map((item, idx) => (
              <div
                key={item.slug || item.href || idx}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <Link
                    href={item.href}
                    className="block capitalize"
                    {...(item.isExternal ? { target: "_blank" } : {})}
                  >
                    {item.label}{" "}
                    {item.isExternal && (
                      <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4 ml-1 " />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const DisclosureWrapper = ({ label, items }) => {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 capitalize hover:bg-gray-50 text-samGrey">
            {label}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items].map((item, idx) => (
              <Disclosure.Button
                key={item.slug || item.href || idx}
                as="a"
                href={item.href}
                className="block py-2 pl-6 pr-3 text-sm leading-7 capitalize rounded-lg text-samGrey hover:bg-gray-50"
              >
                {item.label}
                {item.isExternal && (
                  <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4 ml-1 " />
                )}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              className="w-auto h-12"
              src={`${prefix}/images/samvera-logo-tm.svg`}
              alt="Samvera Logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="z-10 flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <Popover.Group className="z-10 hidden lg:flex lg:gap-x-4">
          {siteNavigation &&
            siteNavigation.map((navItem, index) => {
              if (navItem.items?.length > 0) {
                return (
                  <PopOverWrapper
                    key={navItem.slug}
                    label={navItem.label}
                    items={navItem.items}
                    siteNavIndex={index}
                  />
                );
              } else {
                return (
                  <Link
                    key={navItem.slug}
                    href={`/${navItem.slug}`}
                    className="text-sm leading-6 capitalize"
                  >
                    {navItem.label}
                  </Link>
                );
              }
            })}
          {newsNavigation.map((navItem) => (
            <PopOverWrapper
              key={navItem.slug}
              label={navItem.label}
              items={navItem.items}
              siteNavIndex={siteNavigation.length}
            />
          ))}
        </Popover.Group>
      </nav>

      {/* Mobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                className="w-auto h-12"
                src={`${prefix}/images/samvera-logo-tm.svg`}
                alt="Samvera Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {siteNavigation &&
                  siteNavigation.map((parentPage) =>
                    parentPage.items?.length === 0 ? (
                      <Link
                        key={parentPage.slug}
                        href={`/${parentPage.slug}`}
                        className="block px-3 py-2 -mx-3 leading-7 capitalize rounded-lg hover:bg-gray-50 text-samGrey"
                      >
                        {parentPage.label}
                      </Link>
                    ) : (
                      <DisclosureWrapper
                        key={parentPage.slug}
                        label={parentPage.label}
                        items={parentPage.items}
                      />
                    )
                  )}
                {newsNavigation.map((parentPage) => (
                  <DisclosureWrapper
                    key={parentPage.slug}
                    label={parentPage.label}
                    items={parentPage.items}
                  />
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
