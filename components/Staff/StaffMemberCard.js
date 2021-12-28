import styled from "styled-components";
import Link from "next/link";
import { StaffImage } from "./StaffImage";
import { BadgesContainer } from "./Badges";
import { Strong } from "../Strong";

const StaffMemberContainer = styled.div`
  width: 255px;
  position: relative;
  .content {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    padding: 32px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${StaffImage} {
      border-radius: 4px;
      width: 100%;
      height: 173px;
    }
    > strong {
      font-size: 22px;
      margin-top: 24px;
    }
  }
  &.inverse {
    .frame {
      background: ${(props) => props.theme.gradients.backgroundPurple};
    }
    color: white;
    footer a {
      color: white;
    }
  }
  > .frame {
    position absolute;
    bottom: 0;
    width: 100%;
    top: 90px;
    border: 1px solid #E1E5EE;
    border-radius: 4px;
  }
  main,footer {
    display: flex;
    align-items: end;
    justify-content: center;
    height: 32px;
    text-align: center;
    font-size: 14px;
  }
  main {
    margin-bottom: 4px;
  }
  footer a {
    color: #9D4EDD;
  }
`;

export const StaffMemberCard = ({
  className,
  name,
  href,
  image,
  video,
  badges,
  body,
  footer,
}) => (
  <StaffMemberContainer className={className}>
    <div className="frame" />
    <div className="content">
      <StaffImage src={image} videoSrc={video} />
      <Strong>{name}</Strong>
      <BadgesContainer>{badges}</BadgesContainer>
      <main>{body}</main>
      <footer>
        <Link href={href} scroll={false}>
          {footer}
        </Link>
      </footer>
    </div>
  </StaffMemberContainer>
);
