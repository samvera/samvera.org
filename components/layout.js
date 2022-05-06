import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'xypnox';
export const siteTitle = 'Next.js Nested Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <main>{children}</main>

      <header className={styles.header}>
        <>
          <Link href='/'>
            <a>
              <img
                src='https://samvera.org/wp-content/uploads/2017/06/samvera-logo-tm.svg'
                alt="Samvera Tree Logo"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            &copy; Samvera 2022
          </h2>
        </>
      </header>
    </div>
  );
}