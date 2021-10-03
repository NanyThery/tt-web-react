import MenuItems from "../utils/menuItems"
import NavLink from "next/link"
import styled, { theme } from "styled-components"
import Brand from "./Brand"

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

  padding: 20px 20px;
  z-index: 10;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in,
    padding 0.5s ease-in, height 1s ease-in-out;
  &.lightBackground {
    color: ${(props) => props.theme.colors.text100};
  }
  &.scrolled-navbar {
    color: ${(props) => props.theme.colors.text100};
    padding: 5px 20px;
    height: 60px;
  }

  @media only screen and (max-width: 850px) {
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
  gap: 48px;

  @media only screen and (max-width: 1000px) {
    gap: 20px;
  }
`

const NavItem = styled.div`
  cursor: pointer;
  border-bottom: none;
  transition: all 0.2s ease-in-out;
  &.active {
    background-color: ${(props) =>
      props.positiveStyle
        ? props.theme.buttons.menuSelectedPositive
        : props.theme.buttons.menuSelectedNegative};
    padding: 8px;
    border-radius: 4px;
  }
  & :hover {
    color: white;
    margin-bottom: 5px;
  }
  ${(props) =>
    props.itemStyle === "action" &&
    "padding: 8px; border: 2px solid white; border-radius: 4px"}
`

const MainLogo = styled.div`
  height: 30px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`

const DesktopNavbar = ({ router, scrolledNavBar, isDarkMode }) => {
  const positiveStyle = (!isDarkMode && !scrolledNavBar) || scrolledNavBar
  return (
    <NavbarContainerWrapper
      className={`${scrolledNavBar && "scrolled-navbar"} ${
        !isDarkMode && "lightBackground"
      }`}
    >
      <NavBarContainer>
        <NavLink href="/">
          <MainLogo>
            <Brand positive={positiveStyle} />
          </MainLogo>
        </NavLink>
        <ItemsContainer>
          {MenuItems.map((item, index) => {
            return (
              <>
                {item.active && item.desktop && (
                  <NavItem
                    positiveStyle={positiveStyle}
                    itemStyle={item.style}
                    className={router.asPath === item.url && "active"}
                    key={index}
                  >
                    <NavLink href={item.url}>
                      <p>{item.label}</p>
                    </NavLink>
                  </NavItem>
                )}
              </>
            )
          })}
        </ItemsContainer>
      </NavBarContainer>
    </NavbarContainerWrapper>
  )
}

export default DesktopNavbar
