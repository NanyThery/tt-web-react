import styled from "styled-components";
import { HeroContainer, HeroInfo } from "../Home/Header";
import staffHeaderImage from "../../public/img/staff-header.png";
import { Strong } from "../Strong";
import Image from "next/image";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};

  @media only screen and (max-width: 850px) {
    background: transparent;
    height: fit-content;
    padding-bottom: 24px;
  }
`;
const HeaderImage = styled((props) => (
  <div {...props}>
    {" "}
    <Image src={props.src} />
  </div>
))`
  width: 350px;
  display: flex;
`;
const HeaderVolunteer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 2px solid ${(props) => props.theme.colors.purpleLight};
  border-radius: 3px;
  text-align: center;
  p {
    font-size: 14px;
    line-height: 24px;
  }
  > * {
    margin-bottom: 8px;
  }
`;

const StaffHeaderSection = () => (
  <HeaderContainer>
    <HeroContainer>
      <HeroInfo>
        <h2>Mentores & Profes</h2>
        <Strong>Los que estamos detrás de todo esto.</Strong>
        <p>
          Ya somos muchos los que desde 2021 llevamos impartiendo este curso.
          Sin el esfuerzo de profes, mentores y colaboradores nada de esto sería
          posible. ¿Quieres conocerlos?
        </p>
      </HeroInfo>
      <HeroInfo>
        <HeaderImage src={staffHeaderImage} />
      </HeroInfo>
      <HeroInfo>
        <HeaderVolunteer>
          <Strong>¿Quieres ser voluntario?</Strong>
          <p>
            Si quieres ayudarnos puedes hacerte colaborador, mentor o profe. ¡Te
            esperamos!
          </p>
        </HeaderVolunteer>
      </HeroInfo>
    </HeroContainer>
  </HeaderContainer>
);

export default StaffHeaderSection;
