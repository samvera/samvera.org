import { SAMVERA_PARTNERS } from "app-config";
import Link from "next/link";

export default function BannerPartners() {
  return (
    <section className="bg-samBlue p-10 flex flex-col items-center justify-center">
      <h3 className="title pb-8">Samvera Partners</h3>
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SAMVERA_PARTNERS.map((partner) => (
          <li key={partner.label} className="px-4 md:px-8 lg:px-10">
            <Link href={partner.href}>
              <a className="text-samGreyDark hover:text-samGrey">
                {partner.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
