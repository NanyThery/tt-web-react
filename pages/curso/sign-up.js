import styled from "styled-components";
import FormContainer from "../../components/Forms/FormContainer";
import FormHeader from "../../components/Forms/FormHeader";
import forms from "../../utils/forms.json";
import { useState } from "react";
import StepsCount from "../../components/Forms/StepsCount";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const exampleData = {
  label: "Nombre",
  type: "text",
};

const SignUp = ({ type = "full-power" }) => {
  //type: full-power, a-tu-aire, voluntarios
  const [step, setStep] = useState(1);
  const totalSections = forms[type]["form"].length;
  return (
    <Container>
      <FormHeader
        title={forms[type].title}
        description={forms[type].description}
        variation={type}
      />
      <FormContainer>
        <StepsCount currentStep={step} totalSteps={totalSections} />
      </FormContainer>
    </Container>
  );
};

export default SignUp;

// const sectionComponentMap = {
//   products: ProductCollection,
//   "promotional-banner": PromotionalBanner,
//   "shop-the-image": ShopTheImageCollection,
//   "deparment-products": DepartmentProductCollection,
// };

// const sectionStylesMap = {
//   products: styles.collectionSection,
//   departments: styles.departmentsSection,
//   "promotional-banner": styles.promoBannerSection,
//   "shop-the-image": styles.shopTheImageSection,
//   "deparment-products": styles.collectionWithImageSection,
// };

// function makeRenderSection({ navigation }) {
//   return function renderSection({ section, handle, ...restProps }, index) {
//     const SectionComponent = sectionComponentMap[section];

//     return (
//       <View key={index} style={[styles.section, sectionStylesMap[section]]}>
//         <SectionComponent
//           navigation={navigation}
//           handle={handle}
//           {...restProps}
//         />
//       </View>
//     );
//   };
// }
