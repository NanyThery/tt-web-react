import styled from "styled-components";
import FormContainer from "../components/Forms/FormContainer";
import FormHeader from "../components/Forms/FormHeader";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug } from "../lib/mdx";
import { MDXComponents } from "../components/Blog/MDXComponents";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-flow: column;
`;

const PrivacyPolicyPage = ({ source }) => {
  //type: full-power, a-tu-aire, voluntarios

  return (
    <Container>
      <FormHeader
        title="Política de Privacidad 🔒"
        description="Aquí te explicamos qué hacemos con tus datos y cómo los almacenamos"
        variation={"full-power"}
      />
      <FormContainer>
        <MDXRemote {...source} components={MDXComponents} />
      </FormContainer>
    </Container>
  );
};

export default PrivacyPolicyPage;

export async function getStaticProps() {
  const { source } = await getFileBySlug("privacy-policy", "PageTexts");
  return {
    props: { source },
  };
}
