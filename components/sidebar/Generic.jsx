import Link from "next/link";

export default function Generic({ items = [], parentDir, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/${parentDir}/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}
