import React from "react";
import Link from "next/link";

const MobileNavItem = ({ item }) => {
  const navLink = item.items[0]?.href || `/${item.slug}`;

  return (
    <Link legacyBehavior key={item.slug} href={navLink}>
      <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
        <span className="ml-3 text-base font-medium text-gray-900">
          {item.label}
        </span>
      </a>
    </Link>
  );
};

export default MobileNavItem;
