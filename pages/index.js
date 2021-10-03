import styled from "styled-components"
import Header from "../components/Home/Header"

const Container = styled.div`
  width: 100%;
`

export default function Home() {
  return (
    <Container>
      <Header></Header>
    </Container>
  )
}
