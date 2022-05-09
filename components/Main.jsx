import React from "react";

export default function Main({ children }) {
  return (
    <main className="bg-samBlueLight">
      <div className="container mx-auto py-6">{children}</div>
    </main>
  );
}
