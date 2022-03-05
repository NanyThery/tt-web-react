import styled from "styled-components";
import NavLink from "next/link";
import CheckboxInput from "../components/Forms/CheckboxInput";

const Container = styled.div`
  > p {
    margin-top: 12px;
  }
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const PrivacyPolicy = ({ label, ...props }) => {
  const inputName = "privacy-policy";
  const ChecklistLabel = "Acepto la política de privacidad";

  return (
    <Container>
      <StyledLabel>Política de Privacidad</StyledLabel>
      <p>
        En{" "}
        <NavLink href="/privacy-policy">
          este enlace puedes consultar nuestra política de privacidad
        </NavLink>{" "}
        y cómo trataremos los datos que nos has proporcionado en este
        formulario.
      </p>

      <CheckboxInput label={ChecklistLabel} inputName={inputName} {...props} />
    </Container>
  );
};

export default PrivacyPolicy;
