import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import CourseTabs from "../CourseTabs";
import { home } from "../../utils/copies";
import SectionTitleDescription from "../SectionTitleDescription";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-flow: column;

  @media only screen and (max-width: 850px) {
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
const StyledDescription = styled((props) => (
  <SectionTitleDescription {...props} />
))`
  padding: 0 24px;
`;

const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CourseSection = ({ isCourseOpen }) => {
  return (
    <Container>
      <StyledDescription
        title={home.courseSection.title}
        description={home.courseSection.description}
      />
      <CourseWrapper>
        <CourseTabs isCourseOpen={isCourseOpen}></CourseTabs>
      </CourseWrapper>
    </Container>
  );
};

export default CourseSection;
