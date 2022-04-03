import styled from "styled-components";
import SectionLayout from "../SectionLayout";

const TimelineSectionContent = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;

  flex-direction: ${(props) => (props.reverse == true ? "row" : "row-reverse")};

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  width: 100%;
  line-height: 1;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #2a324b;

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

  @media only screen and (max-width: 1100px) {
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
  max-width: 445px;

  @media only screen and (max-width: 1100px) {
    height: 100%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    justify-content: center;

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
  display: flex;
  justify-content: ${(props) => props.align};
  align-content: center;
`;

const TimelineContent = ({ title, description, reverse = false, children }) => {
  return (
    <TimelineSectionContent reverse={reverse}>
      <LeftCol>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftCol>
      <RightCol align={reverse ? "flex-end" : "flex-start"}>
        {children}
      </RightCol>
    </TimelineSectionContent>
  );
};

export default TimelineContent;
