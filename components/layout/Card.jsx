import React from "react";

const Card = ({ header, children, className }) => {
  return (
    <div
      key={header}
      className={`overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow ${className}`}
    >
      {header && <h3 className="px-4 py-5 sm:px-6">{header}</h3>}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export default Card;
