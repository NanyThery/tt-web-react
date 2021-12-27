import { useEffect, useState } from "react";

const useBreakpoints = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  switch (true) {
    case windowDimensions.width <= 600:
      return "xs";
    case windowDimensions.width > 601 && windowDimensions.width <= 768:
      return "s";
    case windowDimensions.width > 769 && windowDimensions.width <= 1100:
      return "m";
    case windowDimensions.width > 1100 && windowDimensions.width < 1440:
      return "l";
    default:
      return "xl";
  }
};

export default useBreakpoints;
