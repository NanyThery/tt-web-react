import styled from "styled-components"
import Navbar from "./Navbar"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar />
      {children}
    </StyledWrapper>
  )
}

export default Layout
