import { color } from "shared/utils/styles";
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border: 1px solid ${color.backgroundMedium};

  tr {
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    text-align: left;
    padding: 8px;

    border-bottom: 1px solid ${color.backgroundMedium};
    border-right: 1px solid ${color.backgroundMedium};

    :last-child {
      border-right: 0;
    }
  }
`;
