import Link from "next/link";
import Layout from "components/layout/Layout";

export default function Custom404() {
  return (
    <Layout title="Page not found - Samvera">
      <div className="max-w-2xl px-4 py-24 mx-auto text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-4">
          The page you were looking for does not exist or has moved.
        </p>
        <p className="mt-6">
          <Link className="button" href="/">
            Go to the Samvera homepage
          </Link>
        </p>
      </div>
    </Layout>
  );
}
