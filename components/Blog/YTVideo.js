import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  > div {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    > iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const YTVideo = ({ videoId }) => {
  return (
    <ImageWrapper>
      <div>
        <iframe
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </ImageWrapper>
  );
};
