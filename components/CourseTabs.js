import styled from "styled-components";
import { courseInfo } from "../utils/copies";
import { useState } from "react";
import Image from "next/image";
import { getIconByName } from "./Icons";
import { ButtonPrimary } from "./Button";
import NavLink from "next/link";

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;

  @media only screen and (min-width: 600px) and (max-width: 850px) {
    &. image {
      width: 80%;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  height: 74px;
  border-bottom: 1px solid ${(props) => props.theme.colors.text40};
`;

const Tab = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text80};
  border-bottom: ${(props) =>
    props.active ? "3px solid " + props.theme.colors.orange : ""};
  cursor: pointer;
  padding: 0 24px;

  &.column {
    flex: 1;
    font-weight: bold;
    font-size: 18px;
    background-color: ${(props) =>
      props.active ? "" : props.theme.colors.text20};
  }

  @media only screen and (max-width: 850px) {
    width: 50%;
    text-align: center;
    padding: 0;
  }
`;

const TabContent = styled.div`
  display: flex;
  gap: 24px;

  &.image {
    padding: 32px 24px;
  }
  &.column {
    padding: 0;
  }

  &.column-image {
    flex-flow: column;
    padding: 24px;
  }

  @media only screen and (max-width: 850px) {
    flex-flow: column;
  }
`;
const LeftCol = styled.div`
  padding: 20px 24px 0 24px;
  color: white;
  background: ${(props) =>
    props.option === "modA"
      ? props.theme.gradients.backgroundOrange
      : props.theme.gradients.backgroundPurple};
  border-radius: 8px;
  height: 442px;
  width: 35%;
  display: flex;

  & .left-col-content {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    height: 100%;

    & .img-container {
      position: relative;
      width: 100%;
      height: 57%;
    }
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    height: 250px;

    & .left-col-content {
      & .img-container {
        position: relative;
        margin: 0 auto;
        width: 60%;
        height: 60%;
      }
    }
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px 24px 24px 24px;

  & .right-col-top {
    width: 100%;
    display: flex;
  }

  & .column {
    flex-flow: column;
    padding: 14px 0;
    > div {
      width: 100%;
    }
  }

  & .image {
    > div {
      width: 50%;
    }
  }

  & .right-col-bottom {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 850px) {
    padding: 10px 24px;
    & .right-col-top {
      flex-flow: column;
    }

    & .column-image {
      padding: 0;
    }

    & .image {
      > div {
        width: 100%;
      }
    }
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

const CourseTabs = ({ isCourseOpen, variant = "image" }) => {
  const [option, setOption] = useState("modA");
  return (
    <Container className={variant}>
      <TabContainer variant={variant}>
        <Tab
          className={variant}
          active={option === "modA"}
          onClick={() => setOption("modA")}
        >
          {courseInfo.modA.icon} {courseInfo.modA.title}
        </Tab>
      </TabContainer>
      <TabContent className={variant}>
        {(variant === "image" || variant === "column-image") && (
          <LeftCol option={option}>
            <div className="left-col-content">
              <h2>
                {courseInfo[option]["title"]} {courseInfo[option].icon}
              </h2>
              {courseInfo[option]["description"]}
              <div className="img-container">
                <Image
                  key={courseInfo[option]["imgFileName"]}
                  src={`/img/${courseInfo[option]["imgFileName"]}`}
                  alt="Imagen full power"
                  layout="fill"
                />
              </div>
            </div>
          </LeftCol>
        )}
        <RightCol className={`${variant}`} variant={variant}>
          <div className={`right-col-top ${variant}`}>
            <div>
              <SectionTitle>Resumen</SectionTitle>
              <ReqList>
                {courseInfo[option]["summary"].map(({ icon, text }, index) => {
                  return (
                    <li key={index}>
                      <div>{getIconByName(icon)}</div> <p>{text}</p>
                    </li>
                  );
                })}
              </ReqList>
            </div>

            <div>
              <SectionTitle>Requisitos</SectionTitle>
              <ReqList>
                {courseInfo[option]["requirements"].map(
                  ({ icon, text }, index) => {
                    return (
                      <li key={index}>
                        <div>{getIconByName(icon)}</div> <p>{text}</p>
                      </li>
                    );
                  }
                )}
              </ReqList>
            </div>
          </div>
          <div className="right-col-bottom">
            {isCourseOpen ? (
              <NavLink href={`/sign-up/${courseInfo[option]["url"]}`} passHref>
                <ButtonPrimary onClick={() => {}}>
                  {courseInfo[option]["cta"]["open"]["text"]}
                </ButtonPrimary>
              </NavLink>
            ) : (
              <InfoBox>
                {getIconByName(courseInfo[option]["cta"]["closed"]["icon"])}
                {courseInfo[option]["cta"]["closed"]["text"]}
              </InfoBox>
            )}
          </div>
        </RightCol>
      </TabContent>
    </Container>
  );
};

export default CourseTabs;
