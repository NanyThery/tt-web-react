import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { figures, home } from "../../utils/copies";
import Image from "next/image";
import SectionTitleDescription from "../SectionTitleDescription";
import { Title } from "../SectionTitleDescription";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  gap: 80px;
`;
const LeftCol = styled.div`
  width: 50%;
  height: 80%;
  position: relative;
  bottom: -50px;

  div {
    bottom: -50px;
  }

  &::after {
    content: "";
    bottom: -50px;
    width: 100%;
    height: 80%;
    border-radius: 8px;
    background: ${(props) => props.theme.gradients.backgroundOrange};
    position: absolute;
    z-index: -1;
  }
`;

const RightCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  ${Title} {
    max-width: 100%;
  }
`;

const Tag = styled.span`
  border-radius: 8px;
  color: white;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.purple};
`;

const FigureWrapper = styled.div`
  &.past {
    ${Tag} {
      background-color: ${(props) => props.theme.colors.purpleDark};
    }
  }
`;

const FigureNumber = styled.span`
  font-size: 46px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.purpleDark};
`;

const FigureText = styled.p`
  color: ${(props) => props.theme.colors.text80};
`;

const FigureContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 10px;

  > div {
    width: 33%;
    display: flex;
    flex-flow: column;
    gap: 4px;
    padding: 5px;
  }

  &.past {
    ${FigureNumber} {
      color: ${(props) => props.theme.colors.text80};
    }
  }
`;

const Divider = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.text40};
  margin-bottom: 30px;
`;
const FiguresSection = (props) => {
  return (
    <Container {...props}>
      <LeftCol>
        <Image
          src="/img/discover.png"
          layout="responsive"
          alt="Conquistando retos"
          height="516"
          width="445"
        />
      </LeftCol>
      <RightCol>
        <SectionTitleDescription
          title={home.figuresSection.title}
          description=""
        />
        <div>
          {figures.map(({ event, figures }, index) => {
            return (
              <div key={event}>
                {index < 4 && (
                  <FigureWrapper className={index > 0 && "past"}>
                    <Tag>{event}</Tag>
                    <FigureContainer className={index > 0 && "past"}>
                      {figures.map(({ number, description }, figureIndex) => {
                        return (
                          <div key={figureIndex}>
                            <FigureNumber>{number}</FigureNumber>
                            <FigureText>{description}</FigureText>
                          </div>
                        );
                      })}
                    </FigureContainer>
                    {<Divider />}
                  </FigureWrapper>
                )}
              </div>
            );
          })}
        </div>
      </RightCol>
    </Container>
  );
};

export default FiguresSection;
