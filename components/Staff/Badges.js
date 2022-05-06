import styled from "styled-components";

export const BadgesContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 16px;
  @media only screen and (max-width: 850px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

export const Badge = styled.span`
  font-size: 12px;
  line-height: 16px;
  border: 1px solid
    ${(props) =>
      props.inverse ? "white" : props.secondary ? "#9D4EDD" : "#FF7C04"};
  border-radius: 6px;
  padding: 4px 16px;
  font-weight: bold;
  text-align: center;
`;

const BADGE_LABEL = {
  mentor: {
    he: "Mentor",
    she: "Mentora",
    they: "Mentore",
  },
  teacher: {
    he: "Instructor",
    she: "Instructora",
    they: "Instructore",
  },
  collaborator: {
    he: "Colaborador",
    she: "Colaboradora",
    they: "Colaboradore",
  },
};

export const Badges = ({ member, year }) => {
  const { roles } = member.years[year] || { roles: [] };

  return (
    <>
      {roles.map((role) => (
        <Badge key={role} secondary={role === "teacher"}>
          {BADGE_LABEL[role][member.pronoun]}
        </Badge>
      ))}
    </>
  );
};
