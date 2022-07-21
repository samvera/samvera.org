import React from "react";

const Meta = ({ date, categories }) => {
  return (
    <p className="mb-6">
      Posted on {date}{" "}
      {
        <span className="capitalize">
          {categories && ` - ${categories?.join(", ")}`}
        </span>
      }
    </p>
  );
};

export default Meta;
