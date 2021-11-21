import styled from "styled-components"
import { home } from "../../utils/copies"
import NavLink from "next/link"
import SectionLayout from "../SectionLayout"
import Button from "../Button"
import { useRouter } from "next/router"

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  @media only screen and (max-width: 850px) {
    flex-wrap: wrap-reverse;
    gap: 24px;
  }
`
const LeftCol = styled.div`
  margin: 0 24px;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`

const AboutUsImage = styled.div`
  position: relative;
  align-items: center;
  padding: 25px 0 25px 75px;
  max-width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 75%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.purple};
  }

  @media only screen and (max-width: 850px) {
    padding: 5px 0 5px 75px;
  }

  @media only screen and (max-width: 375px) {
    padding: 10px;
    height: 200px;
  }

  div.browser-window-pic {
    display: flex;
    width: 85%;
    height: 65%;
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
      box-sizing: border-box;
      width: 350px;
      height: 250px;
      justify-content: center;
      padding: 30px 10px 10px 10px;
    }

    > img {
      width: 100%;
    }

    @media only screen and (max-width: 650px) {
      max-width: 284px;
      min-width: 250px;
    }

    @media only screen and (max-width: 375px) {
      width: 200px;
      height: 175px;
    }
  }
`

const RightCol = styled.div`
  width: 50%;
  padding: 0 24px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }

  > p {
    color: ${(props) => props.theme.colors.text80};
  }
`
const Title = styled.h1`
  color: ${(props) => props.theme.colors.purpleDark};
  line-height: 1;

  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`

const AboutUsSection = ({}) => {
  const router = useRouter()

  const handlePrimaryCTA = () => {
    router.push("/staff")
  }
  return (
    <Container>
      <LeftCol>
        <AboutUsImage>
          <div className="browser-window-pic">
            <img
              src="../img/About-Us-Image.png"
              alt="Los profes y mentores"
            ></img>
          </div>
        </AboutUsImage>
      </LeftCol>
      <RightCol>
        <Title>{home.aboutUsSection.title}</Title>
        {home.aboutUsSection.description}
        <Button variant="primary" onClick={handlePrimaryCTA}>
          {home.aboutUsSection.cta}
        </Button>
        <NavLink href="/about">{home.aboutUsSection.link}</NavLink>
      </RightCol>
    </Container>
  )
}

export default AboutUsSection
