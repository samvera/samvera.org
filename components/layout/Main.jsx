import React from "react";

export default function Main({ children }) {
  return (
    <main className="bg-samBlueLight col-span-1 md:col-span-8">
      <div className="container mx-auto p-6">{children}</div>
    </main>
  );
}
