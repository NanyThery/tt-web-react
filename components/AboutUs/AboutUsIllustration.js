import styled from "styled-components";
import Image from "next/image";

const RandomIllustration = styled.div`
  position: absolute;
  opacity: ${(props) => props.opacity};
  z-index: 1;

  top: ${(props) => `${props.position[0]}%`};
  right: 0px;
  bottom: 0px;
  left: ${(props) => `${props.position[3]}%`};
  width: 150px;

  @media only screen and (max-width: 850px) {
    width: 50px;
  }
`;

export const AboutUsIllustration = styled(
  ({ src, size, position, opacity = 0.5 }) => {
    return (
      <RandomIllustration position={position} opacity={opacity}>
        <Image src={src} alt="Illustration" width={size[0]} height={size[1]} />
      </RandomIllustration>
    );
  }
)``;
