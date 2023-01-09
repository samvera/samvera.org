/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavItem({ navItem }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-samOrange" : "text-samGrey",
              "lowercase group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>{navItem.label}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
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
            <Popover.Panel className="absolute z-10 px-2 mt-3 -ml-4 transform w-72 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:p-8">
                  {navItem.items.map((item) => (
                    <Link legacyBehavior key={item.slug} href={item.href}>
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50 hover:text-samOrange">
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
