import React from "react";

export default function Sidebar({ children }) {
  return (
    <aside className="bg-white -mt-4 p-8 border-t-4 border-samDarkRed col-span-1 md:col-span-4">
      <div className="">{children}</div>
    </aside>
  );
}
