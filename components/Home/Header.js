import styled from "styled-components"

const Container = styled.div`
  height: 700px;
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};

  @media only screen and (max-width: 850px) {
    background: transparent;
  }
`

const Header = () => {
  return <Container>Hola</Container>
}

export default Header
