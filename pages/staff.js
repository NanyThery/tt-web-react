import styled from "styled-components"
import SectionSeparator from "../components/SectionSeparator"
import { HeroContainer, HeroInfo } from "../components/Home/Header"
import SectionLayout from "../components/SectionLayout"
import { useState } from "react"
import Image from "next/image";
import staff from "../utils/staff.json"

const Strong = styled.strong`
  font-weight: 500;
`
const HeaderContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};

  @media only screen and (max-width: 850px) {
    background: transparent;
    height: fit-content;
    padding-bottom: 24px;
  }
`
const HeaderImage = styled.img`
  width: 350px;
`
const HeaderVolunteer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 2px solid ${(props) => props.theme.colors.purpleLight};
  border-radius: 3px;
  text-align: center;
  p {
    font-size: 14px;
    line-height: 24px;
  }
  > * {
    margin-bottom: 8px;
  }
`
const TabsContainer = styled.div`
  box-shadow: 0px 2px 0px #E9ECEF;
`
const Container = styled.div`
  width: 100%;
  background: white;
`
const StaffSection = styled((props) => <SectionLayout {...props} />)`
  display: flex;
`;
const TabButton = styled.button`
  padding: 24px 40px;
  color: #767B91;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  font-weight: 500;
  ${props => props.active ? 'box-shadow: 0px 2px 0px #FF7C04;' : ''}
`
const StaffMembers = styled.ol`
  list-style: none;
  padding: 0;
  padding-top: 16px;
  padding-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  > li {
    padding: 8px 16px;
  }
`
const StaffMember = styled.div`
  width: 255px;
  position: relative;
  .content {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    padding: 22px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      width: 100%;
      height: 173px;
    }
    > strong {
      font-size: 22px;
      margin-top: 24px;
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
`
const BadgeContainer = styled.div`
  display: flex;
  gap: 6px;
  margin: 24px;
`
const Badge = styled.span`
  font-size: 12px;
  line-height: 16px;
  border: 1px solid ${props => props.secondary ? '#9D4EDD' : '#FF7C04'};
  border-radius: 6px;
  padding: 4px 16px;
  font-weight: bold;
  text-align: center;
`
const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 32px;
`
const SocialLink = styled((props) => (
  <a
    href={{
      linkedin: (handle) => `https://www.linkedin.com/in/${handle}`,
      twitter: (handle) => `https://twitter.com/${handle}/`
    }[props.name](props.handle)}
    target="_blank"
  >
    <img src={`/img/${props.name}.svg`} />
  </a>
))`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export default function Staff() {
  const [selectedYear, setSelectedYear] = useState(2021)
  return (
    <>
      <HeaderContainer>
        <HeroContainer>
          <HeroInfo>
            <h2>Mentores & Profes</h2>
            <Strong>Los que estamos detrás de todo esto.</Strong>
            <p>
              Ya somos muchos los que desde 2021 llevamos impartiendo
              este curso. Sin el esfuerzo de profes, mentores y colaboradores
              nada de esto sería posible. ¿Quieres conocerlos?
            </p>
          </HeroInfo>
          <HeroInfo>
            <HeaderImage src="/img/staff-header.png" />
          </HeroInfo>
          <HeroInfo>
            <HeaderVolunteer>
              <Strong>¿Quieres ser voluntario?</Strong>
              <p>Si quieres ayudarnos puedes hacerte colaborador, mentor o profe. ¡Te esperamos!</p>
            </HeaderVolunteer>
          </HeroInfo>
        </HeroContainer>
      </HeaderContainer>
      <Container>
        <TabsContainer>
          <SectionLayout>
            {[2020, 2021].reverse().map((year) => (
              <TabButton
                key={year}
                active={year === selectedYear}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </TabButton>
            ))}
          </SectionLayout>
        </TabsContainer>
        <StaffSection>
          <StaffMembers>
            {staff.filter(({ years }) => years.includes(selectedYear)).map((member, i) => (
              <li key={i}>
                <StaffMember>
                  <div className="frame" />
                  <div className="content">
                    <div className="image-container">
                      <Image
                        src={member.picture}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <Strong>{member.name}</Strong>
                    <BadgeContainer>
                      {member.mentor && <Badge>Mentor</Badge>}
                      {member.teacher && <Badge secondary>Instructor</Badge>}
                    </BadgeContainer>
                    <SocialLinkContainer>
                      {member.linkedin && <SocialLink name="linkedin" handle={member.linkedin} />}
                      {member.twitter && <SocialLink name="twitter" handle={member.twitter} />}
                    </SocialLinkContainer>
                  </div>
                </StaffMember>
              </li>
            ))}
          </StaffMembers>
        </StaffSection>
      </Container>
      <SectionSeparator />
    </>
  )
}