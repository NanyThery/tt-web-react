import styled from "styled-components";
import Modal from "../Modal";
import router from "next/router";
import { StaffImage } from "./StaffImage";
import { BadgesContainer, Badges } from "./Badges";
import SocialLinks from "./SocialLinks";

const ModalContainer = styled.div`
  width: 600px;
  max-width: 100%;
  header {
    display: flex;
    align-items: stretch;
    gap: 32px;
    @media only screen and (max-width: 850px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      gap: 16px;
      h2 {
        font-size: 28px;
      }
    }
    ${StaffImage} {
      border-radius: 100%;
      width: 158px;
      height: 158px;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (max-width: 850px) {
        align-items: center;
      }
    }
  }
  dt {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #2a324b;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    margin-top: 32px;
    margin-bottom: 7px;
  }
  dd {
    color: #767b91;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const StaffMemberModal = ({ member }) => (
  <Modal
    title={member?.name}
    isOpen={!!member}
    onClose={() => router.push("/staff", "staff", { scroll: false })}
  >
    {member && (
      <ModalContainer>
        <header>
          <StaffImage src={member.image} videoSrc={member.video} />
          <div>
            <h2>{member.name}</h2>
            <BadgesContainer>
              <Badges member={member} />
            </BadgesContainer>
            <SocialLinks member={member} />
          </div>
        </header>
        <dl>
          {member.firstProgram && (
            <>
              <dt>
                <img src="/img/program.svg" /> Primer Programa
              </dt>
              <dd>{member.firstProgram}.</dd>
            </>
          )}
          {member.hobbies && (
            <>
              <dt>
                <img src="/img/hobby.svg" /> Hobbies
              </dt>
              <dd>{member.hobbies}.</dd>
            </>
          )}
          {member.quote && (
            <>
              <dt>
                <img src="/img/quote.svg" /> Frase destacada
              </dt>
              <dd>“{member.quote}.”</dd>
            </>
          )}
        </dl>
      </ModalContainer>
    )}
  </Modal>
);

export default StaffMemberModal;
