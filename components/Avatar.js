import styled from "styled-components";
import { getAuthorImage } from "../utils/blogHelpers";

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: gray;
  background: ${(props) => getAuthorImage(props.image, props.section)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
