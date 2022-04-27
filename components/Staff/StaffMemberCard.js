import styled from "styled-components";
import Link from "next/link";
import { StaffImage } from "./StaffImage";
import { BadgesContainer, Badge } from "./Badges";

const StaffMemberContainer = styled.div`
  width: 255px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 850px) {
    width: 148px;
  }
  position: relative;
  .content {
    position: relative;
    z-index: 1;

    padding: 0px 20px 32px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${StaffImage} {
      border-radius: 4px;
      width: 100%;
      height: 173px;
      background: #e9ecef;
      @media only screen and (max-width: 850px) {
        height: 90px;
      }
    }
    > strong {
      font-size: 22px;
      margin-top: 24px;
      @media only screen and (max-width: 850px) {
        font-size: 16px;
        margin-top: 16px;
      }
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
    top: 60px;
    @media only screen and (max-width: 850px) {
      top: 30px;
    }
    border: 1px solid #E1E5EE;
    border-radius: 4px;
  }
  ${Badge} {
    @media only screen and (max-width: 850px) {
      font-size: 10px;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  main,footer {
    display: flex;
    align-items: end;
    justify-content: center;
    height: 32px;
    text-align: center;
    font-size: 14px;
    @media only screen and (max-width: 850px) {
      font-size: 11px;
    }
    max-width: 100%;
  }
  main {
    margin-bottom: 4px;
  }
  footer a {
    color: #9D4EDD;
  }
  footer a, .name {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
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
      <strong className="name">{name}</strong>
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
