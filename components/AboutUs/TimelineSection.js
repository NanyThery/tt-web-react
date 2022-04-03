import styled from "styled-components";
import Image from "next/image";
import TimelineContent from "./TimelineContent";
import aboutUs from "../../utils/copiesAboutUs";
import useBreakpoints from "../../utils/hooks/useBreakpoints";
import TwitterCard from "../TwitterCard";

const TimelineSectionContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0 0 0;
  background: #f2f6ff;
  position: relative;
  @media only screen and (max-width: 850px) {
    padding: 50px 0 24px 0;
  }

  div.timeline-vector {
    position: relative;
    bottom: 40px;
    z-index: 0;
  }

  div.timeline-vector:last-child {
    bottom: 20px;
  }

  .timeline-vector-desktop {
    position: relative;
    right: 100px;
  }

  .timeline-vector-desktop:last-child {
    position: relative;
    right: 200px;
  }
`;

const InitialVector = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: absolute;
  top: -120px;
  left: 0;
  z-index: 0;

  > div {
    &.mobile-line {
      display: none;
    }
    @media screen and (max-width: 850px) {
      &.mobile-line {
        display: block;
      }

      &.desktop-line {
        display: none;
      }
    }
  }
  @media screen and (max-width: 850px) {
    top: -50px;
  }
`;

const TimelineSection = () => {
  const breakpoint = useBreakpoints();
  const isMobileVersion = ["xs", "s"];

  return (
    <TimelineSectionContainer id="timeline">
      <InitialVector>
        <div className="mobile-line">
          <Image
            src="/img/aboutUs/vectorLineMobile.svg"
            width="20px"
            height="100px"
            layout="fixed"
            alt="camino about us"
          />
        </div>

        <div className="desktop-line">
          <Image
            src="/img/aboutUs/vectorRightToLeft.svg"
            width="675px"
            height="200px"
            layout="fixed"
            alt="camino about us"
          />
        </div>
      </InitialVector>
      <TimelineContent
        title={aboutUs.timeline[0].title}
        description={aboutUs.timeline[0].description}
        reverse={true}
      >
        <TwitterCard
          imageFileName={aboutUs.timeline[0].tweet.imageFileName}
          userName={aboutUs.timeline[0].tweet.userName}
          twitterUser={aboutUs.timeline[0].tweet.twitterUser}
          dateLine={aboutUs.timeline[0].tweet.dateLine}
        >
          {aboutUs.timeline[0].tweet.tweetContent}
        </TwitterCard>
      </TimelineContent>
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
            src="/img/aboutUs/VectorLeftToRight.svg"
            width="600px"
            height="200px"
          />
        </div>
      )}

      <TimelineContent
        title={aboutUs.timeline[1].title}
        description={aboutUs.timeline[1].description}
        path={"tweetJM2.png"}
        reverse={false}
      >
        <TwitterCard
          imageFileName={aboutUs.timeline[1].tweet.imageFileName}
          userName={aboutUs.timeline[1].tweet.userName}
          twitterUser={aboutUs.timeline[1].tweet.twitterUser}
          dateLine={aboutUs.timeline[1].tweet.dateLine}
        >
          {aboutUs.timeline[1].tweet.tweetContent}
        </TwitterCard>
      </TimelineContent>
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
            src="/img/aboutUs/VectorRightToLeft.svg"
            width="775px"
            height="200px"
          />
        </div>
      )}
      <TimelineContent
        title={aboutUs.timeline[2].title}
        description={aboutUs.timeline[2].description}
        reverse={true}
      >
        <TwitterCard
          imageFileName={aboutUs.timeline[2].tweet.imageFileName}
          userName={aboutUs.timeline[2].tweet.userName}
          twitterUser={aboutUs.timeline[2].tweet.twitterUser}
          dateLine={aboutUs.timeline[2].tweet.dateLine}
        >
          {aboutUs.timeline[2].tweet.tweetContent}
        </TwitterCard>
      </TimelineContent>
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
            src="/img/aboutUs/VectorLeftToRight.svg"
            width="775px"
            height="200px"
          />
        </div>
      )}
    </TimelineSectionContainer>
  );
};

export default TimelineSection;
