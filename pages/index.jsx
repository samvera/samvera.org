import Applications from "components/home/Applications";
import BannerContact from "components/BannerContact";
import BenefitHow from "components/home/BenefitHow";
import BlogPostsWithFeatured from "components/news/BlogPostsWithFeatured";
import Community from "components/home/Community";
import HomeHero from "components/home/Hero";
import HomeLayout from "components/home/Layout";
import { getBlogPosts } from "lib/cms/get-blog-posts";

export default function Home({ blogPosts }) {
  return (
    <>
      <HomeLayout>
        <HomeHero />
        <BlogPostsWithFeatured blogPosts={blogPosts} />
        <Applications />
        <Community />
        <BannerContact />
        <BenefitHow />
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  const blogPosts = await getBlogPosts(3);

  return {
    props: { blogPosts },
  };
}
