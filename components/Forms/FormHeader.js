import styled, { useTheme } from "styled-components";
import { HeroInfo } from "../Home/Header";

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.variation && props.variation};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;

  @media only screen and (max-width: 850px) {
    background: ${(props) => props.theme.gradients.backgroundOrange};
  }
`;

const StyledHeroInfo = styled((props) => <HeroInfo {...props} />)`
  color: white;
  padding-top: 30px;
  width: 100%;
  max-width: 635px;
  text-align: center;
`;

const FormHeader = ({ title, description, variation = "orangeInverse" }) => {
  const theme = useTheme();

  const variants = {
    purple: theme.gradients.backgroundPurple,
    orange: theme.gradients.backgroundOrange,
    orangeInverse: theme.gradients.backgroundOrangeInverse,
    purpleInverse: theme.gradients.backgroundPurpleInverse,
    ["a-tu-aire"]: theme.gradients.backgroundOrangeInverse,
    ["full-power"]: theme.gradients.backgroundOrangeInverse,
    voluntarios: theme.gradients.backgroundPurpleInverse,
  };

  return (
    <Container variation={variants[variation]}>
      <StyledHeroInfo>
        <h2>{title}</h2>
        <p>{description}</p>
      </StyledHeroInfo>
    </Container>
  );
};

export default FormHeader;
