import Breadcrumbs from "components/Breadcrumbs";
import Layout from "components/layout/Layout";
import Main from "components/layout/Main";

const CONFIG = {
  parentDir: "news-and-events",
  parentDirLabel: "News and Events",
};

export default function SamveraCalendarPage() {
  return (
    <Layout>
      <Main>
        <Breadcrumbs
          items={[
            {
              href: "/",
              label: "Home",
            },
            {
              href: `/${CONFIG.parentDir}`,
              label: CONFIG.parentDirLabel,
            },
          ]}
        />

        <div className="py-12">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Samvera Community Calendar
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Stay up to date with News and Events in the Samvera Public
                Calendar.
              </p>
            </div>

            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_ilbdqo36kpg2b30b9ebreeklec%40group.calendar.google.com&ctz=America%2FNew_York"
              className="w-full aspect-video"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
