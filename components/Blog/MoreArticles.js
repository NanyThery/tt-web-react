import styled from "styled-components";
import BlogEntryCard from "./BlogEntryCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
  border-top: 1px solid ${(props) => props.theme.colors.text60};
  margin-top: 60px;
  padding: 60px 0;
`;

const MoreArticles = ({ postsInfo }) => {
  return (
    <Container>
      {postsInfo.map((post) => {
        return <BlogEntryCard key={post.slug} postInfo={post} />;
      })}
    </Container>
  );
};

export default MoreArticles;
