import staff from "../utils/staff.json";
import { existsSync } from "fs";
import path from "path";
import shuffle from "lodash.shuffle";
import { useRouter } from "next/router";
import StaffHeaderSection from "../components/Staff/StaffHeaderSection";
import StaffMembersSection from "../components/Staff/StaffMembersSection";
import SectionSeparator from "../components/SectionSeparator";
import FooterSection from "../components/Staff/FooterSection";
import StaffMemberModal from "../components/Staff/StaffMemberModal";

export async function getStaticProps() {
  const getRelativeUrl = (member, extension) =>
    `/img/team/${member.id}.${extension}`;

  return {
    props: {
      staff: shuffle(
        Object.entries(staff.people).map(([id, person]) => ({ id, ...person }))
      ).map((member) => {
        const imageUrl = getRelativeUrl(member, "jpg");
        const videoUrl = getRelativeUrl(member, "mp4");
        return {
          ...member,
          image: existsSync(path.join(process.cwd(), "public", imageUrl))
            ? imageUrl
            : `/img/team/placeholder.svg`,
          video: existsSync(path.join(process.cwd(), "public", videoUrl))
            ? videoUrl
            : null,
        };
      }),
    },
  };
}

export default function Staff({ staff }) {
  const { query } = useRouter();
  const selectedMember = staff.find((member) => member.id === query.id);
  return (
    <>
      <StaffHeaderSection />
      <StaffMembersSection staff={staff} />
      <SectionSeparator />
      <FooterSection />
      <SectionSeparator />
      <StaffMemberModal member={selectedMember} />
    </>
  );
}
