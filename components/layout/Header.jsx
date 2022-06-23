import React from "react";
import Link from "next/link";

function ListItem({ children }) {
  return <li className="p-4">{children}</li>;
}

export default function Header({ chrisLinks }) {
  return (
    <header className="container mx-auto">
      <ul className="flex">
        <ListItem>Logo goes here</ListItem>
        {chrisLinks.map((link) => (
          <ListItem key={link.url} className="p-10">
            <Link href={link.url}>{link.label}</Link>
          </ListItem>
        ))}
        <ListItem>This is the last thing</ListItem>
      </ul>
    </header>
  );
}
