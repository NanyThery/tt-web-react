import styled from "styled-components"
import AboutUsSection from "../components/Home/AboutUsSection"
import SectionSeparator from "../components/SectionSeparator"

import Header from "../components/Home/Header"

const Container = styled.div`
  width: 100%;
`

const onSignUpClick = () => {
  console.log("Quiero apuntarme")
}

export default function Home({ isCourseOpen }) {
  return (
    <Container>
      <Header isCourseOpen={isCourseOpen} onClick={onSignUpClick}></Header>
      <SectionSeparator />
      <AboutUsSection></AboutUsSection>
      <SectionSeparator />
    </Container>
  )
}
