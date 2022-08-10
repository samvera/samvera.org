import React from "react";

const PrimaryNavLink = ({ children }) => {
  return (
    <a href="#" className="hover:text-samOrange">
      {children}
    </a>
  );
};

export { PrimaryNavLink };
