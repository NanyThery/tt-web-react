import styled from "styled-components";
import { Avatar } from "../Avatar";

const Card = styled.div`
  display: grid;
  padding: 1em;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr auto;
  color: white;
  background: ${(props) => props.theme.gradients.backgroundOrange};
  border-radius: 8px;
  height: 150px;
  width: 400px;
`;

const CardAvatar = styled(Avatar)`
  grid-area: 1 / 1 / 3 / 2;
  margin-top: 8px;
  margin-left: 16px;
  background-color: white;
`;

const CardName = styled.p`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 28px;
  align-self: center;
`;

const CardYear = styled.p`
  grid-area: 1 / 3 / 2 / 4;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid "white";
  border-radius: 6px;
  padding: 4px 16px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  align-self: center;
  color: ${(props) => props.theme.colors.purpleLight};
`;

const CardTitle = styled.a`
  font-size: 18px;
  color: ${(props) => props.theme.colors.orange};
`;

const CardDataContainer = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  background-color: white;
  width: 100%;
  border-radius: 6px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectCard = ({
  avatar = "generic.png",
  developer,
  year,
  projectTitle,
  projectLink,
}) => {
  return (
    <Card>
      <CardAvatar
        image={`${avatar}`}
        section=""
        alt={`Avatar de ${developer}`}
      />
      <CardName>{developer}</CardName>
      <CardYear>{year}</CardYear>
      <CardDataContainer>
        <CardTitle href={projectLink}>{projectTitle}</CardTitle>
      </CardDataContainer>
    </Card>
  );
};
