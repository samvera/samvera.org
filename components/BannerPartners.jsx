import { SAMVERA_PARTNERS } from "app-config";
import Link from "next/link";

export default function BannerPartners() {
  return (
    <section className="flex flex-col items-center justify-center p-10 bg-samBlue">
      <h3 className="pb-8 title">Samvera Partners</h3>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {SAMVERA_PARTNERS.map((partner) => (
          <li key={partner.label} className="px-4 md:px-8 lg:px-10">
            <Link
              href={partner.href}
              className="text-samGreyDark hover:text-samGrey"
            >
              {partner.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
