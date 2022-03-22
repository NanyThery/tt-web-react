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

const CodeConductPage = ({ source }) => {
  return (
    <Container>
      <FormHeader
        title="Código de conducta 📜"
        description="Aquí se recogen nuestros valores."
      />
      <FormContainer>
        <MDXRemote {...source} components={MDXComponents} />
      </FormContainer>
    </Container>
  );
};

export default CodeConductPage;

export async function getStaticProps() {
  const { source } = await getFileBySlug("code-conduct", "PageTexts");
  return {
    props: { source },
  };
}
