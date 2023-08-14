import Header from "../components/AboutUs/Header";
import TimelineSection from "../components/AboutUs/TimelineSection";
import SectionCollaboration from "../components/AboutUs/SectionCollaboration";
import TimelineSectionFinal from "../components/AboutUs/TimelineSectionFinal";
import TimelineTweets from "../components/AboutUs/TimelineTweets";
import aboutUs from "../utils/copiesAboutUs.json";

export default function About({ aboutUs }) {
  return (
    <>
      <Header copies={aboutUs?.header}></Header>
      <TimelineSection copies={aboutUs.timeline[0]}></TimelineSection>
      <TimelineSectionFinal copies={aboutUs.timeline[3]}></TimelineSectionFinal>
      <TimelineTweets copies={aboutUs.timelineTweets} />
      <SectionCollaboration
        copies={aboutUs.collaboration}
      ></SectionCollaboration>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      aboutUs,
    },
  };
}
