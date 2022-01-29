import styled from "styled-components";
import { HeroContainer } from "../Home/Header";
import { GenericBadge } from "../GenericBadge";
import Image from "next/image";
import Author from "./Author";
import NavLink from "next/link";
import { getFormattedPublishDate } from "../../utils/blogHelpers";

const Container = styled.div`
  display: flex; 
  align-items: center; 
  width: 100%;
  min-height; fit-content; 
  height: 700px; 
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};
  color: white;


  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LeftCol = styled.div`
  max-height: 350px;
  width: 50%;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

const RightCol = styled.div`
  max-width: 400px;
  display: flex;
  flex-flow: column;
  gap: 28px;

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > p {
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid white;
  }
`;

const NavItem = styled.div`
  cursor: pointer;

  & :hover {
    text-decoration: underline;
  }
`;

const StyledHeroContainer = styled((props) => <HeroContainer {...props} />)`
  gap: 100px;
  justify-content: center;
`;

const HeaderBlog = ({ lastPost }) => {
  return (
    <Container>
      <StyledHeroContainer>
        <LeftCol>
          <NavLink href={`/blog/${lastPost.slug}`}>
            <Image
              src={`/img/posts/${lastPost.featuredImg}`}
              alt={lastPost.title}
              width="540"
              height="331"
              layout="responsive"
              objectFit="cover"
            />
          </NavLink>
        </LeftCol>
        <RightCol>
          <TagContainer>
            {lastPost.tags.map((tag, index) => {
              return (
                <GenericBadge key={index} variant="text20">
                  {tag}
                </GenericBadge>
              );
            })}
          </TagContainer>

          <NavLink href={`/blog/${lastPost.slug}`}>
            <NavItem>
              <h2>{lastPost.title}</h2>
              <p>{lastPost.summary}</p>
            </NavItem>
          </NavLink>
          <BottomInfo>
            <Author
              imgURL={`/img/authors/${lastPost.author}`}
              userName={lastPost.userName}
            />
            <p>{getFormattedPublishDate(lastPost.publishDate)}</p>
          </BottomInfo>
        </RightCol>
      </StyledHeroContainer>
    </Container>
  );
};

export default HeaderBlog;
