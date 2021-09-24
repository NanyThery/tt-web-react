import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
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

  return (
    <Container>
      <MobileNavbar
        isDarkMode={isDarkMode}
        router={router}
        scrolledNavBar={scrolledNavBar}
        currentLocale={currentLocale}
      />
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
