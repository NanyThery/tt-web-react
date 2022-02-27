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
import { useFormik } from "formik";

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

// Helper functions

const getDinamycFormProps = (formName) => {
  let formProps = { modalidad: formName };

  forms[formName]["form"].forEach((section) => {
    const props = section.fields.reduce((acc, item) => {
      acc[item.inputName] = "";
      return acc;
    }, {});

    formProps = { ...formProps, ...props };
  });
  return formProps;
};

const SignUp = ({ type = "full-power" }) => {
  //type: full-power, a-tu-aire, voluntarios
  const [step, setStep] = useState(0);
  const totalSections = forms[type]["form"].length;
  const initialFormProps = getDinamycFormProps(type);

  const formik = useFormik({
    initialValues: initialFormProps,
    onSubmit: (values, actions) => {
      return submitForm(values);
    },
  });

  const { handleSubmit, handleChange, values, errors, isSubmitting } = formik;

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
          onChange={handleChange}
          value={values[inputName]}
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
          {step > 0 && (
            <ButtonSecondary onClick={() => setStep((prev) => prev - 1)}>
              Volver
            </ButtonSecondary>
          )}
          {step + 1 !== totalSections ? (
            <ButtonPrimary onClick={() => setStep((prev) => prev + 1)}>
              {" "}
              Siguiente{" "}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary type="submit" onClick={handleSubmit}>
              ¡Vamos!
            </ButtonPrimary>
          )}
        </FormActions>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
