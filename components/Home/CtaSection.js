import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { home } from "../../utils/copies";
import { ButtonSecondaryWhite } from "../Button";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${(props) => props.theme.gradients.backgroundPurple};
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
  color: ${(props) => props.theme.colors.text20};
  padding: 80px 0 80px 80px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  box-sizing: border-box;
  gap: 16px;

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 32px 32px 0 32px;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Title = styled.h2`
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
  }
`;

const ActionsContainer = styled.div`
  margin-top: 10px;
`;
const RightCol = styled.div`
  width: 50%;
  padding: 40px 40px 40px 0;
  display: flex;
  justify-content: center;
  > div {
    width: 75%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 0;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    > div {
      height: 100%;
    }
  }
`;

const CtaSection = ({ isCourseOpen, onClick }) => {
  const status = isCourseOpen ? "open" : "closed";

  return (
    <Container id="cta-section">
      <LeftCol>
        <Title>{home.ctaSection[status]["title"]}</Title>
        <Description>{home.ctaSection[status]["description"]}</Description>
        <ActionsContainer>
          {
            (isCourseOpen = false ? (
              <ButtonSecondaryWhite onClick={onClick}>
                {home.ctaSection[status]["cta"]}
              </ButtonSecondaryWhite>
            ) : (
              <NewsletterForm>{home.ctaSection[status]["cta"]}</NewsletterForm>
            ))
          }
        </ActionsContainer>
      </LeftCol>
      <RightCol>
        <div>
          <Image
            key={home.ctaSection[status]["cta"]}
            src={`/img/${home.ctaSection[status]["img"]}`}
            alt="TeachT3ch aprende a programar"
            width="426"
            height="326"
            layout="intrinsic"
          />
        </div>
      </RightCol>
    </Container>
  );
};

export default CtaSection;
