import ApplicationTypes from "components/home/ApplicationTypes";
import BannerContact from "components/BannerContact";
import BenefitHow from "components/home/BenefitHow";
import BlogPostsWithFeatured from "components/news/BlogPostsWithFeatured";
import Community from "components/home/Community";
import FeaturedAppsSlider from "components/home/FeaturedAppsSlider";
import HomeLayout from "components/home/Layout";
import { getApplicationTypes } from "lib/cms/get-application-types";
import { getBlogPosts } from "lib/cms/get-blog-posts";
import { useQuery } from "@tanstack/react-query";

export default function Home({ blogPosts }) {
  const query = useQuery({
    queryKey: ["applicationTypes"],
    queryFn: getApplicationTypes,
  });

  return (
    <>
      <HomeLayout>
        <FeaturedAppsSlider />
        <BlogPostsWithFeatured blogPosts={blogPosts} />
        <ApplicationTypes applicationTypes={query.data} />
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
