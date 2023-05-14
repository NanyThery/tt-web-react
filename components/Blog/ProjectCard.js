import styled from "styled-components";
import { Avatar } from "../Avatar";

const Card = styled.div`
  display: grid;
  padding: 1em;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  color: white;
  background: ${(props) => props.theme.gradients.backgroundOrange};
  border-radius: 8px;
  height: 150px;
  width: 400px;
`;

const CardAvatar = styled(Avatar)`
  grid-area: 1 / 1 / 3 / 2;
`;

const CardName = styled.p`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 28px;
`;

const CardYear = styled.p`
  grid-area: 2 / 2 / 3 / 3;
  width: fit-content;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-top: 4px;
  border-radius: 6px;
  line-height: 12px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.text60};
  font-size: 12px;
  align-self: center;
`;

const CardTitle = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  font-size: 18px;
`;

const CardLink = styled.a`
  grid-area: 4 / 1 / 5 / 3;
  font-size: 18px;
`;

export const ProjectCard = ({
  avatar = "generic.png",
  developer,
  year,
  projectTitle,
  projectLink,
}) => {
  // TODO: terminar diseño

  return (
    <Card>
      <CardAvatar
        image={`${avatar}`}
        section=""
        alt={`Avatar de ${developer}`}
      />
      <CardName>{developer}</CardName>
      <CardYear>{year}</CardYear>
      <CardTitle>{projectTitle}</CardTitle>
      <CardLink>{projectLink}</CardLink>
    </Card>
  );
};
