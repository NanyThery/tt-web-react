import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.text20};
`;

const EventBar = () => {
  return <Wrapper>Event bar</Wrapper>;
};

export default EventBar;
