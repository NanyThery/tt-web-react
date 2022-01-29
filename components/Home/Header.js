import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { home } from "../../utils/copies";
import { ButtonPrimary } from "../Button";
import Image from "next/image";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};

  @media only screen and (max-width: 850px) {
    background: transparent;
    padding-bottom: 24px;
  }
`;

export const HeroContainer = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  padding: 100px 20px 0 20px;
  @media only screen and (max-width: 850px) {
    background: transparent;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;

    gap: 40px;
  }
`;
export const HeroInfo = styled.div`
  color: ${(props) => props.theme.colors.text20};
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;

  gap: 16px;

  @media only screen and (max-width: 850px) {
    align-items: center;
    color: ${(props) => props.theme.colors.text100};
  }
`;

const PreTitle = styled.div`
  width: fit-content;
  font-weight: 700;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.colors.purpleLight};
  border-radius: 4px;
`;
const Title = styled.div`
  > p {
    line-height: 1;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 18px;

  @media only screen and (max-width: 850px) {
    text-align: center;
    color: ${(props) => props.theme.colors.text80};
  }
`;

const ActionsContainer = styled.div`
  width: 200px;
  margin-top: 10px;
`;
const HeroImg = styled.div`
  padding: 50px;
  height: 80%;
  width: 100%;

  @media only screen and (max-width: 850px) {
    padding: 20px;
  }
`;

const Header = ({ isCourseOpen }) => {
  const status = isCourseOpen ? "open" : "closed";
  const router = useRouter();

  const handlePrimaryCTA = () => {
    router.push("/curso");
  };

  const handleNewsletter = () => {
    router.push("#cta-section");
  };

  return (
    <Container>
      <HeroContainer>
        <HeroInfo>
          <PreTitle>{home.header["preTitle"][status]}</PreTitle>
          <Title>{home.header.title}</Title>
          <Description>{home.header["description"][status]}</Description>
          <ActionsContainer>
            {isCourseOpen ? (
              <ButtonPrimary onClick={handlePrimaryCTA}>
                Quiero apuntarme
              </ButtonPrimary>
            ) : (
              <ButtonPrimary onClick={handleNewsletter}>
                Quiero estar al tanto
              </ButtonPrimary>
            )}
          </ActionsContainer>
        </HeroInfo>
        <HeroImg>
          <Image
            src="/img/Hero-image.png"
            alt="TeachT3ch aprende a programar"
            width="470"
            height="513"
            layout="responsive"
          />
        </HeroImg>
      </HeroContainer>
    </Container>
  );
};

export default Header;
