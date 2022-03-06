import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 32px;
  width: 100%;
  max-width: 730px;
  transform: translate(0, -40px);

  @media only screen and (max-width: 730px) {
    border-radius: 0;
  }
`;

const FormContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormContainer;
