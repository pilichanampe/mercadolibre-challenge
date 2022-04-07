import styled from "styled-components";
import { compose, flexbox, color, space, layout, background, border, position, shadow } from "styled-system";
import { Box } from "./Box";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 24px;
  ${flexbox};
  ${color};
  ${space};
  ${layout};
  ${background};
  ${border};
  ${position};
  ${shadow};
`;