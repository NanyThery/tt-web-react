import { getAllFilesFrontMatter } from "../../lib/mdx";
import HeaderBlog from "../../components/Blog/HeaderBlog";
import { orderByDate, usePagination } from "../../utils/blogHelpers";
import { useEffect, useState, useRef } from "react";
import BlogEntry from "../../components/Blog/BlogEntry";
import styled from "styled-components";
import SectionLayout from "../../components/SectionLayout";
import TagSearch from "../../components/Blog/TagSearch";

const ContentBlog = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  gap: 100px;
  padding: 60px 0 96px;
`;

const LeftColumn = styled.div`
  width: 70%;
`;

const RightColumn = styled.div`
  width: 30%;
`;

export default function Blog({ posts }) {
  const { next, currentPage, currentData, maxPage } = usePagination(posts, 2);
  const [element, setElement] = useState(null);
  const observer = useRef();
  const prevY = useRef(0);

  const currentPosts = currentData();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, [next]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div>
      <HeaderBlog lastPost={posts[0]}></HeaderBlog>
      <ContentBlog>
        <LeftColumn>
          {currentPosts.map((post) => {
            return <BlogEntry key={post.slug} postInfo={post} />;
          })}
          {currentPage !== maxPage && <p ref={setElement}>Cargando...</p>}
        </LeftColumn>
        <RightColumn>
          <TagSearch />
        </RightColumn>
      </ContentBlog>
    </div>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesFrontMatter();
  const posts = unorderedPosts.sort(orderByDate);

  return { props: { posts } };
}
