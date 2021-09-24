import MenuItems from "../utils/menuItems"
import NavLink from "next/link"
import styled from "styled-components"

const NavbarContainerWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
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
  transition: background-color 1s ease-in-out, color 0.5s ease-in,
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const NavItem = styled.div`
  cursor: pointer;
  border-bottom: none;
  transition: all 0.2s ease-in-out;
  &.active {
    color: purple;
  }
  & :hover {
    color: gray;
    margin-bottom: 5px;
  }
`

const MainLogo = styled.div`
  height: 30px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`

const DesktopNavbar = ({
  router,
  scrolledNavBar,
  isDarkMode,
  currentLocale,
}) => {
  return (
    <NavbarContainerWrapper
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
        <ItemsContainer>
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
        </ItemsContainer>
      </NavBarContainer>
    </NavbarContainerWrapper>
  )
}

export default DesktopNavbar
