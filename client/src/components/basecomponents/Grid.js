import styled from "styled-components";
import { flexbox } from "styled-system";
import { Box } from "./Box";

export const Grid = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  ${flexbox};

  @media only screen and (min-width: 1464px) {
    /* padding: 0px 80px; */
  }

  @media only screen and ( max-width: 1463px) {
    /* padding: 0px 20px; */
  }
`;