import styled from "styled-components"
import SectionLayout from "../SectionLayout"
import { home } from "../../utils/copies"
import Image from "next/image"
import heroImg from "../../public/img/Hero-image.png"
import Button from "../Button"

const Container = styled.div`
  height: 700px;
  width: 100%;
  background: ${(props) => props.theme.gradients.backgroundPurple};

  @media only screen and (max-width: 850px) {
    background: transparent;
    height: fit-content;
    padding-bottom: 24px;
  }
`

const HeroContainer = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  justify-content: space-between;
  padding: 100px 20px 0 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 850px) {
    background: transparent;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`
const HeroInfo = styled.div`
  color: ${(props) => props.theme.colors.text20};
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  box-sizing: border-box;
  gap: 16px;

  @media only screen and (max-width: 850px) {
    align-items: center;
    color: ${(props) => props.theme.colors.text100};
  }
`

const PreTitle = styled.div`
  width: fit-content;
  font-weight: 700;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.theme.colors.purpleLight};
  border-radius: 4px;
`
const Title = styled.h1`
  > p {
    line-height: 1;
  }
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`

const Description = styled.p`
  font-size: 18px;

  @media only screen and (max-width: 850px) {
    text-align: center;
    color: ${(props) => props.theme.colors.text80};
  }
`

const ActionsContainer = styled.div`
  margin-top: 10px;
`
const HeroImg = styled.div`
  height: 100%;

  max-height: 513px;

  > img {
    width: 100%;
    height: auto;
  }
`

const Header = ({ isCourseOpen, onClick }) => {
  const status = isCourseOpen ? "open" : "closed"
  console.log(isCourseOpen)
  return (
    <Container>
      <HeroContainer>
        <HeroInfo>
          <PreTitle>{home.header["preTitle"][status]}</PreTitle>
          <Title>{home.header.title}</Title>
          <Description>{home.header["description"][status]}</Description>
          <ActionsContainer>
            {isCourseOpen ? (
              <Button variant="primary" onClick={onClick}>
                Quiero apuntarme
              </Button>
            ) : (
              <div> Newsletter </div>
            )}
          </ActionsContainer>
        </HeroInfo>
        <HeroImg>
          <img
            src="../img/Hero-image.png"
            alt="TeachT3ch aprende a programar"
          />
        </HeroImg>
      </HeroContainer>
    </Container>
  )
}

export default Header
