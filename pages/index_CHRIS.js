import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';
//import { getSortedPostsData } from '../lib/posts';

//import { getFolderNestedData, getSortedFlatData } from '../lib/docs';
import Link from 'next/link';
import Date from '../components/date';
//import NestedList from '../components/nestedList';

//export async function getStaticProps() {
//  const allPostsData = getSortedPostsData();
//  const allDocsNestedData = await getFolderNestedData('posts');
//  const allDocsFlatData = await getSortedFlatData('posts');
//
//  return {
//    props: {
//      allPostsData,
//      allDocsNestedData,
//      allDocsFlatData,
//    },
//  };
//}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Samvera - a vibrant and welcoming community developing repository software tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          <a href="https://samvera.org">
            <img src="https://samvera.org/wp-content/uploads/2017/06/samvera-logo-tm.svg" alt="Samvera Repository" />
          </a>
        </h1>
      </section>
    </Layout>
  );
}