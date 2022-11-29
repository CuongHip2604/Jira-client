import PropTypes from "prop-types";
import { useTable } from "react-table";
import { TableContainer } from "./Styles";

const propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

Table.propTypes = propTypes;

export default function Table({ columns, data }) {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup, idx) => (
            // Apply the header row props
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column, columnIdx) => (
                  // Apply the header cell props
                  <th
                    key={columnIdx}
                    {...column.getHeaderProps({
                      style: { minWidth: column.minWidth, width: column.width },
                      className: column.className,
                    })}
                  >
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row, idx) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr key={idx} {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell, cellIdx) => {
                    // Apply the cell props
                    return (
                      <td key={cellIdx} {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </TableContainer>
  );
}
