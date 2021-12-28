import styled from "styled-components";
import { HeroInfo, HeroContainer } from "../Home/Header";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundOrange};

  @media only screen and (max-width: 850px) {
  }
`;

const HeroImg = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 30%;

  @media only screen and (max-width: 850px) {
    height: 100%;
    width: 100%;
  }
`;

const StyledHeroInfo = styled((props) => <HeroInfo {...props} />)`
  color: white;
  max-width: 100%;
`;
export default function HeaderCurso({ title, description }) {
  return (
    <Container>
      <HeroContainer>
        <StyledHeroInfo>
          <h2>{title}</h2>
          <p>{description}</p>
        </StyledHeroInfo>
        <HeroImg>
          <Image
            src="/img/full-power.png"
            alt="TeachT3ch aprende a programar"
            width="346"
            height="252"
            layout="responsive"
          />
        </HeroImg>
      </HeroContainer>
    </Container>
  );
}
