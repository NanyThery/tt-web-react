import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { home } from "../../utils/copies";
import Image from "next/image";
import SectionTitleDescription from "../SectionTitleDescription";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  gap: 40px;
  padding: 0 20px;

  @media only screen and (max-width: 850px) {
    flex-wrap: wrap-reverse;
    gap: 25px;
  }
`;
const RightCol = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;

  > div.img-container {
    height: 486px;
    width: 100%;
    position: relative;

    &::after {
      content: "";
      top: 30px;
      right: 20px;
      width: 90%;
      height: 60%;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.yellow};
      position: absolute;
      z-index: -1;
    }
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    > div.img-container {
      display: none;
    }
  }
`;
const LeftCol = styled.div`
  width: 50%;
  display: flex;
  gap: 30px;

  & .col {
    width: 50%;
    display: flex;
    flex-flow: column;
    height: fit-content;
    gap: 30px;
  }
  & .col2 {
    width: 50%;
    transform: translateY(40px);
  }

  @media only screen and (max-width: 900px) {
    gap: 16px;
    width: 100%;
    > div.img-container {
      display: none;
    }

    & .col {
      gap: 16px;
    }

    & .col2 {
      transform: none;
    }
  }
`;
const Card = styled.div`
  min-height: 250px;
  padding: 12px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  text-align: center;

  > h4 {
    color: ${(props) => props.theme.colors.darkPurple};
    margin: 10px 0%;
    font-weight: 500;
  }

  > p {
    color: ${(props) => props.theme.colors.text80};
    font-size: 14px;
  }

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    > p {
      line-height: 16px;
      font-size: 11px;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 850px) {
    > p {
      line-height: 24px;
      font-size: 16px;
    }
  }
`;

const AchieveSection = () => {
  return (
    <Container>
      <LeftCol>
        <div className="col">
          <Card>
            <div>
              <Image
                src={`/img/${home.achieveSection.items[0].img}`}
                alt={home.achieveSection.items[0].title}
                layout="intrinsic"
                width="100"
                height="100"
              />
            </div>
            <h4> {home.achieveSection.items[0].title} </h4>
            <p> {home.achieveSection.items[0].description} </p>
          </Card>
          <Card>
            <div>
              <Image
                src={`/img/${home.achieveSection.items[1].img}`}
                alt={home.achieveSection.items[1].title}
                layout="intrinsic"
                width="100"
                height="100"
              />
            </div>
            <h4> {home.achieveSection.items[1].title} </h4>
            <p> {home.achieveSection.items[1].description} </p>
          </Card>
        </div>

        <div className="col col2">
          <Card>
            <div>
              <Image
                src={`/img/${home.achieveSection.items[2].img}`}
                alt={home.achieveSection.items[2].title}
                layout="intrinsic"
                width="100"
                height="100"
              />
            </div>
            <h4> {home.achieveSection.items[2].title} </h4>
            <p> {home.achieveSection.items[2].description} </p>
          </Card>
          <Card>
            <div>
              <Image
                src={`/img/${home.achieveSection.items[3].img}`}
                alt={home.achieveSection.items[3].title}
                layout="intrinsic"
                width="100"
                height="100"
              />
            </div>
            <h4> {home.achieveSection.items[3].title} </h4>
            <p> {home.achieveSection.items[3].description} </p>
          </Card>
        </div>
      </LeftCol>
      <RightCol>
        <SectionTitleDescription
          title={home.achieveSection.title}
          description={home.achieveSection.description}
        />

        <div className="img-container">
          <Image
            src="/img/home-achieve-section.png"
            alt="Una persona ordenador escribiendo código"
            layout="fill"
          />
        </div>
      </RightCol>
    </Container>
  );
};

export default AchieveSection;
