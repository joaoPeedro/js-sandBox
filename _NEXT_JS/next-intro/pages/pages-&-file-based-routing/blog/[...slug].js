import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  // recive multiple values like month and year
  console.log(router.query); // /pages-&-file-based-routing/blog/september/2021

  return (
    <div>
      <h1>The Blog Posts</h1>
      <h6>list all posts with this date:</h6>
      <p>{router.query.slug}</p>
      <p>slug[0]: {router.query.slug[0]}</p>
      <p>slug[1]: {router.query.slug[1]}</p>
    </div>
  );
}

https: export default BlogPostsPage;
