import styled from "styled-components";
import CourseTabs from "../CourseTabs";
import SectionLayout from "../SectionLayout";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  padding: 25px 20px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  transform: translateY(-60px);
`;
const RightCol = styled.div`
  width: 30%;
`;

const VideoWrapper = styled.div``;

const VideoHolder = (videoId) => {
  return (
    <VideoWrapper>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Conoce TeachTech"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoWrapper>
  );
};

const ContentCurso = ({ cursoInfo }) => {
  return (
    <Container>
      <LeftCol>
        <VideoHolder videoId={cursoInfo.videoId} />
      </LeftCol>
      <RightCol>
        <CourseTabs variant="column" />
      </RightCol>
    </Container>
  );
};

export default ContentCurso;
