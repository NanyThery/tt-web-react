import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { blogSection } from "../../utils/copies";
import { ButtonSecondaryWhite } from "../Button";
import Image from "next/image";
import NewsletterForm from "../Home/NewsletterForm";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
  flex-flow: column;
  overflow: hidden;
`;
const TopSection = styled.div`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 32px 32px 0 32px;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Title = styled.h5``;

const Description = styled.p`
  color: ${(props) => props.theme.colors.text80};
  font-size: 14px;
`;

const ActionsContainer = styled.div`
  margin-top: 10px;
`;
const BottomSection = styled.div`
  width: 100%;
  gap: 8px;
  padding: 24px;
  display: flex;
  flex-flow: column;
  background-color: white;
`;

const VerticalNewsletter = () => {
  return (
    <Container id="cta-section">
      <TopSection>
        <Image
          key={blogSection.newsletter["cta"]}
          src={`/img/${blogSection.newsletter["img"]}`}
          alt="TeachT3ch aprende a programar"
          width="178"
          height="130"
          layout="intrinsic"
        />
      </TopSection>
      <BottomSection>
        <Title>{blogSection.newsletter["title"]}</Title>
        <Description>{blogSection.newsletter["description"]}</Description>
        <ActionsContainer>
          <NewsletterForm>{blogSection.newsletter["cta"]}</NewsletterForm>
        </ActionsContainer>
      </BottomSection>
    </Container>
  );
};

export default VerticalNewsletter;
