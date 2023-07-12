import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const MobileNavItem = ({ parentPage }) => {
  const { items, label, slug } = parentPage;
  const navLink = items[0]?.href || `/${slug}`;

  return (
    <div className="mb-3">
      {items.length === 0 ? (
        <Link
          key={slug}
          href={navLink}
          className="py-2 pl-3 rounded hover:bg-gray-100"
        >
          {label}
        </Link>
      ) : (
        <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="w-full">
                <div
                  className={`flex items-center justify-between w-full text-samGreyDark rounded pl-3 py-2 ${
                    open ? "bg-gray-100" : ""
                  }`}
                >
                  <span>{label}</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } w-6 h-6 text-gray-500 inline-block`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="ml-5">
                <ul>
                  {items.map((item) => (
                    <li key={item.href} className="my-5">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </div>
  );
};

export default MobileNavItem;
