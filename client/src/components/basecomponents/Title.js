import styled from "styled-components";
import { typography, color, space, flexbox, border } from "styled-system";

export const Title1 = styled.h1`
  font-family: inherit;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl1 };
  line-height: 80%;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.n900 };
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };
`;

export const Title2 = styled(Title1)`
  font-size: ${({ theme }) => theme.fontSizes.lg1 };
`;

export const Title3 = styled(Title1)`
  font-size: ${({ theme }) => theme.fontSizes.lg2 };
  line-height: 100%;
`;