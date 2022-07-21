import React from "react";

export default function OuterWrapper({ children }) {
  return (
    <div className="bg-samBlueLight">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12">{children}</div>
      </div>
    </div>
  );
}
