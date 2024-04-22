import styled from "styled-components";
import Image from "next/image";

const RandomIllustration = styled.div`
  position: absolute;
  opacity: ${(props) => props.opacity};
  z-index: 0;
  top: ${(props) => `${props.position[0]}%`};
  right: 0px;
  bottom: 0px;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  left: ${(props) => `${props.position[3]}%`};
`;

export const AboutUsIllustration = styled(
  ({ src, size, position, opacity = 0.5 }) => {
    return (
      <RandomIllustration
        position={position}
        opacity={opacity}
        width={size[0]}
        height={size[1]}
      >
        <Image src={src} alt="Illustration" layout="fill" />
      </RandomIllustration>
    );
  }
)``;
