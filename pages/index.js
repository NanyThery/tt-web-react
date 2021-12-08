import styled from "styled-components"
import AboutUsSection from "../components/Home/AboutUsSection"
import SectionSeparator from "../components/SectionSeparator"
import { testimonials } from "../utils/copies"
import Header from "../components/Home/Header"
import HomeTestimonials from "../components/Home/HomeTestimonials"
import CourseSection from "../components/Home/CourseSection"
import AchieveSection from "../components/Home/AchieveSection"
import CtaSection from "../components/Home/CtaSection"

const Container = styled.div`
  width: 100%;
`

const onSignUpClick = () => {
  console.log("Quiero apuntarme")
}

export default function Home({ isCourseOpen, testimonials }) {
  return (
    <Container>
      <Header isCourseOpen={isCourseOpen} onClick={onSignUpClick}></Header>
      <SectionSeparator />
      <AboutUsSection></AboutUsSection>
      <SectionSeparator />
      <HomeTestimonials data={testimonials} />
      <SectionSeparator/>
      <CourseSection isCourseOpen={isCourseOpen} />
      <SectionSeparator/>
      <AchieveSection/>
      <SectionSeparator/>
      <CtaSection isCourseOpen={isCourseOpen}/>
      <SectionSeparator/>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      testimonials,
    },
  }
}
