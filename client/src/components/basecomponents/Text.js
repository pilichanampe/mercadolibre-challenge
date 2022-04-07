import styled from "styled-components";
import { typography, color, space, flexbox, border } from "styled-system";

export const Title1 = styled.h2`
  font-family: inherit;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.md2 };
  font-weight: 400;
  color: ${({ theme }) => theme.colors.n400 };
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };
  `;

export const Span1 = styled.span`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.md1 };
  font-weight: 600;
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };
  `;

export const Span2 = styled(Span1)`
  color: ${({ theme }) => theme.colors.n300 };
  font-size: ${({ theme }) => theme.fontSizes.xs };
  line-height: 100%;
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };
`;

export const Text = styled.p`
  margin: 0;
  line-height: 80%;
  letter-spacing: 20%;
  color: ${({ theme }) => theme.colors.n300 };
  font-size: ${({ theme }) => theme.fontSizes.sm1 };
  -webkit-text-size-adjust: 100%;
  font-weight: 400;
  line-height: 1.7;
  word-break: break-word;
  ${ typography };
  ${ color };
  ${ space };
  ${ flexbox };
  ${ border };  
`