import Header from "../components/AboutUs/Header";
import TimelineSection from "../components/AboutUs/TimelineSection";
import SectionCollaboration from "../components/AboutUs/SectionCollaboration";
import TimelineSectionFinal from "../components/AboutUs/TimelineSectionFinal";
import TimelineTweets from "../components/AboutUs/TimelineTweets";

const tweetsScreenshotsArray = [
  `/img/aboutUs/tweets/TweetExample1.png`,
  `/img/aboutUs/tweets/TweetExample2.png`,
  `/img/aboutUs/tweets/TweetExample3.png`,
  `/img/aboutUs/tweets/TweetExample4.png`,
  `/img/aboutUs/tweets/TweetExample5.png`,
];

export default function About() {
  return (
    <>
      <Header></Header>
      <TimelineSection></TimelineSection>
      <TimelineSectionFinal></TimelineSectionFinal>
      <TimelineTweets
        tweetsScreenshots={tweetsScreenshotsArray}
      ></TimelineTweets>
      <SectionCollaboration></SectionCollaboration>
    </>
  );
}
