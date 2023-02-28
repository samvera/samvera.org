import { defaultOpenGraphData } from "lib/open-graph";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const { openGraphData = {} } = pageProps;
  const ogData = { ...defaultOpenGraphData, ...openGraphData };

  return (
    <>
      <Head>
        {/* Add Open Graph <meta></meta> tags here */}
        {Object.keys(ogData).map((key) => (
          // @ts-ignore
          <meta property={key} content={ogData[key]} key={key} />
        ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
