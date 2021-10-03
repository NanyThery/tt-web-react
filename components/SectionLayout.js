import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1108px;
  margin: 0 auto;
`

const SectionLayout = (props) => {
  const { minHeight, children, ...other } = props

  return (
    <Container {...other} minHeight={minHeight}>
      {children}
    </Container>
  )
}

export default SectionLayout
