import styled from "styled-components";
import { courseInfo, home } from "../../utils/copies";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { getIconByName } from "../Icons";
import { ButtonPrimary } from "../Button";
import { Badge } from "../Staff/Badges";
import useBreakpoints from "../../utils/hooks/useBreakpoints";
import SectionTitleDescription from "../SectionTitleDescription";
import CourseTabs from "../CourseTabs";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 24px;

  &.full-container {
    flex-flow: column;
  }

  @media only screen and (max-width: 850px) {
    flex-flow: column;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 24px;

  @media only screen and (max-width: 850px) {
    flex-flow: column;
  }
`;

const StyledDescription = styled((props) => (
  <SectionTitleDescription {...props} />
))``;

const StyledBadge = styled((props) => <Badge {...props} />)`
  color: white;
  width: fit-content;
  border: 2px solid white;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column;
  background-color: white;
  border-radius: 0 0 8px 8px;
`;
const LeftCol = styled.div`
  box-sizing: border-box;
  padding: 24px 40px 0 40px;
  color: white;
  background: ${(props) =>
    props.option === "modA"
      ? props.theme.gradients.backgroundOrange
      : props.theme.gradients.backgroundPurple};
  border-radius: 8px 8px 0 0;
  height: 193px;
  width: 100%;
  display: flex;

  & .left-col-content {
    padding-bottom: 24px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
  }

  & .img-container {
    position: relative;
    width: 100%;
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 32px;

  & .right-col-top {
    width: 100%;
    display: flex;
  }

  & .right-col-bottom {
    display: flex;
    justify-content: center;
  }
`;
const SectionTitle = styled.h4`
  color: ${(props) => props.theme.colors.purpleDark};
  font-weight: 500;
  padding-bottom: 18px;
`;

const ReqList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;

  > li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: ${(props) => props.theme.colors.text80};
    font-size: 14px;
    margin-bottom: 24px;
  }
`;
const InfoBox = styled.div`
  background-color: ${(props) => props.theme.colors.text20};
  display: flex;
  gap: 8px;
  padding: 20px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text80};
`;

const CourseCards = ({ isCourseOpen }) => {
  const options = Object.keys(courseInfo);
  const breakpoint = useBreakpoints();

  const isMobileVersion = ["xs", "s"];

  return (
    <Container className="full-container">
      <StyledDescription
        title={home.courseSection.title}
        description={home.courseSection.description}
      />
      {isMobileVersion.includes(breakpoint) ? (
        <CourseTabs isCourseOpen={isCourseOpen} variant="column-image" />
      ) : (
        <CardsContainer>
          {options.map((option) => {
            return (
              <CardContent key={option}>
                <LeftCol option={option}>
                  <div className="left-col-content">
                    <StyledBadge>{courseInfo[option]["badge"]}</StyledBadge>
                    <h2>
                      {courseInfo[option]["title"]} {courseInfo[option].icon}
                    </h2>
                    {courseInfo[option]["description"]}
                  </div>
                  <div className="img-container">
                    <Image
                      key={courseInfo[option]["imgFileName"]}
                      src={`/img/${courseInfo[option]["imgFileName"]}`}
                      alt="Imagen full power"
                      layout="fill"
                    />
                  </div>
                </LeftCol>

                <RightCol>
                  <div className={`right-col-top`}>
                    <div>
                      <SectionTitle>Resumen</SectionTitle>
                      <ReqList>
                        {courseInfo[option]["summary"].map(
                          ({ icon, text }, index) => {
                            return (
                              <li key={index}>
                                {getIconByName(icon)} <p>{text}</p>
                              </li>
                            );
                          }
                        )}
                      </ReqList>
                    </div>

                    <div>
                      <SectionTitle>Requisitos</SectionTitle>
                      <ReqList>
                        {courseInfo[option]["requirements"].map(
                          ({ icon, text }, index) => {
                            return (
                              <li key={index}>
                                {getIconByName(icon)} <p>{text}</p>
                              </li>
                            );
                          }
                        )}
                      </ReqList>
                    </div>
                  </div>
                  <div className="right-col-bottom">
                    {isCourseOpen ? (
                      <ButtonPrimary onClick={() => {}}>
                        {courseInfo[option]["cta"]["open"]["text"]}
                      </ButtonPrimary>
                    ) : (
                      <InfoBox>
                        {getIconByName(
                          courseInfo[option]["cta"]["closed"]["icon"]
                        )}
                        {courseInfo[option]["cta"]["closed"]["text"]}
                      </InfoBox>
                    )}
                  </div>
                </RightCol>
              </CardContent>
            );
          })}
        </CardsContainer>
      )}
    </Container>
  );
};

export default CourseCards;
