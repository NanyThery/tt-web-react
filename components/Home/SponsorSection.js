import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { home } from "../../utils/copies";
import NavLink from "next/link";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background: white;
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
  color: ${(props) => props.theme.colors.text100};
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

const { sponsors } = home;

const SponsorSection = ({}) => {
  return (
    <Container id="cta-section">
      <LeftCol>
        <SponsorsContainer>
          {sponsors.companies.map((sponsor) => {
            return (
              <NavLink key={sponsor.companyName} href={sponsor.url} passHref>
                <Image
                  src={sponsor.imageURL}
                  layout="intrinsic"
                  width="125px"
                  height="50px"
                  alt={sponsor.companyName}
                />
              </NavLink>
            );
          })}
        </SponsorsContainer>
        <Title>{sponsors.title}</Title>
        <Description>{sponsors.description}</Description>
      </LeftCol>
      <RightCol>
        <div>
          <Image
            src={`/img/saly.png`}
            alt="TeachT3ch aprende a programar"
            width="446"
            height="326"
            layout="intrinsic"
          />
        </div>
      </RightCol>
    </Container>
  );
};

export default SponsorSection;
