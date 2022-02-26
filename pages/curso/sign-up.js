import styled from "styled-components";
import FormContainer from "../../components/Forms/FormContainer";
import FormHeader from "../../components/Forms/FormHeader";
import forms from "../../utils/forms.json";
import { useState } from "react";
import StepsCount from "../../components/Forms/StepsCount";
import { GenericBadge } from "../../components/GenericBadge";
import TextInput from "../../components/Forms/TextInput";
import RadioInput from "../../components/Forms/RadioInput";
import CheckboxInput from "../../components/Forms/CheckboxInput";
import MotivationVideo from "../../components/Forms/MotivationVideo";
import PrivacyPolicy from "../privacy-policy";
import TextAreaInput from "../../components/Forms/TextAreaInput";
import { ButtonPrimary, ButtonSecondary } from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const FieldContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

const FormActions = styled.div`
  display: flex;
  gap: 8px;
`;
const SignUp = ({ type = "full-power" }) => {
  //type: full-power, a-tu-aire, voluntarios
  const [step, setStep] = useState(1);
  const totalSections = forms[type]["form"].length;
  const [formData, setFormData] = useState({});

  const onDataChange = (evt) => {
    setFormData((prevData) => ({
      ...prevData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const inputTypeComponents = {
    radio: RadioInput,
    text: TextInput,
    checkbox: CheckboxInput,
    ["motivation-video"]: MotivationVideo,
    ["privacy-policy"]: PrivacyPolicy,
    ["text-area"]: TextAreaInput,
  };

  const renderInputComponent = () => {
    return function renderComponent(
      { label, type, inputName, ...restProps },
      index
    ) {
      const InputComponent = inputTypeComponents[type];

      return (
        <InputComponent
          label={label}
          key={index}
          onChange={onDataChange}
          value={formData[inputName]}
          inputName={inputName}
          {...restProps}
        />
      );
    };
  };

  return (
    <Container>
      <FormHeader
        title={forms[type].title}
        description={forms[type].description}
        variation={type}
      />
      <FormContainer>
        <StepsCount currentStep={step + 1} totalSteps={totalSections} />

        <GenericBadge variant="purpleLight">
          {forms[type]["form"][step].section}
        </GenericBadge>
        <FieldContainer>
          {forms[type]["form"][step]["fields"].map(renderInputComponent())}
        </FieldContainer>
        <FormActions>
          <ButtonSecondary
            disabled={step === 0}
            onClick={() => setStep((prev) => prev - 1)}
          >
            Volver
          </ButtonSecondary>
          {step + 1 !== totalSections ? (
            <ButtonPrimary onClick={() => setStep((prev) => prev + 1)}>
              {" "}
              Siguiente{" "}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary> ¡Vamos! </ButtonPrimary>
          )}
        </FormActions>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
