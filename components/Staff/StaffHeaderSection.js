import styled from "styled-components";
import { HeroContainer, HeroInfo } from "../Home/Header";
import staffHeaderImage from "../../public/img/staff-header.png";
import Image from "next/image";

const Container = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};
  @media only screen and (max-width: 850px) {
    text-align: center;
    background: ${(props) => props.theme.gradients.backgroundPurple};
  }
`;
const HeaderImage = styled((props) => (
  <div {...props}>
    <Image src={props.src} />
  </div>
))`
  width: 350px;
  display: flex;
  max-width: 100%;
  @media only screen and (min-width: 1140px) {
    margin: 0 30px;
  }
`;
const HeaderVolunteer = styled.div`
  max-width: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 2px solid ${(props) => props.theme.colors.purpleLight};
  border-radius: 3px;
  text-align: center;
  strong {
    font-size: 18px;
    white-space: nowrap;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  > * {
    margin-bottom: 8px;
  }
`;
const StyledHeroInfo = styled((props) => <HeroInfo {...props} />)`
  color: white;
  h2 {
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (max-width: 850px) {
    max-width: 100%;
    padding: 0 8px;
    h2 {
      font-size: 28px;
      margin-bottom: 8px;
    }
    p {
      color: #f2f6ff;
    }
  }
`;
const HeaderVolunteerContainer = styled.div`
  @media only screen and (max-width: 1140px) {
    display: none;
  }
`;

const StaffHeaderSection = () => (
  <Container>
    <HeroContainer>
      <StyledHeroInfo>
        <header>
          <h2>Mentores & Profes</h2>
          <strong>Los que estamos detrás de todo esto.</strong>
        </header>
        <p>
          Ya somos muchos los que desde 2021 llevamos impartiendo este curso.
          Sin el esfuerzo de <strong>profes</strong>, <strong>mentores</strong>{" "}
          y <strong>colaboradores</strong> nada de esto sería posible. ¿Quieres
          conocerlos?
        </p>
      </StyledHeroInfo>
      <StyledHeroInfo>
        <HeaderImage src={staffHeaderImage} />
      </StyledHeroInfo>
      <HeaderVolunteerContainer as={StyledHeroInfo}>
        <HeaderVolunteer>
          <strong>¿Quieres ser voluntario?</strong>
          <p>
            Si quieres ayudarnos puedes hacerte colaborador, mentor o profe. ¡Te
            esperamos!
          </p>
        </HeaderVolunteer>
      </HeaderVolunteerContainer>
    </HeroContainer>
  </Container>
);

export default StaffHeaderSection;
