import styled from "styled-components";
import { space, flexbox, layout, border, shadow } from 'styled-system';
import { Box } from "../basecomponents/Box";

export const Card = styled(Box)`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.n0};
  width: 100%;
  ${space};
  ${flexbox};
  ${layout};
  ${border};
  ${shadow};
`;