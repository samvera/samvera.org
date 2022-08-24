import { Html, Head, Main, NextScript } from "next/document";
import { prefix } from "prefix";

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
                font-family: 'Fontin Sans Regular';
                src: url('${prefix}/fonts/FontinSans_49/Fontin_Sans_R_45b.otf');
            }
            @font-face {
                font-family: 'Fontin Sans Bold';
                src: url('${prefix}/fonts/FontinSans_49/Fontin_Sans_B_45b.otf');
            }
            @font-face {
                font-family: 'Cooper Hewitt Book';
                src: url('${prefix}/fonts/cooper-hewitt/CooperHewitt-Book.otf');
            }
            @font-face {
                font-family: 'Cooper Hewitt Bold';
                src: url('${prefix}/fonts/cooper-hewitt/CooperHewitt-Bold.otf');
            }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
