import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Samvera - a vibrant and welcoming community developing repository
          software tools
        </title>
        <meta name="description" content="Samvera is cool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <a href="https://samvera.org">
            <img
              src="https://samvera.org/wp-content/uploads/2017/06/samvera-logo-tm.svg"
              alt="Samvera Repository"
            />
          </a>
        </div>
      </Layout>
    </>
  );
}
