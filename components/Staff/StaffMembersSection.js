import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import { StaffMemberCard } from "./StaffMemberCard";
import { Badge, Badges } from "./Badges";
import slug from "../../utils/slug";

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

const StaffMembersSection = ({ staff }) => {
  const [selectedYear, setSelectedYear] = useState(2021);
  return (
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
                <StaffMemberCard
                  name={member.name}
                  href={`/staff?name=${slug(member)}`}
                  image={member.image}
                  video={member.video}
                  badges={<Badges member={member} />}
                  body={<SocialLinks member={member} />}
                  footer={`Saber más sobre ${member.name}`}
                />
              </li>
            ))}
          <li>
            <StaffMemberCard
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
  );
};

export default StaffMembersSection;
