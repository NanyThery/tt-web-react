import styled from "styled-components";
import Image from "next/image";
import TimelineContent from "./TimelineContent";
import { aboutUs } from "../../utils/copiesAboutUs";
import useBreakpoints from "../../utils/hooks/useBreakpoints";

const TimelineSectionContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f2f6ff;

  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
  }

  div.timeline-vector {
    bottom: 40px;
    z-index: 0;
    position: relative;
  }

  div.timeline-vector:last-child {
    bottom: 20px;
  }
`;

const TimelineSection = () => {
  const breakpoint = useBreakpoints();
  const isMobileVersion = ["xs", "s", "m"];
  return (
    <TimelineSectionContainer>
      <TimelineContent
        title={aboutUs.timeline[0].title}
        description={aboutUs.timeline[0].description}
        path={"tweetJM1.png"}
        reverse={false}
      ></TimelineContent>
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
        <Image src="/img/aboutUs/vector2.png" width="475px" height="200px" />
      )}

      <TimelineContent
        title={aboutUs.timeline[1].title}
        description={aboutUs.timeline[1].description}
        path={"tweetJM2.png"}
        reverse={true}
      ></TimelineContent>
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
        <Image src="/img/aboutUs/vector3.png" width="475px" height="200px" />
      )}
      <TimelineContent
        title={aboutUs.timeline[2].title}
        description={aboutUs.timeline[2].description}
        path={"tweetJM3.png"}
        reverse={false}
      ></TimelineContent>
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
        <Image src="/img/aboutUs/vector3.png" width="475px" height="200px" />
      )}
    </TimelineSectionContainer>
  );
};

export default TimelineSection;
