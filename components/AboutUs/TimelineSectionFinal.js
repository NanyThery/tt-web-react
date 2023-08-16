import styled from "styled-components";
import aboutUs from "../../utils/copiesAboutUs.json";
import Image from "next/image";
import { AboutUsIllustration } from "./AboutUsIllustration";

const TimelineSectionContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  width: 100%;
  padding: 100px 0 100px 0;

  @media only screen and (max-width: 850px) {
    padding: 24px;
  }
`;

const Title = styled.h2`
  line-height: 1;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: white;

  margin-bottom: 24px;
  @media only screen and (max-width: 850px) {
    font-size: 28px;
    line-height: 32px;
    margin-top: 50px;
  }
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #f2f6ff;
  width: 730px;

  @media only screen and (max-width: 850px) {
    width: 370px;
    margin: 15px;
  }
`;

const TimelineSectionFinal = ({ copies }) => (
  <TimelineSectionContainer>
    <Title>{copies.title}</Title>
    <Description>{copies.description}</Description>

    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal1.svg"
      size={[65, 55]}
      position={[12, 0, 0, 5]}
    />

    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal3.svg"
      size={[160, 94]}
      position={[53, 0, 0, 10]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal6.svg"
      size={[65, 70]}
      position={[38, 0, 0, 80]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal7.svg"
      size={[65, 65]}
      position={[67, 0, 0, 70]}
    />
  </TimelineSectionContainer>
);

export default TimelineSectionFinal;
