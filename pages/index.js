import styled from "styled-components"

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
    </Container>
  )
}
