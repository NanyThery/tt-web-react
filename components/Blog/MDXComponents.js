import styled from "styled-components";
import Image from "next/image";
import { YTVideo } from "./YTVideo";
import { ProjectCard } from "./ProjectCard";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  > div {
    width: 80%;
    border-radius: 6px;
    overflow: hidden;
  }
`;

const PostText = styled.p`
  margin: 15px 0;
  line-height: 28px;
`;

const CustomUl = styled.ul`
  line-height: 28px;
`;
const CustomOl = styled.ol`
  line-height: 28px;
`;

const CustomLi = styled.li`
  > a {
    &:hover {
      font-weight: bold;
    }
  }
`;

const GridUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1em;
  padding: 0;
  @media only screen and (min-width: 650px) {
    column-gap: 1em;
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledLi = styled.li`
  list-style: none;
`;

const CustomImage = (props) => {
  return (
    <ImageWrapper>
      <div>
        <Image
          src={props.src}
          alt={props.alt}
          width={728}
          height={450}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </ImageWrapper>
  );
};

const ProjectCards = ({ projectList }) => {
  return (
    <GridUl>
      {projectList.map((project) => {
        return (
          <StyledLi key={project.id}>
            <ProjectCard {...project}></ProjectCard>
          </StyledLi>
        );
      })}
    </GridUl>
  );
};

export const MDXComponents = {
  p: (props) => <PostText {...props} />,
  ul: (props) => <CustomUl {...props} />,
  ol: (props) => <CustomOl {...props} />,
  li: (props) => <CustomLi {...props} />,
  CustomImage,
  YTVideo,
  ProjectCards,
};
