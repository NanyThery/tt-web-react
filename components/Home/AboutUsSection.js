import styled from "styled-components";
import { home } from "../../utils/copies";
import NavLink from "next/link";
import SectionLayout from "../SectionLayout";
import { ButtonPrimary } from "../Button";
import { useRouter } from "next/router";
import SectionTitleDescription from "../SectionTitleDescription";
import Image from "next/image";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  @media only screen and (max-width: 850px) {
    flex-wrap: wrap-reverse;
    gap: 24px;
  }
`;
const LeftCol = styled.div`
  margin: 0 24px;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin: 0;
  }
`;
const AboutUsImage = styled.div`
  position: relative;
  align-items: center;
  padding: 25px 0 25px 75px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    padding: 5px 0 5px 75px;
  }

  @media only screen and (max-width: 375px) {
    padding: 10px;
    height: 200px;
  }
`;

const BrowserWindow = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  position: relative;
  background-image: radial-gradient(circle, #767b91 50%, transparent 51%),
    radial-gradient(circle, #767b91 50%, transparent 51%),
    radial-gradient(circle, #767b91 50%, transparent 51%),
    linear-gradient(to bottom, #e1e5ee 25px, #150639 26px);
  background-size: 15px 15px, 15px 15px, 15px 15px, 100% 100%;
  background-position: 5px 5px, 25px 5px, 45px 5px, top right;
  background-repeat: no-repeat;
  padding: 50px 25px 25px 25px;
  border-radius: 8px;

  @media only screen and (max-width: 850px) {
    width: 350px;
    height: 250px;
    justify-content: center;
    padding: 30px 10px 10px 10px;
  }

  > img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 650px) {
    max-width: 284px;
    min-width: 250px;
  }

  @media only screen and (max-width: 375px) {
    width: 200px;
    height: 175px;
  }
`;
const ActionsContainer = styled.div`
  max-width: 300px;
`;
const RightCol = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;

  @media only screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    align-items: center;

    > div {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  > p {
    color: ${(props) => props.theme.colors.text80};
  }
`;
const AboutUsSection = ({}) => {
  const router = useRouter();

  const handlePrimaryCTA = () => {
    router.push("/staff");
  };
  return (
    <Container>
      <LeftCol>
        <BrowserWindow>
          <Image
            width={200}
            height={150}
            src="/img/About-Us-Image.png"
            alt="Voluntarios y mentores"
          />
        </BrowserWindow>
      </LeftCol>
      <RightCol>
        <SectionTitleDescription
          title={home.aboutUsSection.title}
          description={home.aboutUsSection.description}
        />
        <ActionsContainer>
          <ButtonPrimary onClick={handlePrimaryCTA}>
            {home.aboutUsSection.cta}
          </ButtonPrimary>
        </ActionsContainer>
        <NavLink href="/aboutUs">{home.aboutUsSection.link}</NavLink>
      </RightCol>
    </Container>
  );
};

export default AboutUsSection;
