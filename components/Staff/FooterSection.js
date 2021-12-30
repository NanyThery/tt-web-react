import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import saly from "../../public/img/saly.png";
import Image from "next/image";

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
  @media only screen and (max-width: 850px) {
    gap: 28px;
    flex-direction: column;
    padding: 32px 16px;
    text-align: center;
  }
  .copy {
    max-width: 431px;
    @media only screen and (max-width: 850px) {
      h2 {
        font-size: 28px;
      }
      p {
        color: #f2f6ff;
        font-size: 14px;
        max-width: 350px;
      }
    }
  }
  @media only screen and (max-width: 850px) {
    .image {
      max-width: 100%;
    }
  }
  h2 {
    margin-bottom: 18px;
    line-height: 42px;
  }
`;

const FooterSection = () => (
  <SectionLayout>
    <FooterBanner>
      <div className="copy">
        <h2>Únete a Teach[Tech]</h2>
        <p>
          Seguimos necesitando <strong>colaboradores</strong> que nos ayuden a
          impulsar el proyecto. Si tienes un perfil en{" "}
          <strong>programación, diseño, marketing, social media</strong> o
          simplemente <strong>quieres ayudar</strong> y unirte a esta
          apasionante aventura, ¡te esperamos!
        </p>
      </div>
      <div className="image">
        <Image src={saly} />
      </div>
    </FooterBanner>
  </SectionLayout>
);

export default FooterSection;
