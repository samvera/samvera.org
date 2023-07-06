import React from "react";

export default function OuterWrapper({ children }) {
  return (
    <div className="border-t-2 bg-gradient-to-br from-transparent to-samBlueLight border-samDarkRed">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
