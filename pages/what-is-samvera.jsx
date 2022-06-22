import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";

export default function About() {
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
              label: "What is Samvera?",
            },
          ]}
        />

        <h1>Samvera is an Open-Source Repository Framework</h1>
      </Main>
      <Sidebar></Sidebar>
    </Layout>
  );
}
