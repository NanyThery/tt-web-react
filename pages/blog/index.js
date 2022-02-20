import { getAllFilesFrontMatter } from "../../lib/mdx";
import HeaderBlog from "../../components/Blog/HeaderBlog";
import {
  filterArticles,
  orderByDate,
  usePagination,
} from "../../utils/blogHelpers";
import { useEffect, useState, useRef } from "react";
import BlogEntry from "../../components/Blog/BlogEntry";
import styled from "styled-components";
import SectionLayout from "../../components/SectionLayout";
import TagSearch from "../../components/Blog/TagSearch";
import VerticalNewsletter from "../../components/Blog/VerticalNewsletter";

const ContentBlog = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  gap: 100px;
  padding: 60px 34px 96px 34px;

  @media only screen and (max-width: 850px) {
    flex-flow: column;
    padding: 0 34px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`;

const RightColumn = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 255px;
  gap: 36px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export default function Blog({ posts }) {
  const [filteredData, setFilteredData] = useState(posts);
  const { next, currentPage, currentData, maxPage } = usePagination(
    filteredData,
    3
  );
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

  const onTagSelection = (tag) => {
    if (tag == "Ver todo") {
      return setFilteredData(posts);
    }
    const filteredPosts = filterArticles(posts, tag);
    const orderedFiltered = filteredPosts.sort(orderByDate);
    setFilteredData(orderedFiltered);
    return;
  };

  return (
    <div>
      <HeaderBlog lastPost={posts[0]}></HeaderBlog>
      <ContentBlog>
        <LeftColumn>
          {currentPosts.map((post) => {
            return <BlogEntry key={post.slug} postInfo={post} />;
          })}
        </LeftColumn>
        <RightColumn>
          <TagSearch onTagSelection={onTagSelection} />
          <VerticalNewsletter />
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
