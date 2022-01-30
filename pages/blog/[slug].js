import { MDXRemote } from "next-mdx-remote";
import PostLayout from "../../components/Blog/PostLayout";
import { MDXComponents } from "../../components/Blog/MDXComponents";

import { getFiles, getFileBySlug } from "../../lib/mdx";

export default function Post({ source, frontmatter }) {
  return (
    <div>
      <PostLayout frontmatter={frontmatter}>
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
  console.log(params.slug);
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}
