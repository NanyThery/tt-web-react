import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "../components/Footer"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar />
      {children}
      <Footer></Footer>
    </StyledWrapper>
  )
}

export default Layout
