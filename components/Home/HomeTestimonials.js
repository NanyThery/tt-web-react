import styled, { css } from "styled-components";
import SectionLayout from "../SectionLayout";
import { QuotesIcon } from "../Icons";
import { useState, useEffect } from "react";
import SectionTitleDescription from "../SectionTitleDescription";
import { Avatar } from "../Avatar";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const TestimonialContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "card1 card1 card2"
    "card3 card4 card4"
    "card5 card5 card6";
  gap: 16px;

  @media only screen and (max-width: 650px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "card1"
      "card2"
      "card4"
      "card3"
      "card5"
      "card6";
    justify-content: center;
  }
`;

const darkCardStyles = css`
  right: 0;
  background-color: ${({ theme: { colors } }) => colors.purpleDark};
  color: white;
  border-radius: 8px 0px 8px 8px;
  margin-right: 25px;
  ::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #150639 50%, transparent 51%);
    right: -25px;
    top: 0;
  }

  > span {
    color: ${({ theme: { colors } }) => colors.purple};
  }

  .tag {
    border-color: ${({ theme: { colors } }) => colors.orange};
    color: ${({ theme: { colors } }) => colors.orange};
  }
`;

const lightCardStyles = css`
  background-color: white;
  color: ${({ theme: { colors } }) => colors.text80};
  border-radius: 0px 8px 8px 8px;
  margin-left: 25px;

  ::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: linear-gradient(45deg, transparent 50%, white 51%);
    left: -25px;
    top: 0;
  }

  > span {
    color: ${({ theme: { colors } }) => colors.text60};
  }

  .tag {
    border-color: ${({ theme: { colors } }) => colors.text60};
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;

  height: fit-content;
  padding: 32px;
  gap: 24px;

  &.card1 {
    grid-area: card1;
    align-content: flex-end;
    ${lightCardStyles}
  }
  &.card2 {
    grid-area: card2;
    justify-content: flex-start;
    ${darkCardStyles};
  }
  &.card3 {
    grid-area: card3;
    ${darkCardStyles};
  }
  &.card4 {
    grid-area: card4;
    ${lightCardStyles}
  }
  &.card5 {
    grid-area: card5;
    ${lightCardStyles};
  }
  &.card6 {
    grid-area: card6;
    ${darkCardStyles};
  }
`;

const TestimonialInfo = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;
const Signature = styled.div`
  display: flex;
  flex-flow: column;

  > span {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 5px;
  }
`;

const getRandomTestimonials = ({ maxNum, testimonials }) => {
  let random = [];

  const pickedStudentPos = [];
  const pickedCollaboratorPos = [];

  function getStudent() {
    const randomStudentTestimonial = Math.floor(
      Math.random() * testimonials.content.students.length
    );
    if (!pickedStudentPos.includes(randomStudentTestimonial)) {
      pickedStudentPos.push(randomStudentTestimonial);
      return random.push(
        testimonials.content.students[randomStudentTestimonial]
      );
    } else {
      getStudent();
    }
  }

  function getCollaborator() {
    const randomCollaboratorTestimonial = Math.floor(
      Math.random() * testimonials.content.collaborators.length
    );
    if (!pickedCollaboratorPos.includes(randomCollaboratorTestimonial)) {
      pickedCollaboratorPos.push(randomCollaboratorTestimonial);
      return random.push(
        testimonials.content.collaborators[randomCollaboratorTestimonial]
      );
    } else {
      getCollaborator();
    }
  }

  for (let i = 0; i < maxNum / 2; i++) {
    getStudent();
    getCollaborator();
  }

  return random;
};

const HomeTestimonials = ({ data: testimonials }) => {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);

  useEffect(() => {
    setSelectedTestimonials(getRandomTestimonials({ maxNum: 6, testimonials }));
  }, [testimonials]);

  return (
    <Container>
      <SectionTitleDescription
        title={testimonials.title}
        description={testimonials.description}
      />
      <TestimonialContainer>
        {selectedTestimonials.map(
          ({ testimonial, author, tag, image }, index) => {
            return (
              <TestimonialCard key={index} className={`card${index + 1}`}>
                <span className={`card${index + 1}`}>
                  <QuotesIcon />
                </span>
                <p>{testimonial}</p>
                <TestimonialInfo>
                  <Avatar image={`${image}`} section="testimonials" />
                  <Signature>
                    <p> {author}</p>
                    <span className={"tag"}>{tag}</span>
                  </Signature>
                </TestimonialInfo>
              </TestimonialCard>
            );
          }
        )}
      </TestimonialContainer>
    </Container>
  );
};

export default HomeTestimonials;
