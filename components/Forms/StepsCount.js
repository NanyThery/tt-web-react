import styled from "styled-components";

const StyledText = styled.p`
  color: ${(props) => props.theme.colors.purpleLight};
  font-weight: 700;
  font-size: 12px;
`;

const StepsCount = ({ currentStep, totalSteps }) => {
  return (
    <StyledText>
      Paso {currentStep} de {totalSteps}
    </StyledText>
  );
};

export default StepsCount;
