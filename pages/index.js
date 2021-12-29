import styled from "styled-components";
import AboutUsSection from "../components/Home/AboutUsSection";
import SectionSeparator from "../components/SectionSeparator";
import { testimonials } from "../utils/copies";
import Header from "../components/Home/Header";
import HomeTestimonials from "../components/Home/HomeTestimonials";
import CourseSection from "../components/Home/CourseSection";
import AchieveSection from "../components/Home/AchieveSection";
import CtaSection from "../components/Home/CtaSection";
import FiguresSection from "../components/Home/FiguresSection";
import FAQSection from "../components/FAQSection";

const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 850px) {
    & .not-in-responsive {
      display: none;
    }
  }
`;

export default function Home({ isCourseOpen, testimonials }) {
  return (
    <Container>
      <Header isCourseOpen={isCourseOpen}></Header>
      <SectionSeparator />
      <AboutUsSection></AboutUsSection>
      <SectionSeparator />
      <HomeTestimonials data={testimonials} />
      <SectionSeparator />
      <CourseSection isCourseOpen={isCourseOpen} />
      <SectionSeparator />
      <AchieveSection />
      <SectionSeparator />
      <FiguresSection className="not-in-responsive" />
      <SectionSeparator className="not-in-responsive" />
      <FAQSection className="not-in-responsive" />
      <SectionSeparator className="not-in-responsive" />
      <CtaSection isCourseOpen={isCourseOpen} />
      <SectionSeparator />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      testimonials,
    },
  };
}
