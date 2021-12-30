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

export const Badges = ({ member }) => (
  <>
    {member.mentor && <Badge>Mentor{member.female && "a"}</Badge>}
    {member.teacher && (
      <Badge secondary>Instructor{member.female && "a"}</Badge>
    )}
  </>
);
