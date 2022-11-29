import { color } from "shared/utils/styles";
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  /* border: 1px solid ${color.backgroundMedium}; */
  border-spacing: 0;
  border-collapse: separate;

  /* tr {
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  } */

  th {
    background: ${color.secondary};
    position: relative;

    ::before {
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 1.6em;
      background-color: #0000000f;
      transform: translateY(-50%);
      transition: background-color 0.3s;
      content: "";
    }

    :last-child {
      ::before {
        display: none;
      }
    }
  }

  th,
  td {
    text-align: left;
    padding: 16px;

    border-bottom: 1px solid ${color.backgroundMedium};
    /* border-right: 1px solid ${color.backgroundMedium}; */
  }
`;
