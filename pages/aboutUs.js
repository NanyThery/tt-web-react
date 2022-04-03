import Header from "../components/AboutUs/Header";
import TimelineSection from "../components/AboutUs/TimelineSection";
import SectionCollaboration from "../components/AboutUs/SectionCollaboration";
import TimelineSectionFinal from "../components/AboutUs/TimelineSectionFinal";
import TimelineTweets from "../components/AboutUs/TimelineTweets";

export default function About() {
  return (
    <>
      <Header></Header>
      <TimelineSection></TimelineSection>
      <TimelineSectionFinal></TimelineSectionFinal>
      <TimelineTweets />
      <SectionCollaboration></SectionCollaboration>
    </>
  );
}
