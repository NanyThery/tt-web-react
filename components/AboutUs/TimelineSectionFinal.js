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
  height: 750px;

  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
  }
`;

const Title = styled.h2`
  > h2 {
    line-height: 1;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #f2f6ff;
  }
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
  height: 130px;
  @media only screen and (max-width: 850px) {
    width: 370px;
    margin: 15px;
  }
`;

const TimelineFinalTweet = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 60px;
  position: relative;
  background: #6f58d7;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 10px;

  .final-tweet {
    border-radius: 16px;
  }

  .timeline-gif {
    padding: 15px !important;
  }
`;

const TimelineSectionFinal = () => (
  <TimelineSectionContainer>
    <Title>
      <h2>{aboutUs.timeline[3].title}</h2>
    </Title>
    <Description>{aboutUs.timeline[3].description}</Description>
    <TimelineFinalTweet>
      <Image
        className="final-tweet"
        src="/img/aboutUs/tweets/tweetThanks.png"
        width="400px"
        height="130px"
        alt="Gracias tweet"
      />
      <Image
        className="timeline-gif"
        src="/img/aboutUs/sectionFinal/omg-thanks.gif"
        width="445px"
        height="275px"
        alt="Shirley Temple gif"
      />
    </TimelineFinalTweet>
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal1.svg"
      size={[65, 55]}
      position={[12, 0, 0, 5]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal2.svg"
      size={[65, 65]}
      position={[30, 0, 0, 12]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal3.svg"
      size={[160, 94]}
      position={[53, 0, 0, 10]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal4.svg"
      size={[65, 73]}
      position={[76, 0, 0, 17]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal5.svg"
      size={[160, 94]}
      position={[14, 0, 0, 85]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal6.svg"
      size={[65, 70]}
      position={[38, 0, 0, 80]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal7.svg"
      size={[65, 65]}
      position={[67, 0, 0, 88]}
    />
    <AboutUsIllustration
      src="/img/aboutUs/sectionFinal/IllustrationFinal8.svg"
      size={[65, 48]}
      position={[82, 0, 0, 75]}
    />
  </TimelineSectionContainer>
);

export default TimelineSectionFinal;
