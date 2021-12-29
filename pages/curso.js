import styled from "styled-components";
import HeaderCurso from "../components/Curso/HeaderCurso";
import { cursoSection } from "../utils/copies";
import FAQSection from "../components/FAQSection";
import ContentCurso from "../components/Curso/ContentCurso";

const Container = styled.div`
  width: 100%;
  padding: 0 0 50px 0;

  @media only screen and (max-width: 850px) {
    & .not-in-responsive {
      display: none;
    }
  }
`;

export default function Curso({ isCourseOpen }) {
  return (
    <Container>
      <HeaderCurso
        title={cursoSection.header.title}
        description={cursoSection.header.description}
      ></HeaderCurso>
      <ContentCurso cursoInfo={cursoSection} isCourseOpen={isCourseOpen} />
      <FAQSection />
    </Container>
  );
}
