import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { aboutUs } from "../../utils/copiesAboutUs";
import { AboutUsIllustration } from "./AboutUsIllustration";
import NavLink from "next/link";
import useBreakpoints from "../../utils/hooks/useBreakpoints";

const HeaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};

  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
  }
`;

const HeroContainer = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  padding: 100px 20px 0 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 850px) {
    background: transparent;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

const HeroInfo = styled.div`
  color: ${(props) => props.theme.colors.text20};
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  box-sizing: border-box;
  gap: 16px;

  @media only screen and (max-width: 850px) {
    align-items: center;
  }
`;

const Title = styled.div`
  > p {
    line-height: 1;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: fit-content;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 18px;

  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

const HeaderImage = styled.div`
  position: relative;
  align-items: center;
  padding: 25px 0 25px 75px;
  box-sizing: border-box;
  padding: 50px;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    padding: 0px;
  }

  @media only screen and (max-width: 375px) {
    padding: 10px;
    height: 200px;
  }

  div.browser-window-pic {
    display: flex;
    width: 85%;
    height: 65%;
    background-image: radial-gradient(circle, #767b91 50%, transparent 51%),
      radial-gradient(circle, #767b91 50%, transparent 51%),
      radial-gradient(circle, #767b91 50%, transparent 51%),
      linear-gradient(to bottom, #e1e5ee 25px, #150639 26px);
    background-size: 15px 15px, 15px 15px, 15px 15px, 100% 100%;
    background-position: 5px 5px, 25px 5px, 45px 5px, top right;
    background-repeat: no-repeat;
    padding: 50px 25px 25px 25px;
    border-radius: 8px;

    @media only screen and (max-width: 850px) {
      box-sizing: border-box;
      width: 350px;
      height: 250px;
      justify-content: center;
      padding: 30px 10px 10px 10px;
    }

    > img {
      width: 100%;
    }

    @media only screen and (max-width: 650px) {
      max-width: 284px;
      min-width: 250px;
    }

    @media only screen and (max-width: 375px) {
      width: 200px;
      height: 175px;
    }
  }
`;

const InitialVector = styled.div`
  display: flex;
  justify-content: center;

  div.timeline-vector {
    z-index: 0;
  }

  .timeline-vector-desktop {
    position: relative;
    right: 50px;
  }
`;

const Header = () => {
  const breakpoint = useBreakpoints();
  const isMobileVersion = ["xs", "s", "m"];

  return (
    <HeaderContainer>
      <HeroContainer>
        <HeroInfo>
          <Title>{aboutUs.header.title}</Title>
          <SubTitle>{aboutUs.header.subtitle}</SubTitle>
          <Description>{aboutUs.header.description}</Description>
          <NavLink href="/about">{aboutUs.header.link}</NavLink>
        </HeroInfo>
        <HeaderImage>
          <div className="browser-window-pic">
            <img
              src="../img/About-Us-Image.png"
              alt="Los profes y mentores"
            ></img>
          </div>
          <AboutUsIllustration
            src="/img/aboutUs/planet.png"
            size={[135, 85]}
            position={[76, 0, 0, 60]}
            opacity = {1}
          />
        </HeaderImage>
      </HeroContainer>
      <InitialVector>
        {isMobileVersion.includes(breakpoint) ? (
          <div className="timeline-vector">
            <Image
              src="/img/aboutUs/vectorLineMobile.svg"
              width="4px"
              height="100px"
              alt="Line Vector"
            />
          </div>
        ) : (
          <div className="timeline-vector-desktop">
            <Image
              src="/img/aboutUs/vectorRightToLeft.svg"
              width="675px"
              height="200px"
            />
          </div>
        )}
      </InitialVector>
    </HeaderContainer>
  );
};

export default Header;
