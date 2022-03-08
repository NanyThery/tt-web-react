import styled from "styled-components";
import Image from "next/image";
import Author from "./Author";
import NavLink from "next/link";
import { GenericBadge } from "../GenericBadge";
import { getFormattedPublishDate } from "../../utils/blogHelpers";

const Container = styled.div`
  width: 255px;
  display: flex;
  flex-flow: column;
  gap: 20px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const LeftCol = styled.div`
  display: flex;
  height: 156px;
  width: 255px;
  border-radius: 6px;
  overflow: hidden;
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 15px;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

const StyledTitle = styled.h4`
  font-weight: 500;
`;
const BottomInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > p {
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.text100};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text100};
  }
`;

const BlogEntryCard = ({ postInfo }) => {
  const { tags, slug, title, featuredImg, userName, publishDate } = postInfo;
  return (
    <NavLink href={`/blog/${slug}`}>
      <Container>
        <LeftCol>
          <Image
            src={featuredImg}
            alt={title}
            width={255}
            height={155}
            objectFit="cover"
          />
        </LeftCol>
        <RightCol>
          <TopInfo>
            <TagContainer>
              {tags.map((tag, index) => {
                return (
                  <GenericBadge key={index} variant="orange">
                    {tag}
                  </GenericBadge>
                );
              })}
            </TagContainer>

            <StyledTitle>{title}</StyledTitle>
          </TopInfo>
          <BottomInfo>
            <Author
              imgURL={`/img/authors/${userName}`}
              userName={userName}
              imageAvatar={false}
            />
            <p>{getFormattedPublishDate(publishDate)}</p>
          </BottomInfo>
        </RightCol>
      </Container>
    </NavLink>
  );
};

export default BlogEntryCard;
