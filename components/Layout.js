import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import EventBar from "./EventBar";
import { useRouter } from "next/router";
import { useState } from "react";
import { eventBarInfo } from "../utils/eventBarInfo";
import useBreakpoints from "../utils/hooks/useBreakpoints";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  const router = useRouter();
  const breakpoint = useBreakpoints();
  const { showUntilTimeStamp } = eventBarInfo;
  const [isEventVisible, setIsEventVisible] = useState(true);
  const [navBarStartingPosition, setNavBarStartingPosition] = useState(0);
  const eventIsNotExpired =
    !showUntilTimeStamp || new Date() <= new Date(showUntilTimeStamp);
  const showEventBar =
    router.asPath === "/" && isEventVisible && eventIsNotExpired;

  const onEventDismiss = () => {
    setIsEventVisible(false);
  };

  const mobileEventBarBreakpoints = ["xs", "s", "m"];

  return (
    <StyledWrapper>
      {showEventBar && (
        <EventBar
          router={router}
          onClose={onEventDismiss}
          isDesktop={!mobileEventBarBreakpoints.includes(breakpoint)}
          onLoadedHeight={(height) =>
            setNavBarStartingPosition(
              mobileEventBarBreakpoints.includes(breakpoint) ? 0 : height
            )
          }
          eventBarInfo={eventBarInfo}
        />
      )}
      <Navbar
        router={router}
        startingPosition={showEventBar ? navBarStartingPosition : 0}
      />
      {children}
      <Footer></Footer>
    </StyledWrapper>
  );
};

export default Layout;
