import styled from "styled-components";
import { HeroContainer } from "../Home/Header";
import { GenericBadge } from "../GenericBadge";
import Image from "next/image";
import Author from "./Author";
import NavLink from "next/link";
import { getFormattedPublishDate } from "../../utils/blogHelpers";

const Container = styled.div`
  display: flex; 
  position: relative; 
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
const DecorationContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

  .decor-1 {
    position: absolute;
    top: 200px;
    left: 4%;
  }
  .decor-2 {
    position: absolute;
    top: 300px;
    left: 8%;
  }
  .decor-3 {
    position: absolute;
    left: 60%;
    bottom: 10px;
  }
  .decor-4 {
    position: absolute;
    left: 55%;
    bottom: 50px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LeftCol = styled.div`
  z-index: 1;
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
  z-index: 1;

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
      <DecorationContainer>
        <div className="decor-1">
          <Image
            alt="decoration"
            width="69"
            height="118"
            src="/img/decor-snake.png"
          />
        </div>

        <div className="decor-2">
          <Image
            alt="decoration"
            width="65"
            height="73"
            src="/img/decor-twist1.png"
          />
        </div>
        <div className="decor-3">
          <Image
            alt="decoration"
            width="65"
            height="65"
            src="/img/decor-ball.png"
          />
        </div>
        <div className="decor-4">
          <Image
            alt="decoration"
            width="65"
            height="68"
            src="/img/decor-twist2.png"
          />
        </div>
      </DecorationContainer>
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
