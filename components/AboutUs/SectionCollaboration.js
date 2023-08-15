import styled from "styled-components";
import aboutUs from "../../utils/copiesAboutUs.json";
import { ButtonSecondaryWhite } from "../Button";
import Image from "next/image";
import NavLink from "next/link";
import useBreakpoints from "../../utils/hooks/useBreakpoints";
import hand1 from "../../public/img/aboutUs/hand1.svg";
import hand2 from "../../public/img/aboutUs/hand2.svg";
import hand3 from "../../public/img/aboutUs/hand3.svg";
import hand4 from "../../public/img/aboutUs/hand4.svg";
import hand5 from "../../public/img/aboutUs/hand5.svg";
import handsMobile from "../../public/img/aboutUs/hands-mobile.svg";

const TimelineSectionContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-direction: column;
  width: 100%;
  min-height: 750px;
  position: relative;
  padding: 64px 0 0 0;
  @media only screen and (max-width: 850px) {
    padding: 30px 0 0 0;
  }
`;

const Description = styled.div`
  color: #f2f6ff;
  display: flex;
  flex-flow: column;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  line-height: 26px;
  max-width: 730px;
  text-align: center;
  width: 100%;

  > h2 {
    margin: 15px 0px;
    line-height: 1;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #f2f6ff;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    max-width: 530px;
    padding: 0 30px;
  }
`;

const HandsVector = styled.div`
  width: 100%;
  position: relative;
  justify-content: center;
  display: flex;
  .hands-wrapper {
    display: flex;
    max-width: 730px;
    width: 100%;
  }
  .hand {
    position: relative;
    width: 170px;
    height: 200px;
  }
  @media only screen and (max-width: 850px) {
    height: 250px;
  }
`;

const SectionCollaboration = ({ copies }) => {
  const breakpoint = useBreakpoints();
  const isMobileVersion = ["xs", "s", "m"];
  const showMobile = isMobileVersion.includes(breakpoint);

  return (
    <TimelineSectionContainer>
      <Image
        src="/img/brand/isotype-white.svg"
        width="55"
        height="55"
        alt="isotipo tt blanco"
      />
      <Description>
        <h2> {copies.title}</h2>
        <p>{copies.description}</p>
        <NavLink href={`/sign-up/voluntarios`} passHref>
          <ButtonSecondaryWhite onClick={() => {}}>
            {aboutUs.button}
          </ButtonSecondaryWhite>
        </NavLink>
      </Description>
      {showMobile ? (
        <HandsVector>
          <Image
            src={handsMobile}
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            alt="hand-quiero-colaborar"
            fill
          />
        </HandsVector>
      ) : (
        <HandsVector>
          <div className="hands-wrapper">
            <div className="hand hands-vector1">
              <Image src={hand1} alt="hand-quiero-colaborar" fill />
            </div>
            <div className="hand hands-vector2">
              <Image src={hand2} alt="hand-quiero-colaborar" fill />
            </div>
            <div className="hand hands-vector3">
              <Image src={hand3} alt="hand-quiero-colaborar" fill />
            </div>
            <div className="hand hands-vector4">
              <Image src={hand4} alt="hand-quiero-colaborar" fill />
            </div>
            <div className="hand hands-vector5">
              <Image src={hand5} alt="hand-quiero-colaborar" fill />
            </div>
          </div>
        </HandsVector>
      )}
    </TimelineSectionContainer>
  );
};

export default SectionCollaboration;
