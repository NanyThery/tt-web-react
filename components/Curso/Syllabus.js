import styled from "styled-components";
import Image from "next/image";
import { Badge } from "../Staff/Badges";

const Container = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0 0 0 60px;

  @media screen and (max-width: 600px) {
    padding: 0; 
`;

const StyledBadge = styled((props) => <Badge {...props} />)`
  width: fit-content;
`;

const Card = styled.li`
  position: relative;
  margin-bottom: 16px;
  display: flex;
  background-color: white;
  flex-flow: column;
  padding: 32px 56px;
  border-radius: 4px;
  gap: 20px;

  .item-img {
    position: absolute;
    top: 15px;
    left: -55px;
    border-radius: 8px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text80};
  }

  :before {
    content: "";
    position: absolute;
    top: 60px;
    left: -15px;
    height: 310px;
    width: 1px;
    border-left: 1px dashed gray;
  }

  :last-child:before {
    height: 0;
  }

  @media screen and (max-width: 1100px) {
    padding: 32px 46px;
    :before {
    }
  }

  @media screen and (max-width: 600px) {
    padding: 60px 32px;
    margin-top: 60px;
    .item-img {
      position: absolute;
      top: -40px;
      left: 32px;
      border-radius: 8px;
    }
    :before {
      height: 0;
    }
  }
`;

const Syllabus = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map(({ tag, imageURL, title, description }, index) => {
        return (
          <Card key={index}>
            <StyledBadge>{tag}</StyledBadge>
            <div className="item-img">
              <Image
                src={`/img/curso/${imageURL}`}
                layout="fixed"
                height="80"
                width="80"
                alt={tag}
              />
            </div>
            <h4>{title}</h4>
            {description}
          </Card>
        );
      })}
    </Container>
  );
};

export default Syllabus;
