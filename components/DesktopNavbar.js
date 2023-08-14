import MenuItems from "../utils/menuItems";
import NavLink from "next/link";
import styled from "styled-components";
import Brand from "./Brand";

const NavbarContainerWrapper = styled.div`
  width: 100%;
  max-width: 1150px;
  height: 90px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: transparent;
  font-size: 14px;
  color: white;
  top: ${(props) => props.startingPosition};
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
`;

const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between; ;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media only screen and (max-width: 1000px) {
    gap: 20px;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  border-bottom: none;
  transition: all 0.2s ease-in-out;

  & a {
    text-decoration: none;
    color: inherit;
  }
  &.active {
    background-color: ${(props) =>
      props.positiveStyle
        ? props.theme.buttons.menuSelectedPositive
        : props.theme.buttons.menuSelectedNegative};
    padding: 8px;
    border-radius: 4px;
  }

  & :hover {
    color: ${(props) =>
      props.positiveStyle
        ? props.theme.buttons.menuSelectedPositive
        : props.theme.buttons.menuSelectedNegative};
    text-decoration: underline;
    margin-bottom: 5px;
  }
  ${(props) =>
    props.itemStyle === "action" &&
    "padding: 8px; border: 2px solid white; border-radius: 4px"}
`;

const MainLogo = styled.div`
  height: 30px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`;

const DesktopNavbar = ({
  router,
  scrolledNavBar,
  isDarkMode,
  startingPosition,
}) => {
  const positiveStyle = (!isDarkMode && !scrolledNavBar) || scrolledNavBar;
  return (
    <NavbarContainerWrapper
      startingPosition={startingPosition}
      className={`${scrolledNavBar && "scrolled-navbar"} ${
        !isDarkMode && "lightBackground"
      }`}
    >
      <NavBarContainer>
        <NavLink href="/" passHref>
          <MainLogo>
            <Brand positive={positiveStyle} />
          </MainLogo>
        </NavLink>
        <ItemsContainer>
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                {item.active && item.desktop && (
                  <NavItem
                    positiveStyle={positiveStyle}
                    itemStyle={item.style}
                    className={router.asPath === item.url && "active"}
                    key={index}
                  >
                    <NavLink href={item.url} passHref>
                      {item.label}
                    </NavLink>
                  </NavItem>
                )}
              </div>
            );
          })}
        </ItemsContainer>
      </NavBarContainer>
    </NavbarContainerWrapper>
  );
};

export default DesktopNavbar;
