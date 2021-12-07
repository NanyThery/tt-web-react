import styled from "styled-components"

const Title = styled.h1`
  max-width: 400px;
  color: ${(props) => props.theme.colors.purpleDark};
  line-height: 1;
  margin-bottom: 16px;

  @media only screen and (max-width: 850px) {
    max-width: fit-content;
    text-align: center;
    font-size: 36px; 
  }
`
const DescriptionContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 32px;
  width: 100%;

  > div {
    > p {
      color: ${(props) => props.theme.colors.text80};
    }
  }

  @media only screen and (max-width: 850px) {
    > div {
      width: 100%;
    }
  }
`

const SectionTitleDescription = ({ title, description, ...others }) => {
  return (
    <DescriptionContainer {...others}>
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
    </DescriptionContainer>
  )
}

export default SectionTitleDescription
