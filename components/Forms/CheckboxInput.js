import styled from "styled-components";

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
  border-radius: 4px;
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
    border: none;
    background-color: ${(props) => props.theme.colors.purpleLight};
    &::after {
      content: "";
      position: absolute;
      left: 8px;
      top: 4px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const CheckboxInput = ({
  label,
  value,
  sectionLabel,
  onChange = () => {},
  inputName,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <StyledLabel>{sectionLabel}</StyledLabel>

      <RadioWrapper>
        <StyledRadioInput
          id={inputName}
          type="checkbox"
          name={inputName}
          value={value}
          onChange={onChange}
        />
        <StyledRadioLabel htmlFor={value}></StyledRadioLabel>
        <p>{label}</p>
      </RadioWrapper>
    </Container>
  );
};

export default CheckboxInput;
