import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import saly from "../../public/img/saly.png";
import { Strong } from "../Strong";
import Image from "next/image";

const FooterContainer = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 42px;
`;
const FooterBanner = styled.div`
  background: ${(props) => props.theme.gradients.backgroundOrange};
  border-radius: 6px;
  color: white;
  padding: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 56px;
  .copy {
    max-width: 431px;
  }
  h2 {
    margin-bottom: 18px;
    line-height: 42px;
  }
`;

const FooterSection = () => (
  <FooterContainer>
    <FooterBanner>
      <div className="copy">
        <h2>Únete a Teach[Tech]</h2>
        <p>
          Seguimos necesitando <Strong>colaboradores</Strong> que nos ayuden a
          impulsar el proyecto. Si tienes un perfil en{" "}
          <Strong>programación, diseño, marketing, social media</Strong> o
          simplemente <Strong>quieres ayudar</Strong> y unirte a esta
          apasionante aventura, ¡te esperamos!
        </p>
      </div>
      <div className="image">
        <Image src={saly} />
      </div>
    </FooterBanner>
  </FooterContainer>
);

export default FooterSection;
