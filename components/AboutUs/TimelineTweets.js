import styled from "styled-components";
import Image from "next/image";

const TimelineSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const TimelineTweetsVector = styled.div`
  div.timeline-vector {
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
    left: 50%;
  }
`;

const TimelineTweet = styled.div`
  div.timeline-screenshot-tweet {
    position: relative;
    background: #000000;
    padding: 10px;
    z-index: 0;
  }

  img {
    width: auto;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  div.timeline-screenshot-tweet:nth-child(even) {
    right: 60%;
    border-radius: 8px 0 8px 8px;
    ::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      background: linear-gradient(135deg, #000 50%, transparent 51%);
      right: -19px;
      top: 0;
    }
    @media only screen and (max-width: 850px) {
      border-radius: 8px;
      right: 0;
      margin: 20px 0;
      ::before {
        background: none;
      }
    }
  }
  div.timeline-screenshot-tweet:nth-child(odd) {
    left: 60%;
    border-radius: 0 8px 8px 8px;
    ::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      background: linear-gradient(-135deg, #000 50%, transparent 51%);
      left: -25px;
      top: 0;
    }
    @media only screen and (max-width: 850px) {
      border-radius: 8px;
      margin: 30px 0;
      left: 0;
      ::before {
        background: none;
      }
    }
  }
`;

const TimelineTweets = ({ tweetsScreenshots }) => (
  <TimelineSectionContainer>
    <TimelineTweetsVector>
      <div className="timeline-vector">
        <Image src="/img/aboutUs/vector6.png" width="5px" height="1100px" />
      </div>
      <TimelineTweet>
        {tweetsScreenshots.map((tweet) => (
          <div className="timeline-screenshot-tweet">
            <img src={`${tweet}`}></img>
          </div>
        ))}
      </TimelineTweet>
    </TimelineTweetsVector>
  </TimelineSectionContainer>
);

export default TimelineTweets;
