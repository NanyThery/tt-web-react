import { getAllFilesFrontMatter } from "../../lib/mdx";
import HeaderBlog from "../../components/Blog/HeaderBlog";

export default function Blog({ posts }) {
  return (
    <div>
      <HeaderBlog lastPost={posts[0]}></HeaderBlog>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
