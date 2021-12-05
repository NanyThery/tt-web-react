import styled from "styled-components";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (min-width: 500px) and (max-width: 850px) {
    max-width: 575px;
    padding: 0 50px;
  }

  @media only screen and (max-width: 499px) {
    padding: 0 30px;
  }
`;

const SectionLayout = (props) => {
  const { minHeight, children, ...other } = props;

  return (
    <Container {...other} minHeight={minHeight}>
      {children}
    </Container>
  );
};

export default SectionLayout;
