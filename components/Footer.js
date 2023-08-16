import styled from "styled-components";
import MenuItems from "../utils/menuItems";
import SocialMedia from "../utils/socialMedia";
import Brand from "../components/Brand";
import NavLink from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: small;
  color: ${(props) => props.theme.colors.text80};
  display: flex;
  background-color: white;
  padding: 80px 200px;
  gap: 50px;

  @media only screen and (max-width: 850px) {
    flex-flow: column;
    justify-content: center;
    padding: 48px 30px;

    > :nth-child(2) {
      order: 3;
    }
    > :nth-child(3) {
      order: 2;
    }
  }
`;
const Section = styled.div`
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: space-between;

  > ul {
    margin: 0;
    padding: 0;
    columns: 2;
    column-gap: 60px;
    line-height: 50px;
    list-style: none;
  }

  @media only screen and (max-width: 850px) {
    align-items: center;
    gap: 24px;
    justify-content: center;

    &.social-container {
      justify-content: space-between;
      flex-flow: row;
      padding: 0 30px;
    }
  }
`;
const NavItem = styled.li`
  font-size: small;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.text100};
  }

  > p {
    line-height: 40px;
  }
`;

const SocialItem = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 20px;
  color: ${(props) => props.theme.colors.text80};
  text-decoration: none;

  > span {
    height: 100%;

    > svg {
      height: 100%;
    }
  }

  @media only screen and (max-width: 850px) {
    > p.social-label {
      display: none;
    }
  }
`;
const Footer = () => {
  const today = new Date();
  const footerItems = {
    links: [
      ...MenuItems,
      {
        label: "Política de cookies",
        url: "/cookies",
        active: true,
        style: "link",
        mobile: true,
        desktop: true,
      },
      {
        label: "Política de privacidad",
        url: "/privacy-policy",
        active: true,
        style: "link",
        mobile: true,
        desktop: true,
      },
      {
        label: "Código de conducta",
        url: "/code-conduct",
        active: true,
        style: "link",
        mobile: true,
        desktop: true,
      },
    ],
    social: [...SocialMedia],
  };

  return (
    <Container>
      <Section>
        <Brand height="28" width="150" positive={true} />
        {/* <NavItem>
          <NavLink href={"/code-conduct"}>
            <p>Código de conducta</p>
          </NavLink>
        </NavItem> */}
        <p>© Teach[T3ch] {today.getFullYear()}. All rights reserved. </p>
      </Section>

      <Section>
        <ul>
          {footerItems.links.map((item, index) => {
            return (
              <div key={index}>
                {item.active && (
                  <NavItem key={index}>
                    <NavLink href={item.url} passHref>
                      <p>{item.label}</p>
                    </NavLink>
                  </NavItem>
                )}
              </div>
            );
          })}
        </ul>
      </Section>
      <Section className="social-container">
        {SocialMedia.map(({ icon, url, label }) => {
          return (
            <SocialItem href={url} key={url}>
              <span>{icon}</span>
              <p className="social-label">{label}</p>
            </SocialItem>
          );
        })}
      </Section>
    </Container>
  );
};

export default Footer;
