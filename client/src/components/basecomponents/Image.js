import styled from "styled-components";
import { color, space, layout, border } from "styled-system";

export const Image = styled.img`
  object-fit: contain;
  ${ color };
  ${ space };
  ${ layout };
  ${ border };
`;