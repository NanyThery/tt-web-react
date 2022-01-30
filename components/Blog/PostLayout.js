import styled from "styled-components";
import Image from "next/image";
import { GenericBadge } from "../GenericBadge";
import Author from "./Author";
import { getFormattedPublishDate } from "../../utils/blogHelpers";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-image: ${(props) => props.theme.gradients.backgroundPurpleInverse},
    ${(props) => props.theme.gradients.neutralBackground};
  background-size: 100% 350px, 100% 100%;
  background-position: 0 0, 0 350px;
  background-repeat: no-repeat;
`;

const BodyContent = styled.div`
  padding-top: 100px;
  width: 100%;
  max-width: 728px;
`;

const Wrapper = styled.div`
width: 100%: 
display: flex; 
flex-flow: column; 
margin-bottom: 40px; 
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 50px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const PostTitle = styled.h2`
  font-weight: 500;
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > p {
    color: ${(props) => props.theme.colors.text80};
    font-size: 14px;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.text80};
  }
`;

const PostLayout = ({ children, frontmatter }) => {
  const { title, featuredImg, userName, publishDate, tags } = frontmatter;

  return (
    <Container>
      <BodyContent>
        <Wrapper>
          <ImageWrapper>
            <Image
              src={`/img/posts/${featuredImg}`}
              alt={title}
              width={728}
              height={450}
              layout="responsive"
              objectFit="cover"
            />
          </ImageWrapper>
          <TopInfo>
            <TagContainer>
              {tags.map((tag, index) => {
                return (
                  <GenericBadge key={index} variant="text80">
                    {tag}
                  </GenericBadge>
                );
              })}
            </TagContainer>

            <PostTitle>{title}</PostTitle>
          </TopInfo>
          <BottomInfo>
            <Author userName={userName} variant="text80" />
            <p>{getFormattedPublishDate(publishDate)}</p>
          </BottomInfo>
        </Wrapper>

        {children}
      </BodyContent>
    </Container>
  );
};

export default PostLayout;
