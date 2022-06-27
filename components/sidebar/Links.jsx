import { sideBarLinks } from "../../app-config";

export default function Links() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        {sideBarLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-samDarkRed">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
