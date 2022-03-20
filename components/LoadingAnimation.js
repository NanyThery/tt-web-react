import styled from "styled-components";

const Loader = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
  animation: dotTyping 1.5s infinite linear;

  @keyframes dotTyping {
    0% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
    16.667% {
      box-shadow: 9984px -10px 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
    33.333% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
    50% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px -10px 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
    66.667% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
    83.333% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px -10px 0 0 #9880ff;
    }
    100% {
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff,
        10014px 0 0 0 #9880ff;
    }
  }
`;

const LoadingAnimation = () => {
  return <Loader></Loader>;
};

export default LoadingAnimation;
