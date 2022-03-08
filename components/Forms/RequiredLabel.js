import styled from "styled-components";

const StyledText = styled.span`
  font-size: 12px;
`;

const RequiredLabel = () => {
  return <StyledText>{`(requerido)`}</StyledText>;
};

export default RequiredLabel;
