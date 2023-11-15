import BlogPost from "./BlogPost";

export default function BlogPosts({ posts }) {
  return (
    <div className="py-24 bg-white sm:py-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News and Events
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn about the latest News and Events in the Samvera Community.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post.sys.id} post={post.fields} />
          ))}
        </div>
      </div>
    </div>
  );
}
