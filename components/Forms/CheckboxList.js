import styled from "styled-components";
import CheckboxInput from "./CheckboxInput";

const Container = styled.div``;
const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const CheckboxList = ({ options, inputName, onChange, label, ...rest }) => {
  return (
    <Container {...rest}>
      <StyledLabel>{label}</StyledLabel>
      {options.map((option) => (
        <CheckboxInput
          key={option.label}
          inputName={inputName}
          onChange={onChange}
          {...option}
        />
      ))}
    </Container>
  );
};

export default CheckboxList;
