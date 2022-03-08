import styled from "styled-components";
import Image from "next/image";
import Author from "./Author";
import NavLink from "next/link";
import { GenericBadge } from "../GenericBadge";
import { getFormattedPublishDate } from "../../utils/blogHelpers";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  padding: 34px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.text40};

  &:hover {
    cursor: pointer;
  }
`;

const LeftCol = styled.div`
  display: flex;
  height: 100%;
  width: 255px;
  border-radius: 6px;
  overflow: hidden;

  @media only screen and (max-width: 850px) {
    width: 125px;
    height: 125px;
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > p {
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid ${(props) => props.theme.colors.text100};
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const BlogEntry = ({ postInfo }) => {
  const { tags, slug, title, featuredImg, userName, publishDate } = postInfo;
  return (
    <NavLink href={`blog/${slug}`} passHref>
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

            <h4>{title}</h4>
          </TopInfo>
          <BottomInfo>
            <Author imgURL={`/img/authors/${userName}`} userName={userName} />
            <p>{getFormattedPublishDate(publishDate)}</p>
          </BottomInfo>
        </RightCol>
      </Container>
    </NavLink>
  );
};

export default BlogEntry;
