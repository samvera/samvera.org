import React from "react";

const TagCloud = ({ tag = [] }) => {
  return (
    <>
      {tag.map((tag, index) => (
        <span
          key={index}
          className="relative text-center z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default TagCloud;
