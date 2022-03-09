import styled from "styled-components";
import SectionLayout from "../SectionLayout";

const TimelineSectionContent = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.reverse == true ? "row" : "row-reverse")};

  @media only screen and (max-width: 850px) {
    margin-top: 16px;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  width: 100%;
  > h2 {
    line-height: 1;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #2a324b;
  }

  @media only screen and (max-width: 850px) {
    font-size: 28px;
    line-height: 37px;
    text-align: center;
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #767b91;
  width: 445px;
  height: 212px;

  @media only screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    height: 150px;

    & .left-col-content {
      & .img-container {
        position: relative;
        margin: 0 auto;
        width: 60%;
        height: 60%;
      }
    }
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px 24px;

  @media only screen and (max-width: 850px) {
    padding: 10px 24px;
  }
`;

const TimelineTweet = styled.div`
  margin: 20px 60px;
  position: relative;
  background: #ffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 10px;
  z-index: 1;

  img {
    width: auto;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  @media only screen and (max-width: 850px) {
    border-radius: 8px;
    margin: 20px 10px;
  }
`;

const TimelineContent = ({ title, description, path, reverse = false }) => {
  return (
    <TimelineSectionContent reverse={reverse}>
      <LeftCol>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftCol>
      <RightCol>
        <TimelineTweet>
          <img src={`/img/aboutUs/tweets/${path}`}></img>
        </TimelineTweet>
      </RightCol>
    </TimelineSectionContent>
  );
};

export default TimelineContent;
