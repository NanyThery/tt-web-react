import MenuItems from "../utils/menuItems"
import NavLink from "next/link"
import styled from "styled-components"
import { useState } from "react"
import { MenuIcon } from "./Icons"

const MobileNavBarWrapper = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 14px;
  color: white;
  padding: 30px 20px;
  z-index: 10;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in,
    padding 0.5s ease-in, height 1s ease-in-out;
  &.lightBackground {
    background-color: white;
    color: black;
  }
  &.scrolled-navbar {
    background-color: white;
    color: black;
    padding: 15px 20px;
    height: 60px;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const MainLogo = styled.div`
  height: 30px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`

const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
`

const Logo = styled.div`
  height: 30px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`

const Panel = styled.div`
  position: absolute;
  height: 0;
  top: ${({ scrolledNavBar }) => (scrolledNavBar ? "60px" : "100px")};
  margin: 0 auto 0 auto;
  transition: all 0.5s ease-in;
  overflow: hidden;
  color: black;
  background-color: white;
  display: flex;
  flex-flow: column;
  width: ${({ scrolledNavBar }) => (scrolledNavBar ? "100%" : "80%")};
  &.show-menu {
    height: 280px;
  }
`

const NavItem = styled.li`
  cursor: pointer;
  border-bottom: none;
  text-align: center;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  &.active {
    color: red;
  }
`

const MobileNavbar = ({
  router,
  scrolledNavBar,
  isDarkMode,
  currentLocale,
}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <MobileNavBarWrapper
      className={`${scrolledNavBar && "scrolled-navbar"} ${
        !isDarkMode && "lightBackground"
      }`}
    >
      <NavBarContainer>
        <NavLink href="/">
          <MainLogo>
            <img src="../img/logo.svg" />
          </MainLogo>
        </NavLink>

        <Logo onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </Logo>
      </NavBarContainer>
      <Panel
        className={showMenu && "show-menu"}
        scrolledNavBar={scrolledNavBar}
      >
        <MenuContainer onClick={() => setShowMenu(!showMenu)}>
          {MenuItems.map((item, index) => {
            return (
              <NavItem
                className={router.asPath === item.url && "active"}
                key={index}
              >
                {item.active && (
                  <NavLink href={item.url}>
                    <p>{item.label}</p>
                  </NavLink>
                )}
              </NavItem>
            )
          })}
          <NavItem>
            <NavLink
              href={router.asPath}
              locale={currentLocale === "es-ES" ? "en-GB" : "es-ES"}
            >
              {currentLocale === "es-ES" ? "ENG" : "ES"}
            </NavLink>
          </NavItem>
        </MenuContainer>
      </Panel>
    </MobileNavBarWrapper>
  )
}

export default MobileNavbar
