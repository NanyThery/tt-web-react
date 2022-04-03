import styled from "styled-components";
import { getAuthorImage } from "../utils/blogHelpers";

const Container = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-flow: column;
  gap: 24px;
  width: 100%;
  max-width: 540px;
  border-radius: 16px;
  background-color: white;
  padding: 32px;
  box-shadow: 0 8px 24px 1px rgba(0, 0, 0, 0.1);
`;

const AvatarContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: gray;
  background: ${(props) => getAuthorImage(props.image, props.section)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const UserInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  > p {
    line-height: 20px;
    &.user-name {
      font-weight: bold;
    }
    &.twitter-user {
      color: #7d7d7d;
    }
  }
`;

const BottomLine = styled.div`
  display: flex;
  gap: 8px;
  > span {
    &.date-line {
      color: #7d7d7d;
    }
    &.twitter-app {
      color: #1d9bf0;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const TwitterCard = ({
  imageFileName,
  userName,
  twitterUser,
  dateLine,
  children,
}) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar image={imageFileName} />
        <UserInfo>
          <p className="user-name">{userName}</p>
          <p className="twitter-user">{twitterUser}</p>
        </UserInfo>
      </AvatarContainer>
      {children}
      <BottomLine>
        <span className="date-line"> {dateLine} ·</span>
        <span className="twitter-app"> Twitter Web App</span>
      </BottomLine>
    </Container>
  );
};

export default TwitterCard;
