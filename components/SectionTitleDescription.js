import styled from "styled-components";

export const Title = styled.h1`
  max-width: 400px;
  color: ${(props) => props.theme.colors.purpleDark};
  line-height: 1;
  margin-bottom: 16px;

  @media only screen and (max-width: 850px) {
    max-width: 100%;
    text-align: center;
    font-size: 36px;
  }
`;
const DescriptionContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;
  width: 100%;

  > div {
    > div {
      color: ${(props) => props.theme.colors.text80};
      line-height: 2;
    }
  }

  @media only screen and (max-width: 850px) {
    > div {
      width: 100%;
    }
  }
`;

const SectionTitleDescription = ({ title, description, ...others }) => {
  return (
    <DescriptionContainer {...others}>
      <div>
        <Title>{title}</Title>
        <div>{description}</div>
      </div>
    </DescriptionContainer>
  );
};

export default SectionTitleDescription;
