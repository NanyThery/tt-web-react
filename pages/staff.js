import styled from "styled-components";
import SectionSeparator from "../components/SectionSeparator";
import { HeroContainer, HeroInfo } from "../components/Home/Header";
import Modal from "../components/Modal";
import SectionLayout from "../components/SectionLayout";
import { useState } from "react";
import Image from "next/image";
import staff from "../utils/staff.json";
import slugify from "slugify";
import Link from "next/link";
import router, { useRouter } from "next/router";
import saly from "../public/img/saly.png";
import staffHeaderImage from "../public/img/staff-header.png";
import { existsSync } from "fs";
import path from "path";

const Strong = styled.strong`
  font-weight: 500;
`;
const HeaderContainer = styled.div`
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};

  @media only screen and (max-width: 850px) {
    background: transparent;
    height: fit-content;
    padding-bottom: 24px;
  }
`;
const HeaderImage = styled((props) => (
  <div {...props}>
    {" "}
    <Image src={props.src} />
  </div>
))`
  width: 350px;
  display: flex;
`;
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
`;
const TabsContainer = styled.div`
  box-shadow: 0px 2px 0px #e9ecef;
`;
const Container = styled.div`
  width: 100%;
  background: white;
`;
const StaffSection = styled((props) => <SectionLayout {...props} />)`
  display: flex;
`;
const TabButton = styled.button`
  padding: 24px 40px;
  color: #767b91;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  font-weight: 500;
  ${(props) => (props.active ? "box-shadow: 0px 2px 0px #FF7C04;" : "")}
`;
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
`;
const StaffImage = styled(({ src, videoSrc, ...rest }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
      {...rest}
    >
      <Image src={src} alt="" layout="fill" objectFit="cover" />
      {videoSrc && (showVideo || videoReady) && (
        <video
          style={{ opacity: showVideo && videoReady ? 1 : 0 }}
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
          onCanPlay={() => setVideoReady(true)}
          onTransitionEnd={() => !showVideo && setVideoReady(false)}
        />
      )}
    </div>
  );
})`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0); /* for safari */
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s ease-in-out;
  }
`;
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
const BadgesContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 16px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 18px;
`;
const StaffMember = ({
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

const Badge = styled.span`
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
const Badges = ({ member }) => (
  <>
    {member.mentor && <Badge>Mentor{member.female && "a"}</Badge>}
    {member.teacher && (
      <Badge secondary>Instructor{member.female && "a"}</Badge>
    )}
  </>
);
const Social = ({ member }) => (
  <SocialContainer>
    {member.linkedin && <SocialLink name="linkedin" handle={member.linkedin} />}
    {member.twitter && <SocialLink name="twitter" handle={member.twitter} />}
  </SocialContainer>
);
const ModalContainer = styled.div`
  width: 600px;
  header {
    display: flex;
    align-items: stretch;
    gap: 32px;
    ${StaffImage} {
      border-radius: 100%;
      width: 158px;
      height: 158px;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
const FooterSection = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 96px;
  padding: 0 42px;
`;

const FooterBanner = styled.div`
  background: ${(props) => props.theme.gradients.backgroundOrange};
  border-radius: 6px;
  color: white;
  padding: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 56px;
  .copy {
    max-width: 431px;
  }
  h2 {
    margin-bottom: 18px;
    line-height: 42px;
  }
`;

export async function getStaticProps() {
  const getRelativeUrl = (member, extension) =>
    `/img/team/${slugify(member.name).toLowerCase()}.${extension}`;
  return {
    props: {
      staff: staff.map((member) => {
        const videoUrl = getRelativeUrl(member, "mp4");
        return {
          ...member,
          image: getRelativeUrl(member, "jpg"),
          video: existsSync(path.join(process.cwd(), "public", videoUrl))
            ? videoUrl
            : null,
        };
      }),
    },
  };
}

export default function Staff({ staff }) {
  const [selectedYear, setSelectedYear] = useState(2021);
  const { query } = useRouter();
  const selectedMember = staff.find(
    (member) => slugify(member.name).toLocaleLowerCase() === query.name
  );
  return (
    <>
      <HeaderContainer>
        <HeroContainer>
          <HeroInfo>
            <h2>Mentores & Profes</h2>
            <Strong>Los que estamos detrás de todo esto.</Strong>
            <p>
              Ya somos muchos los que desde 2021 llevamos impartiendo este
              curso. Sin el esfuerzo de profes, mentores y colaboradores nada de
              esto sería posible. ¿Quieres conocerlos?
            </p>
          </HeroInfo>
          <HeroInfo>
            <HeaderImage src={staffHeaderImage} />
          </HeroInfo>
          <HeroInfo>
            <HeaderVolunteer>
              <Strong>¿Quieres ser voluntario?</Strong>
              <p>
                Si quieres ayudarnos puedes hacerte colaborador, mentor o profe.
                ¡Te esperamos!
              </p>
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
            {staff
              .filter(({ years }) => years.includes(selectedYear))
              .map((member, i) => (
                <li key={i}>
                  <StaffMember
                    name={member.name}
                    href={`/staff?name=${slugify(member.name).toLowerCase()}`}
                    image={member.image}
                    video={member.video}
                    badges={<Badges member={member} />}
                    body={<Social member={member} />}
                    footer={`Saber más sobre ${member.name}`}
                  />
                </li>
              ))}
            <li>
              <StaffMember
                className="inverse"
                name="Tú"
                href="/staff"
                image="/img/team/placeholder.svg"
                badges={<Badge inverse>?????</Badge>}
                body="Esta puede ser tu próxima aventura."
                footer="!Únete a nosotros!"
              />
            </li>
          </StaffMembers>
        </StaffSection>
      </Container>
      <SectionSeparator />
      <Modal
        title={selectedMember?.name}
        isOpen={!!selectedMember}
        onClose={() => router.push("/staff", "staff", { scroll: false })}
      >
        {selectedMember && (
          <ModalContainer>
            <header>
              <StaffImage
                src={selectedMember.image}
                videoSrc={selectedMember.video}
              />
              <div>
                <h2>{selectedMember.name}</h2>
                <BadgesContainer>
                  <Badges member={selectedMember} />
                </BadgesContainer>
                <Social member={selectedMember} />
              </div>
            </header>
            <dl>
              {selectedMember.firstProgram && (
                <>
                  <dt>
                    <img src="/img/program.svg" /> Primer Programa
                  </dt>
                  <dd>{selectedMember.firstProgram}.</dd>
                </>
              )}
              {selectedMember.hobbies && (
                <>
                  <dt>
                    <img src="/img/hobby.svg" /> Hobbies
                  </dt>
                  <dd>{selectedMember.hobbies}.</dd>
                </>
              )}
              {selectedMember.quote && (
                <>
                  <dt>
                    <img src="/img/quote.svg" /> Frase destacada
                  </dt>
                  <dd>“{selectedMember.quote}.”</dd>
                </>
              )}
            </dl>
          </ModalContainer>
        )}
      </Modal>
      <FooterSection>
        <FooterBanner>
          <div className="copy">
            <h2>Únete a Teach[Tech]</h2>
            <p>
              Seguimos necesitando <Strong>colaboradores</Strong> que nos ayuden
              a impulsar el proyecto. Si tienes un perfil en{" "}
              <Strong>programación, diseño, marketing, social media</Strong> o
              simplemente <Strong>quieres ayudar</Strong> y unirte a esta
              apasionante aventura, ¡te esperamos!
            </p>
          </div>
          <div className="image">
            <Image src={saly} />
          </div>
        </FooterBanner>
      </FooterSection>
    </>
  );
}
