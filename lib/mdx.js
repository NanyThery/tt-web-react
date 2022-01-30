import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import mdxPrism from "mdx-prism";
import { orderByDate } from "../utils/blogHelpers";

const root = process.cwd();

export const getFiles = async () => fs.readdirSync(path.join(root, "posts"));

export const getFileBySlug = async (slug) => {
  const mdxSource =
    slug && fs.readFileSync(path.join(root, "posts", `${slug}.mdx`), "utf8");

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontmatter: {
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async () => {
  const files = fs.readdirSync(path.join(root, "posts"));

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "posts", postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};

export const getLastPosts = async (quantity) => {
  const files = await getAllFilesFrontMatter();
  const ordered = files.sort(orderByDate).slice(0, quantity);

  return ordered;
};
