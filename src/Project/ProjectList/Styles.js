import { color, font, mixin } from "shared/utils/styles";
import styled from "styled-components";

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 24px;
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  color: ${color.textDark};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    color: ${color.textMedium};
  }
`;

export const TableContainer = styled.div`
  margin-top: 36px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  i {
    cursor: pointer;
  }
`