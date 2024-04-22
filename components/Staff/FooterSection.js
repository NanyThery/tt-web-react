import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import saly from "../../public/img/saly.png";
import Image from "next/image";

import { ButtonSecondaryWhite } from "../Button";
import NavLink from "next/link";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background: white;
  background: ${(props) => props.theme.gradients.backgroundOrange};
  gap: 24px;
  @media only screen and (max-width: 850px) {
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;
const LeftCol = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  padding: 80px 0 80px 80px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  gap: 16px;

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 32px 32px 0 32px;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;

  > div {
    flex-shrink: 0;

    :hover {
      cursor: pointer;
    }
  }
`;

const RightCol = styled.div`
  width: 50%;
  padding: 40px 40px 40px 0;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 0;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    height: 200px;
  }
`;
const FooterSection = () => (
  <Container>
    <LeftCol>
      <h2>Únete a Teach[Tech]</h2>
      <p>
        Seguimos necesitando <strong>colaboradores</strong> que nos ayuden a
        impulsar el proyecto. Si tienes un perfil en{" "}
        <strong>programación, diseño, marketing, social media</strong> o
        simplemente <strong>quieres ayudar</strong> y unirte a esta apasionante
        aventura, ¡te esperamos!
      </p>

      <NavLink href="/sign-up/voluntarios" passHref>
        <ButtonSecondaryWhite>Quiero colaborar</ButtonSecondaryWhite>
      </NavLink>
    </LeftCol>
    <RightCol>
      <Image
        style={{ objectFit: "contain" }}
        src={saly}
        alt="TeachT3ch aprende a programar"
        layout="fill"
      />
    </RightCol>
  </Container>
);

export default FooterSection;
