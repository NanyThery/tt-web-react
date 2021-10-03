import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90px;
  background-color: transparent;
  transition: all 0.5s ease;

  @media only screen and (min-width: 850px) {
    height: 74px;
    &.scrolled-navbar {
      background-color: white;
      height: 60px;
    }
  }
`

export const Navbar = () => {
  const router = useRouter()
  const [scrolledNavBar, setScrolledNavBar] = useState(false)
  const routesWithDarkHeader = ["/"]
  const isDarkMode = routesWithDarkHeader.includes(router.asPath)
  const currentLocale = router.locale

  const handleScroll = () => {
    if (window.scrollY > 3) {
      setScrolledNavBar(true)
    } else setScrolledNavBar(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  console.log(scrolledNavBar)
  return (
    <Container className={scrolledNavBar && "scrolled-navbar"}>
      <MobileNavbar router={router} />
      <DesktopNavbar
        isDarkMode={isDarkMode}
        scrolledNavBar={scrolledNavBar}
        router={router}
        currentLocale={currentLocale}
      />
    </Container>
  )
}

export default Navbar
