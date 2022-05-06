import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const links = [
  {
    label: "About Samvera",
    url: "/about",
  },
  {
    label: "What is Samvera?",
    url: "/what-is",
  },
  {
    label: "Why Use Samvera",
    url: "/why-use-samvera",
  },
];

export default function Layout({ children }) {
  return (
    <div className="text-gray-800 font-cooperBook">
      <Header chrisLinks={links} />
      {children}
      <Footer />
    </div>
  );
}
