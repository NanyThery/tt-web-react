import styled from "styled-components";

const Container = styled.div`
  height: 96px;
  width: 100%;

  @media only screen and (max-width: 850px) {
    height: 48px;
  }
`;

const SectionSeparator = (props) => {
  return <Container {...props} />;
};

export default SectionSeparator;
