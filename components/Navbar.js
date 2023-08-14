import { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: transparent;
  transition: all 0.5s ease;
  z-index: 5;

  @media only screen and (min-width: 850px) {
    height: 74px;
    &.scrolled-navbar {
      background-color: white;
      top: ${(props) => props.startingPosition};
      height: 60px;
    }
  }
`;

const checkIfIsDarkMode = (currentPath) => {
  const routesWithLightHeader = [];
  // const routesWithDarkHeader = ["/", "/staff", "/aboutUs", "/curso", "/blog", "/blog/"];

  if (routesWithLightHeader.includes(currentPath)) {
    return false;
  }

  return true;
};

export const Navbar = ({ router, startingPosition }) => {
  const [scrolledNavBar, setScrolledNavBar] = useState(false);
  const isDarkMode = checkIfIsDarkMode(router.asPath);
  const currentLocale = router.locale;

  const handleScroll = () => {
    if (window.scrollY > 3) {
      setScrolledNavBar(true);
    } else setScrolledNavBar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Container
      className={scrolledNavBar && "scrolled-navbar"}
      startingPosition={startingPosition}
    >
      <MobileNavbar router={router} />
      <DesktopNavbar
        startingPosition={startingPosition}
        isDarkMode={isDarkMode}
        scrolledNavBar={scrolledNavBar}
        router={router}
        currentLocale={currentLocale}
      />
    </Container>
  );
};

export default Navbar;
