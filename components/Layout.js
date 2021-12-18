import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "../components/Footer"
import EventBar from "./EventBar"
import { useRouter } from "next/router"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Layout = ({ children }) => {
  const router = useRouter(); 

  return (
    <StyledWrapper>
      <EventBar router={router}/>
      <Navbar router={router} />
      {children}
      <Footer></Footer>
    </StyledWrapper>
  )
}

export default Layout
