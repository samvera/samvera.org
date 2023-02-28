import { defaultOpenGraphData } from "lib/open-graph";
import Head from "next/head";
import Script from "next/script";
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8T5XY480BE"
        afterInteractive
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8T5XY480BE');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
