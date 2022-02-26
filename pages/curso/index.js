import styled from "styled-components";
import HeaderCurso from "../../components/Curso/HeaderCurso";
import { cursoSection } from "../../utils/copies";
import FAQSection from "../../components/FAQSection";
import ContentCurso from "../../components/Curso/ContentCurso";
import CourseCards from "../../components/Curso/CourseCards";
import SectionSeparator from "../../components/SectionSeparator";

const Container = styled.div``;

export default function Curso({ isCourseOpen }) {
  return (
    <Container>
      <HeaderCurso
        title={cursoSection.header.title}
        description={cursoSection.header.description}
      ></HeaderCurso>
      <ContentCurso cursoInfo={cursoSection} isCourseOpen={isCourseOpen} />
      <CourseCards isCourseOpen={isCourseOpen} />
      <SectionSeparator />
      <FAQSection />
      <SectionSeparator />
    </Container>
  );
}
