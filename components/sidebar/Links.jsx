import { sideBarLinks } from "../../app-config";

export default function Links() {
  return (
    <div className="container mb-6 text-center">
      <h3 className="pt-8 title">Links</h3>
      <ul>
        {sideBarLinks.map((link) => (
          <li key={link.label} className="pb-3">
            <a href={link.href} className="hover:text-samDarkRed">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
