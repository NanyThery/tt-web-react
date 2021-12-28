import styled from "styled-components";
import CourseTabs from "../CourseTabs";
import SectionLayout from "../SectionLayout";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  padding: 25px 20px;
  gap: 60px;

  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
    flex-flow: column-reverse;
    align-items: center;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  transform: translateY(-60px);

  @media only screen and (max-width: 850px) {
    transform: none;
  }
`;
const RightCol = styled.div`
  padding: 15px;
  min-width: 250px;
  width: 30%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ParagraphContainer = styled.div`
  margin-bottom: 30px;
  > h3 {
    color: ${(props) => props.theme.colors.text100};
    margin-bottom: 15px;
    font-weight: 500;
  }

  > p {
    color: ${(props) => props.theme.colors.text80};
    font-size: 16px;
  }
`;

const VideoHolder = ({ videoId }) => {
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

const ContentCurso = ({ cursoInfo, isCourseOpen }) => {
  return (
    <Container>
      <LeftCol>
        <VideoHolder videoId={cursoInfo.videoId} />
        <ParagraphContainer>
          <h3>{cursoInfo.objective.title}</h3>
          <p>{cursoInfo.objective.description}</p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h3>{cursoInfo.syllabus.title}</h3>
          <p>{cursoInfo.syllabus.description}</p>
        </ParagraphContainer>
      </LeftCol>

      <RightCol>
        <CourseTabs variant="column" isCourseOpen={isCourseOpen} />
      </RightCol>
    </Container>
  );
};

export default ContentCurso;
