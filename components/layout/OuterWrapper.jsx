import React from "react";

export default function OuterWrapper({ children }) {
  return (
    <div className="border-t-2 bg-samBlueLight border-samDarkRed">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
