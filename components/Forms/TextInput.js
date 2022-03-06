import styled from "styled-components";
import ErrorText from "./ErrorText";
import RequiredLabel from "./RequiredLabel";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const StyledInput = styled.input`
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.text40};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.purpleLight};
    border: none;
  }
`;

const TextInput = ({
  label,
  value,
  onChange = () => {},
  inputName,
  error,
  touched,
  showRequired,
  ...others
}) => {
  return (
    <Container>
      {touched}
      {label && (
        <StyledLabel>
          {label} {showRequired && <RequiredLabel />}
        </StyledLabel>
      )}
      <StyledInput
        name={inputName}
        type="text"
        value={value}
        onChange={onChange}
        {...others}
      />
      {error && touched && <ErrorText> {error} </ErrorText>}
    </Container>
  );
};

export default TextInput;
