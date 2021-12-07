import styled from "styled-components"
import SectionLayout from "../SectionLayout"
import CourseTabs from "../CourseTabs"
import { home, courseInfo } from "../../utils/copies"

const DescriptionContainer = styled.div`
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: 30px; 
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;
  width: 100%;

  > div {
    @media only screen and (max-width: 850px) {
      width: 100%;
    }

    > p {
      color: ${(props) => props.theme.colors.text80};
    }
  }
`
const Title = styled.h1`
  max-width: 400px;
  color: ${(props) => props.theme.colors.purpleDark};
  line-height: 1;
  margin-bottom: 16px;

  @media only screen and (max-width: 850px) {
    max-width: fit-content;
    text-align: center;
  }
`
const CourseWrapper = styled.div`
display: flex; 
justify-content: center;

` 

const CourseSection = ({isCourseOpen}) => {
  return (
    <SectionLayout>
      <DescriptionContainer>
        <div>
          <Title>{home.courseSection.title}</Title>
          <p>{home.courseSection.description}</p>
        </div>
      </DescriptionContainer>
      <CourseWrapper>
      <CourseTabs isCourseOpen={isCourseOpen}></CourseTabs>
      </CourseWrapper>
    </SectionLayout>
  )
}

export default CourseSection
