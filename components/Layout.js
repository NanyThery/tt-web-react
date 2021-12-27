import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import EventBar from "./EventBar";
import { useRouter } from "next/router";
import { useState } from "react";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  const router = useRouter();
  const [isEventVisible, setIsEventVisible] = useState(true);
  const [navBarStartingPosition, setNavBarStartingPosition] = useState("70px");
  const showEventBar = router.asPath === "/" && isEventVisible;

  const onEventDismiss = () => {
    setIsEventVisible(false);
  };

  return (
    <StyledWrapper>
      {showEventBar && (
        <EventBar
          router={router}
          onClose={onEventDismiss}
          onLoadedHeight={(height) => setNavBarStartingPosition(height)}
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
