import "../styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import { defaultOpenGraphData } from "lib/open-graph";

const queryClient = new QueryClient();

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function App({ Component, pageProps }) {
  const { openGraphData = {} } = pageProps;
  const ogData = { ...defaultOpenGraphData, ...openGraphData };

  return (
    <>
      <Head>
        <title>{ogData["og:title"]}</title>
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
      <div className={`${openSans.variable}`}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </>
  );
}
