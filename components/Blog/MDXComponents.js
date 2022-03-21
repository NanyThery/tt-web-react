import styled from "styled-components";
import Image from "next/image";
import { YTVideo } from "./YTVideo";

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
  &:hover {
    font-weight: bold;
  }
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

export const MDXComponents = {
  p: (props) => <PostText {...props} />,
  ul: (props) => <CustomUl {...props} />,
  ol: (props) => <CustomOl {...props} />,
  li: (props) => <CustomLi {...props} />,
  CustomImage,
  YTVideo,
};
