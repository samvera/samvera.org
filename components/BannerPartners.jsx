import Link from "next/link";
import { SAMVERA_PARTNERS } from "app-config";

export default function BannerPartners() {
  return (
    <section className="py-8 bg-samBlue">
      <h3 className="pb-4 text-center title">Samvera Partners</h3>
      <div className="container">
        <ul className="grid grid-cols-2 gap-4 ml-0 list-none lg:gap-6 lg:px-10 md:grid-cols-3 xl:grid-cols-4 ">
          {SAMVERA_PARTNERS.map((partner) => (
            <li key={partner.label} className="text-left">
              <Link
                href={partner.href}
                className="text-samGreyDark hover:text-samDarkRed"
              >
                {partner.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
