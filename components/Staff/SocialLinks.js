import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 18px;
`;
const SocialLink = styled((props) => (
  <a
    href={{
      linkedin: (handle) => `https://www.linkedin.com/in/${handle}`,
      twitter: (handle) => `https://twitter.com/${handle}/`,
    }[props.name](props.handle)}
    target="_blank"
    rel="noreferrer"
  >
    <img src={`/img/${props.name}.svg`} />
  </a>
))`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SocialLinks = ({ member }) => (
  <SocialContainer>
    {member.linkedin && <SocialLink name="linkedin" handle={member.linkedin} />}
    {member.twitter && <SocialLink name="twitter" handle={member.twitter} />}
  </SocialContainer>
);

export default SocialLinks;
