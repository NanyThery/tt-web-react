import styled from "styled-components";
import Image from "next/image";
import SectionLayout from "../SectionLayout";

const InitialVector = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  width: 100%;
  flex: 1;

  @media screen and (max-width: 850px) {
    justify-content: center;
  }

  > div {
    display: flex;
    z-index: 0;
    padding: 0 50px;

    &.header-divider {
      position: absolute;
      top: -120px;
    }

    &.left-to-right {
      transform: scaleX(-1);
      justify-content: flex-end;
    }

    @media screen and (max-width: 850px) {
      &.header-divider {
        top: -50px;
        justify-content: center;
      }

      &.left-to-right {
        justify-content: center;
      }
    }

    > div {
      &.mobile-line {
        display: none;
      }

      @media screen and (max-width: 850px) {
        &.mobile-line {
          display: flex;
        }
        &.desktop-line {
          display: none;
        }
      }
    }
  }
`;

const LinePath = ({ rightToLeft = true, header = false }) => {
  return (
    <InitialVector>
      <div
        className={`${!rightToLeft ? "left-to-right" : ""} ${
          header ? "header-divider" : ""
        }`}
      >
        <div className="mobile-line">
          <Image
            src="/img/aboutUs/vectorLineMobile.svg"
            width="20px"
            height="100px"
            layout="fixed"
            alt="camino about us"
          />
        </div>

        <div className={`desktop-line ${!rightToLeft ? "left-to-right" : ""}`}>
          <Image
            src="/img/aboutUs/AboutUsPath.svg"
            width="650px"
            height="200px"
            layout="intrinsic"
            alt="camino about us"
          />
        </div>
      </div>
    </InitialVector>
  );
};

export default LinePath;
