import styled from "styled-components";
import TimelineContent from "./TimelineContent";
import aboutUs from "../../utils/copiesAboutUs";
import TwitterCard from "../TwitterCard";
import LinePath from "./LinePath";

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
`;

const TimelineSection = () => {
  return (
    <TimelineSectionContainer id="timeline">
      <LinePath header={true} />
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
      <LinePath rightToLeft={false} />
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
      <LinePath />
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
      <LinePath rightToLeft={false} />
    </TimelineSectionContainer>
  );
};

export default TimelineSection;
