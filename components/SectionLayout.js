import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`

const SectionLayout = ({ minHeight, ...others }) => {
  return <Container minHeight={minHeight}>{children}</Container>
}

export default SectionLayout
