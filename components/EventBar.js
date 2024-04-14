import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { CloseIcon } from "./Icons";
import Image from "next/image";
import NavLink from "next/link";

const DesktopWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  display: flex;
  gap: 16px;
  height: fit-content;
  justify-content: center;
  min-height: 70px;
  padding: 0 25px;
  position: fixed;
  width: 100%;
  z-index: 10;

  > div:last-child {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text80};
  }
`;

const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  > p {
    color: ${(props) => props.theme.colors.purpleDark};
  }
`;
const StyledNavLink = styled.div`
  cursor: pointer;
  > p {
    color: ${(props) => props.theme.colors.purpleLight};
  }
  border-bottom: 1px solid ${(props) => props.theme.colors.purpleLight};
  white-space: nowrap;
  a { text-decoration: none; }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-width: 50px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.purple};
`;

const IconWrapper = styled.div`
  width: fit-content;
`;

const MobileWrapper = styled(DesktopWrapper)`
  display: flex;
  flex-flow: column;
  bottom: 0;
  padding: 20px 25px;
  gap: 16px;

  ${IconWrapper} {
    color: gray;
  }

  > div.row {
    display: flex;
    width: 100%;
    gap: 10px;

    ${TextContainer} {
      width: 100%;
      flex-flow: column;
      align-items: flex-start;
    }
  }
`;

const EventBar = ({
  onClose = () => {},
  onLoadedHeight,
  eventBarInfo,
  isDesktop,
}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const { eventTitle, eventLinkText, eventLinkURL } = eventBarInfo;

  useEffect(() => {
    if (isDesktop) {
      setHeight(ref.current.clientHeight);
    }
  }, [isDesktop]);

  useEffect(() => {
    onLoadedHeight(`${height}px`);
  }, [height, onLoadedHeight]);

  return (
    <>
      {isDesktop ? (
        <DesktopWrapper ref={ref}>
          <ImageContainer>
            <Image
              src="/img/event-bar-2.png"
              height="34"
              width="34"
              layout="fixed"
              alt="Descubre próximos eventos"
            ></Image>
          </ImageContainer>
          <TextContainer>{eventTitle}</TextContainer>
          <StyledNavLink>
            <NavLink href={eventLinkURL} passHref>
              <p>{eventLinkText}</p>
            </NavLink>
          </StyledNavLink>
          <IconWrapper onClick={onClose}>
            <CloseIcon></CloseIcon>
          </IconWrapper>
        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <div className="row">
            <ImageContainer>
              <Image
                src="/img/event-bar-2.png"
                height="34"
                width="34"
                layout="fixed"
                alt="Descubre próximos eventos"
              ></Image>
            </ImageContainer>
            <TextContainer>
              {eventTitle}
              <StyledNavLink>
                <NavLink href={eventLinkURL} passHref>
                  <p>{eventLinkText}</p>
                </NavLink>
              </StyledNavLink>
            </TextContainer>
            <IconWrapper onClick={onClose}>
              <CloseIcon></CloseIcon>
            </IconWrapper>
          </div>
        </MobileWrapper>
      )}
    </>
  );
};

export default EventBar;
