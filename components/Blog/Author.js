import styled from "styled-components";
import { Avatar } from "../Avatar";
import { getAuthorData } from "../../utils/blogHelpers";

const AvatarContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Author = ({ userName }) => {
  const { name: authorName, img } = getAuthorData(userName);
  return (
    <>
      {authorName && (
        <AvatarContainer>
          <Avatar image={img}></Avatar>
          <p>{authorName}</p>
        </AvatarContainer>
      )}
    </>
  );
};

export default Author;
