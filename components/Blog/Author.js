import styled, { useTheme } from "styled-components";
import { Avatar } from "../Avatar";
import { getAuthorData } from "../../utils/blogHelpers";

const AvatarContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > p {
    color: ${(props) => props.variant};
    font-size: 14px;
  }
`;

const Author = ({ userName, variant }) => {
  const { name: authorName, img } = getAuthorData(userName);

  const theme = useTheme();

  const variants = {
    purple: theme.colors.purple,
    orange: theme.colors.orange,
    yellow: theme.colors.yellow,
    purpleDark: theme.colors.purpleDark,
    purpleLight: theme.colors.purpleLight,
    text100: theme.colors.text100,
    text80: theme.colors.text80,
    text60: theme.colors.text60,
    text40: theme.colors.text40,
    text20: theme.colors.text20,
  };

  function getVariant(variant = "text100") {
    return variants[variant];
  }

  return (
    <>
      {authorName && (
        <AvatarContainer variant={getVariant(variant)}>
          <Avatar image={img}></Avatar>
          <p>{authorName}</p>
        </AvatarContainer>
      )}
    </>
  );
};

export default Author;
