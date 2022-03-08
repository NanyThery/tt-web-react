import styled from "styled-components";

const StyledText = styled.p`
  color: red;
  font-size: 12px;
`;

const ErrorText = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default ErrorText;
