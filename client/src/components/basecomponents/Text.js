import styled from "styled-components";
import { typography, color, space, flexbox, border, layout } from "styled-system";

export const Text = styled.p`
  font-family: inherit;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.md2 };
  line-height: 150%;
  letter-spacing: 0%;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : ''};
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };
  ${ layout };
`;