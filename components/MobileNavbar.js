import MenuItems from "../utils/menuItems";
import NavLink from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";
import SocialMedia from "../utils/socialMedia";
import Brand from "../components/Brand";

const MobileNavBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 14px;
  padding: 16px;
  z-index: 10;
  transition: all 0.5s ease-in-out, color 0.5s ease-in, padding 0.5s ease-in,
    height 1s ease-in-out;
  &.lightBackground {
    background-color: white;
    color: black;
  }
  &.scrolled-navbar {
    color: black;
    padding: 15px 20px;
    height: 60px;
  }
  @media only screen and (min-width: 850px) {
    display: none;
  }
`;

const NavBarContainer = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLogo = styled.div`
  height: 28px;
  cursor: pointer;
  > svg {
    height: 100%;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 60px;
  gap: 32px;
  flex-flow: column;
  padding: 48px 0 0 0;
`;

const MenuButton = styled.div`
  height: 42px;
  width: 90px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0px 4px 25px rgba(93, 33, 209, 0.2);
  border-radius: 4px;
  font-size: 16px;
  gap: 11px;
  cursor: pointer;

  > svg {
    height: 100%;
    fill: ${(props) =>
      props.positiveStyle ? props.theme.colors.orange : "currentColor"};
  }

  &.open-menu-btn {
    background-color: rgb(255, 255, 255, 0.2);
    color: white;
  }

  &.close-menu-btn {
    color: ${(props) => props.theme.colors.text100};
    background-color: white;
  }
`;

const Panel = styled.div`
  z-index: 2;
  position: absolute;
  height: 100vh;
  top: 0;
  right: -100vw;
  transition: all 0.5s ease-in;
  overflow: auto;
  background: ${(props) => props.theme.gradients.backgroundPurple};
  display: flex;
  gap: 30px;
  flex-flow: column;
  width: 100vw;
  &.show-menu {
    right: 0;
  }
`;

const NavItem = styled.h3`
  display: flex;
  justify-content: center;
  border-bottom: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin: 0;
  color: rgb(255, 255, 255, 0.7);

  &.active > p {
    width: fit-content;
    text-align: center;
    background-color: ${(props) =>
      props.positiveStyle
        ? props.theme.buttons.menuSelectedPositive
        : props.theme.buttons.menuSelectedNegative};
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  }

  &.secondary {
    font-size: 18px;
    line-height: 16px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
`;
const SocialItem = styled.a`
  width: 30px;
  color: rgb(255, 255, 255, 0.7);

  a::active {
    color: rgb(255, 255, 255, 0.7);
  }
`;

const MobileNavbar = ({ router }) => {
  const [showMenu, setShowMenu] = useState(false);
  const positiveStyle = !showMenu;

  return (
    <MobileNavBarWrapper>
      <NavBarContainer>
        <NavLink href="/" passHref>
          <MainLogo onClick={() => setShowMenu(!showMenu)}>
            <Brand height="28" width="150" positive={positiveStyle} />
          </MainLogo>
        </NavLink>

        <MenuButton
          onClick={() => setShowMenu(!showMenu)}
          className={showMenu ? "open-menu-btn" : "close-menu-btn"}
        >
          {showMenu ? <CloseIcon /> : <MenuIcon />}
          Menu
        </MenuButton>
      </NavBarContainer>
      <Panel className={showMenu && "show-menu"}>
        <MenuContainer onClick={() => setShowMenu(!showMenu)}>
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                {item.active && item.mobile && (
                  <NavItem
                    className={`${router.asPath === item.url && "active"} ${
                      item.style
                    }`}
                    key={index}
                  >
                    <NavLink href={item.url} passHref>
                      <p>{item.label}</p>
                    </NavLink>
                  </NavItem>
                )}
              </div>
            );
          })}
        </MenuContainer>
        <SocialContainer>
          {SocialMedia.map(({ icon, url }) => {
            return (
              <SocialItem href={url} key={url}>
                {icon}
              </SocialItem>
            );
          })}
        </SocialContainer>
      </Panel>
    </MobileNavBarWrapper>
  );
};

export default MobileNavbar;
