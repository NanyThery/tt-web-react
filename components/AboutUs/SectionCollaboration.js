import styled from "styled-components";
import { aboutUs } from "../../utils/copiesAboutUs";
import { ButtonSecondaryWhite } from "../Button";
import Image from "next/image";
import NavLink from "next/link";

const TimelineSectionContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  width: 100%;
  height: 850px;
  z-index: 1;
  position: relative;
  @media only screen and (max-width: 850px) {
  }
`;

const Title = styled.h2`
  > h2 {
    margin: 15px 0px;
    line-height: 1;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #f2f6ff;
  }
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  margin: 24px 0px;
  width: 730px;
  height: 130px;
  line-height: 26px;
  text-align: center;
  color: #f2f6ff;
  @media only screen and (max-width: 850px) {
    width: 530px;
    margin-bottom: 50px;
  }
`;

const HandsVector = styled.div`
  .hands-wrapper {
    max-width: 1000px;
    max-height: 300px;
    width: 950px;
    height: 260px;
    position: relative;
  }
  .hand {
    position: absolute;
    bottom: -46.5%;
  }
  .hands-vector1 {
    transform: rotate(0.19deg);
    left: 10%;
  }
  .hands-vector2 {
    left: 27%;
    transform: rotate(1deg);
  }
  .hands-vector3 {
    left: 43%;
  }
  .hands-vector4 {
    right: 23%;
    transform: rotate(-1deg);
  }
  .hands-vector5 {
    right: 9%;
  }

  @media only screen and (max-width: 850px) {
    .hand {
      position: absolute;
      bottom: -41.5%;
    }
  }
`;

const SectionCollaboration = () => (
  <TimelineSectionContainer>
    <Image src="/img/icon.svg" width="55px" height="55px" />
    <Title>
      <h2> {aboutUs.collaboration.title}</h2>
    </Title>
    <Description>
      <p>{aboutUs.collaboration.description}</p>
    </Description>

    <NavLink href={`/sign-up/voluntarios`} passHref>
      <ButtonSecondaryWhite onClick={() => {}}>
        {aboutUs.button}
      </ButtonSecondaryWhite>
    </NavLink>
    <HandsVector>
      <div className="hands-wrapper">
        <div className="hand hands-vector1">
          <Image src="/img/aboutUs/hand1.svg" width="170px" height="250px" />
        </div>
        <div className="hand hands-vector2">
          <Image src="/img/aboutUs/hand2.svg" width="170px" height="250px" />
        </div>
        <div className="hand hands-vector3">
          <Image src="/img/aboutUs/hand3.svg" width="170px" height="250px" />
        </div>
        <div className="hand hands-vector4">
          <Image src="/img/aboutUs/hand4.svg" width="170px" height="250px" />
        </div>
        <div className="hand hands-vector5">
          <Image src="/img/aboutUs/hand5.svg" width="170px" height="250px" />
        </div>
      </div>
    </HandsVector>
  </TimelineSectionContainer>
);

export default SectionCollaboration;
