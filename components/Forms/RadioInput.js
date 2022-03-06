import styled from "styled-components";
import ErrorText from "./ErrorText";
import RequiredLabel from "./RequiredLabel";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledRadioLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

const StyledRadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:checked + ${StyledRadioLabel} {
    &::after {
      content: "";
      background-color: ${(props) => props.theme.colors.purpleLight};
      position: absolute;
      border-radius: 50%;
      top: 3px;
      right: 3px;
      width: 16px;
      height: 16px;
    }
  }
`;
const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const RadioInput = ({
  label,
  options,
  value,
  error,
  onChange = () => {},
  inputName,
  touched,
  showRequired,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <StyledLabel>
        {label} {showRequired && <RequiredLabel />}
      </StyledLabel>
      {options.map((option, index) => {
        return (
          <RadioWrapper key={index}>
            <StyledRadioInput
              id={option.value}
              type="radio"
              name={inputName}
              value={option.value}
              onChange={onChange}
              checked={option.value === value}
              {...option}
            />
            <StyledRadioLabel htmlFor={value}></StyledRadioLabel>
            <p>{option.label}</p>
          </RadioWrapper>
        );
      })}
      {error && touched && <ErrorText> {error} </ErrorText>}
    </Container>
  );
};

export default RadioInput;
