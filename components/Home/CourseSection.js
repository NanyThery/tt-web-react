import styled from "styled-components"
import SectionLayout from "../SectionLayout"
import CourseTabs from "../CourseTabs"
import { home } from "../../utils/copies"
import SectionTitleDescription from "../SectionTitleDescription"

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 850px) {
    background: transparent;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`

const CourseWrapper = styled.div`
display: flex; 
justify-content: center;
` 

const CourseSection = ({isCourseOpen}) => {
  return (
    <Container>
      <SectionTitleDescription title={home.courseSection.title} description={home.courseSection.description} />
      <CourseWrapper>
      <CourseTabs isCourseOpen={isCourseOpen}></CourseTabs>
      </CourseWrapper>
    </Container>
  )
}

export default CourseSection
