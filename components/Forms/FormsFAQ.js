import styled from "styled-components";
import SectionLayout from "../SectionLayout";
import SectionTitleDescription from "../SectionTitleDescription";
import { getIconByName } from "../Icons";
import { Collapse } from "react-collapse";
import { useState } from "react";

const Container = styled((props) => <SectionLayout {...props} />)`
  display: flex;
  flex-flow: column;
`;

const TopSection = styled.div`
  display: flex;

  @media screen and (max-width: 850px) {
    margin-bottom: 25px;
  }
`;
const FAQWrapper = styled.div`
  display: flex;
`;
const FAQContainer = styled.div`
  flex: 1;
`;

const QaItem = styled.div`
  padding: 32px 32px 0 32px;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.text60};
  overflow: hidden;

  & .qa-top-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & .qa-bottom-section {
    padding-top: 32px;
    color: ${(props) => props.theme.colors.text80};
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  > li::before {
    content: "👉";
    margin-right: 5px;
  }
`;

const QAItem = ({ data, isQAOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isQAOpen);
  const { q, a, links } = data;
  return (
    <QaItem>
      <div className="qa-top-section">
        <h4>{q}</h4>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {getIconByName("plus")}
        </div>
      </div>
      <div className="qa-bottom-section">
        <Collapse isOpened={isOpen}>
          <p>{a}</p>
          <LinkList>
            {links?.map(({ label, url }, index) => {
              return (
                <li key={index}>
                  <a href={url}>{label}</a>{" "}
                </li>
              );
            })}
          </LinkList>
        </Collapse>
      </div>
    </QaItem>
  );
};

const FormsFAQ = ({ faqs, ...rest }) => {
  return (
    <Container {...rest}>
      <TopSection>
        <SectionTitleDescription
          title={faqs.title}
          description={faqs.description}
        />
      </TopSection>
      <FAQWrapper>
        <FAQContainer>
          {faqs.qas.map((item, index) => {
            return <QAItem key={index} data={item} isQAOpen={index === 0} />;
          })}
        </FAQContainer>
      </FAQWrapper>
    </Container>
  );
};

export default FormsFAQ;
