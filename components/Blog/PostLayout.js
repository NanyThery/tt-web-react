import styled from "styled-components";
import Image from "next/image";
import { GenericBadge } from "../GenericBadge";
import Author from "./Author";
import { getFormattedPublishDate } from "../../utils/blogHelpers";
import MoreArticles from "./MoreArticles.js";
import NavLink from "next/link";
import { getIconByName } from "../Icons";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  background-image: ${(props) => props.theme.gradients.backgroundPurpleInverse},
    ${(props) => props.theme.gradients.neutralBackground};
  background-size: 100% 350px, 100% 100%;
  background-position: 0 0, 0 350px;
  background-repeat: no-repeat;

  @media only screen and (max-width: 850px) {
    background-size: 100% 250px, 100% 100%;
    background-position: 0 0, 0 280px;
  }

  @media only screen and (max-width: 600px) {
    background-size: 100% 200px, 100% 100%;
    background-position: 0 0, 0 200px;
  }
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

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
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
const StyledText = styled.p`
  color: ${(props) => props.theme.colors.text80};
  line-height: 32px;
  margin: 0 0 20px 0;

  > svg {
    height: 12px;
    margin-right: 10px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.purple};
    > svg {
      stroke: ${(props) => props.theme.colors.purple};
    }
    cursor: pointer;
  }
`;

const PostLayout = ({ children, frontmatter, lastPosts }) => {
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
          <NavLink href="/blog" passHref>
            <StyledText>
              {" "}
              {getIconByName("left-chevron")} Volver al Blog
            </StyledText>
          </NavLink>
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
      <MoreArticles postsInfo={lastPosts} />
    </Container>
  );
};

export default PostLayout;
