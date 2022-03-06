import styled from "styled-components";
import FormContainer from "../../components/Forms/FormContainer";
import FormHeader from "../../components/Forms/FormHeader";
import forms from "../../utils/forms.json";
import { useEffect, useState } from "react";
import StepsCount from "../../components/Forms/StepsCount";
import { GenericBadge } from "../../components/GenericBadge";
import TextInput from "../../components/Forms/TextInput";
import RadioInput from "../../components/Forms/RadioInput";
import CheckboxInput from "../../components/Forms/CheckboxInput";
import MotivationVideo from "../../components/Forms/MotivationVideo";
import PrivacyPolicy from "../../components/Forms/PrivacyPolicy";
import TextAreaInput from "../../components/Forms/TextAreaInput";
import { ButtonPrimary, ButtonSecondary } from "../../components/Button";
import { useFormik, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import FormConfirmation from "../../components/Forms/FormConfirmation";
import { scrollToTop } from "../../utils/scrollToTop";
import CheckboxList from "../../components/Forms/CheckboxList";

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

const getDinamycFormProps = (form) => {
  let formProps = { modalidad: form };

  forms[form]["form"].forEach((section) => {
    const props = section.fields.reduce((acc, item) => {
      acc[item.inputName] = item.defaultValue;
      return acc;
    }, {});

    formProps = { ...formProps, ...props };
  });
  return formProps;
};

const sendData = async (form) => {
  const url = "/api/db";

  const today = new Date();
  const config = {
    method: "post",
    url,
    data: { date: today, ...form },
    responseType: "text",
  };

  const sendForm = await axios(config);

  return sendForm.status;
};

const SignUp = ({ formsData }) => {
  //type: full-power, a-tu-aire, voluntarios
  const router = useRouter();
  const type = router.query.form;
  const [step, setStep] = useState(0);
  const totalSections = formsData[type]["form"].length;
  const initialFormProps = getDinamycFormProps(type);
  const [sentConfirmation, setSentConfirmation] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, [step]);

  const validate = (values) => {
    const errors = {};

    const requiredSectionFields = formsData[type]["form"][step][
      "fields"
    ].filter((item) => item.required === true);

    requiredSectionFields.forEach((field) => {
      if (!values[field.inputName]) {
        errors[field.inputName] = "Este campo es obligatorio";
      }
    });

    return errors;
  };

  const formik = useFormik({
    initialValues: initialFormProps,
    validate,
    onSubmit: async (values, { resetForm }) => {
      const errors = await formik.validateForm();

      if (Object.keys(errors).length > 0) {
        return;
      }
      const sent = await sendData(values);
      setSentConfirmation(true);
      resetForm();
    },
  });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    formik;

  const inputTypeComponents = {
    radio: RadioInput,
    text: TextInput,
    checkbox: CheckboxInput,
    ["motivation-video"]: MotivationVideo,
    ["privacy-policy"]: PrivacyPolicy,
    ["text-area"]: TextAreaInput,
    ["checkbox-list"]: CheckboxList,
  };

  async function handleNext() {
    const requiredSectionFields = formsData[type]["form"][step][
      "fields"
    ].filter((item) => item.required === true);

    requiredSectionFields.forEach(async (item) => {
      await formik.setFieldTouched(item.inputName, true);
    });

    const errors = await formik.validateForm();

    if (Object.keys(errors).length > 0) {
      return;
    }
    setStep((prev) => prev + 1);
  }

  const renderInputComponent = () => {
    return function renderComponent(
      { label, type, inputName, required, ...restProps },
      index
    ) {
      const InputComponent = inputTypeComponents[type];

      return (
        <InputComponent
          label={label}
          key={index}
          onChange={handleChange}
          value={values[inputName]}
          onBlur={handleBlur}
          touched={touched[inputName]}
          inputName={inputName}
          error={errors[inputName]}
          showRequired={required}
          {...restProps}
        />
      );
    };
  };

  return (
    <Container>
      <FormHeader
        title={formsData[type].title}
        description={formsData[type].description}
        variation={type}
      />
      <FormContainer>
        {sentConfirmation ? (
          <FormConfirmation type={type}></FormConfirmation>
        ) : (
          <>
            <StepsCount currentStep={step + 1} totalSteps={totalSections} />

            <GenericBadge variant="purpleLight">
              {formsData[type]["form"][step].section}
            </GenericBadge>
            <FieldContainer>
              {formsData[type]["form"][step]["fields"].map(
                renderInputComponent()
              )}
            </FieldContainer>
            <FormActions>
              {step > 0 && (
                <ButtonSecondary onClick={() => setStep((prev) => prev - 1)}>
                  Volver
                </ButtonSecondary>
              )}
              {step + 1 !== totalSections ? (
                <ButtonPrimary onClick={() => handleNext("next")}>
                  {" "}
                  Siguiente{" "}
                </ButtonPrimary>
              ) : (
                <ButtonPrimary type="submit" onClick={handleSubmit}>
                  ¡Vamos!
                </ButtonPrimary>
              )}
            </FormActions>
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default SignUp;

export async function getStaticProps() {
  return {
    props: {
      formsData: forms,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { form: "full-power" } },
      { params: { form: "a-tu-aire" } },
      { params: { form: "voluntarios" } },
    ],
    fallback: false, // false or 'blocking'
  };
}
