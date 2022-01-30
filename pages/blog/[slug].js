import { MDXRemote } from "next-mdx-remote";
import PostLayout from "../../components/Blog/PostLayout";
import { MDXComponents } from "../../components/Blog/MDXComponents";

import { getFiles, getFileBySlug, getLastPosts } from "../../lib/mdx";

export default function Post({ source, frontmatter, lastPosts }) {
  return (
    <div>
      <PostLayout frontmatter={frontmatter} lastPosts={lastPosts}>
        <MDXRemote {...source} components={MDXComponents} />
      </PostLayout>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  const lastPosts = await getLastPosts(4);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
      lastPosts,
    },
  };
}
