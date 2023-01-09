import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  return (
    <ul className="mt-8 mb-6 flex">
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
