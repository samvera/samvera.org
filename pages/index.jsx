import Applications from "components/home/Applications";
import BenefitHow from "components/home/BenefitHow";
import BlogPostsWithFeatured from "components/news/BlogPostsWithFeatured";
import CommunityNewsEvents from "components/home/CommunityNewsEvents";
import HeroSVC2023 from "components/home/HeroSVC2023";
import HomeHero from "components/home/Hero";
import HomeLayout from "components/home/Layout";
import Image from "next/image";
import { getBlogPosts } from "lib/cms/get-blog-posts";
import { getSideNav } from "lib/markdown-helpers";

export default function Home({ blogPosts, sideNav }) {
  return (
    <>
      <HomeLayout>
        <HomeHero />
        <BenefitHow />
        <Applications />
        <CommunityNewsEvents items={sideNav.slice(0, 5)} />
        <BlogPostsWithFeatured blogPosts={blogPosts} />
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  const { sideNav } = getSideNav(`markdown/news-and-events`);
  const blogPosts = await getBlogPosts(3);

  return {
    props: { blogPosts, sideNav },
  };
}
