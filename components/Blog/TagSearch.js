import styled from "styled-components";
import { blogSection } from "../../utils/copies";
import { GenericBadge } from "../GenericBadge";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-flow: column;
  border-radius: 6px;
`;
const TagContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StyledGenericBadge = styled((props) => <GenericBadge {...props} />)`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.text40};
  }
`;

const TagSearch = ({ onTagSelection = () => {} }) => {
  return (
    <Container>
      <h4>{blogSection.explore}</h4>
      <TagContainer>
        {blogSection.popularTags.map((tag) => {
          return (
            <StyledGenericBadge
              key={tag}
              variant="text80"
              onClick={() => onTagSelection(tag)}
            >
              {tag}
            </StyledGenericBadge>
          );
        })}
      </TagContainer>
    </Container>
  );
};

export default TagSearch;
