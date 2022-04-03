import styled from "styled-components";
import aboutUs from "../../utils/copiesAboutUs.json";
import TwitterCard from "../TwitterCard";

const LeftCol = styled.div`
  padding: 80px 0 30px 0;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 475px;
  gap: 48px;

  @media screen and (max-width: 850px) {
    padding: 48px 0 0 0;
  }
`;
const RightCol = styled.div`
  padding: 48px 0 0 0;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 475px;
  gap: 48px;
`;

const TimelineSectionContainer = styled.div`
  padding: 0 30px 0px 30px;
  display: flex;
  justify-content: center;
  gap: 30px;

  > div {
    &.timeline-vector {
      width: 10px;
      background-image: linear-gradient(
        rgba(199, 204, 219, 0.6) 60%,
        transparent 20%
      );
      background-position: top;
      background-size: 4px 20px;
      background-repeat: repeat-y;
    }
  }

  @media screen and (max-width: 850px) {
    padding: 0 30px 30px 30px;
    flex-flow: column;
    align-items: center;
    position: relative;
    gap: 10px;
    > div {
      &.timeline-vector {
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -1;
      }
    }
  }
`;

const TimelineTweets = () => (
  <TimelineSectionContainer>
    <LeftCol>
      {aboutUs.timelineTweets.map((tweet, index) => {
        if (index % 2 == 0)
          return (
            <TwitterCard
              key={index}
              imageFileName={tweet.imageFileName}
              userName={tweet.userName}
              twitterUser={tweet.twitterUser}
              dateLine={tweet.dateLine}
            >
              {tweet.tweetContent}
            </TwitterCard>
          );
      })}
    </LeftCol>
    <div className="timeline-vector"></div>
    <RightCol>
      {aboutUs.timelineTweets.map((tweet, index) => {
        if (index % 2 != 0)
          return (
            <TwitterCard
              key={index}
              imageFileName={tweet.imageFileName}
              userName={tweet.userName}
              twitterUser={tweet.twitterUser}
              dateLine={tweet.dateLine}
            >
              {tweet.tweetContent}
            </TwitterCard>
          );
      })}
    </RightCol>
  </TimelineSectionContainer>
);

export default TimelineTweets;
