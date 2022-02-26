import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const StyledInput = styled.textarea`
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.text40};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.purpleLight};
    border: none;
  }
`;

const TextAreaInput = ({
  label,
  value,
  onChange = () => {},
  inputName,
  ...others
}) => {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        name={inputName}
        value={value}
        onChange={onChange}
        {...others}
      />
    </Container>
  );
};

export default TextAreaInput;
