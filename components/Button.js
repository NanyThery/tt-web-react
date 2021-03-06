import styled from "styled-components";

const Button = styled.button`
  padding: 16px 24px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.orange};

  &:hover {
    background-color: ${(props) => props.theme.colors.orangeDark};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.text80};
    border: 2px solid ${(props) => props.theme.colors.text80};
    background-color: ${(props) => props.theme.colors.text40};
  }
`;
export const ButtonSecondary = styled(Button)`
  color: ${(props) => props.theme.colors.orange};
  border: 2px solid ${(props) => props.theme.colors.orange};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colors.orangeDark};
    border: 2px solid ${(props) => props.theme.colors.orangeDark};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.text80};
    border: 2px solid ${(props) => props.theme.colors.text80};
    background-color: ${(props) => props.theme.colors.text40};
  }
`;

export const ButtonSecondaryWhite = styled(Button)`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  &:hover {
    color: ${(props) => props.theme.colors.orangeDark};
    border: 2px solid ${(props) => props.theme.colors.orangeDark};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.text80};
    border: 2px solid ${(props) => props.theme.colors.text80};
    background-color: ${(props) => props.theme.colors.text40};
  }
`;

export default Button;
