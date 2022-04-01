import styled from "styled-components";
import { compose, flexbox, color, space, layout, background, border, position, shadow } from "styled-system";

export const Box = styled('div')(
  compose(
    flexbox,
    color,
    space,
    layout,
    background,
    border,
    position,
    shadow,
  ),
);