import ApplicationTypes from "components/home/ApplicationTypes";
import BannerContact from "components/BannerContact";
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
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  let blogPosts = [];
  const fetched = await getBlogPosts(3);
  if (fetched && fetched.length > 0) {
    blogPosts = fetched;
  }

  return {
    props: { blogPosts },
  };
}
