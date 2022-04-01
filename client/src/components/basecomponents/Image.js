import styled from "styled-components";
import { color, space, layout } from "styled-system";

export const Image = styled.img`
  object-fit: contain;
  ${ color };
  ${ space };
  ${ layout };
`;