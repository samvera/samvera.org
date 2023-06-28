import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Breadcrumbs = ({ items }) => {
  return (
    <ul className="flex pb-0 mt-8 mb-6 ml-0 list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className={`font-fontin ${
            index !== 0 ? "before:content-['»'] before:px-2" : ""
          }`}
        >
          {item.href && (
            <Link legacyBehavior href={item.href}>
              <a className=" text-samDarkRed">{item.label}</a>
            </Link>
          )}
          {!item.href && <span>{item.label}</span>}
        </li>
      ))}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Breadcrumbs;
