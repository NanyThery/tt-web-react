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
  display: flex;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
`;

const TagSearch = () => {
  return (
    <Container>
      <h4>{blogSection.explore}</h4>
      <TagContainer>
        {blogSection.popularTags.map((tag) => {
          return (
            <GenericBadge key={tag} variant="text80">
              {tag}
            </GenericBadge>
          );
        })}
      </TagContainer>
    </Container>
  );
};

export default TagSearch;
