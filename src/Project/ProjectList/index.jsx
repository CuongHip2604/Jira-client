import { useEffect, useMemo, useState } from "react";
import { Avatar, Breadcrumbs, Icon, InputDebounced, Select, Table } from "shared/components";
import { formatDateTimeForAPI } from "shared/utils/dateTime";
import { Actions, ClearAll, Filters, TableContainer, UserChip, UserGroup } from "./Styles";
import useApi from 'shared/hooks/api'
import { Link } from "react-router-dom";

export default function ProjectList() {
  const [searchTerm, setDearchTerm] = useState("");
  const areFiltersCleared = !searchTerm;
  const [dataTable, setDataTable] = useState([])

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        width: '50px',
        minWidth: "50px",
        Cell: ({ value }) => {
          return <Link style={{ textDecoration: 'underline' }} to={`/project/${value}/board`}>{value}</Link>
        }
      },
      {
        Header: "Project name",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: ({ value }) => {
          return <div style={{ textTransform: 'capitalize' }}>{value}</div>
        }
      },
      {
        Header: "Owner",
        accessor: "owner",
        Cell: ({ value }) => {
          return <UserChip>{ value }</UserChip>
        },
        minWidth: 150
      },
      {
        Header: "Members",
        accessor: "users",
        Cell: ({ value }) => {
          return <UserGroup>
            {
              value.splice(0, 2).map((el) => {
                return <Avatar key={el.id} name={el.name} />
              })
            }
          </UserGroup>
        },
        className: 'text-center'
      },
      {
        Header: "Updated at",
        accessor: "updatedAt",
        Cell: ({ value }) => {
          return <span>{formatDateTimeForAPI(value)}</span>
        }
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        width: 70,
        minWidth: 70,
        Cell: ({ row }) => {
          const { values } = row
          return <Actions>
            <Icon type='pencil' onClick={() => onEdit(values)} />
            <Icon type='trash' onClick={() => onDelete(values)} />
          </Actions>
        },
        className: 'text-center'
      },
    ],
    []
  );

  const { data: response } = useApi.get('project', { limit: 10, page: 1 })

  useEffect(() => {
    if (response) {
      const { data } = response
      if (data && data.length) {
        setDataTable(data.map(el => (
          {
            ...el,
            owner: el.users.find(item => item.id === el.ownerId).name || null
          }
        )))
      }
    }
  }, [response])

  const onEdit = (value) => {
    console.log(444, value);
  }

  const onDelete = (value) => {
    console.log(555, value);
  }

  return (
    <>
      <Breadcrumbs items={["Projects", "Management"]} />
      <Filters data-testid="board-filters">
        <InputDebounced
          icon="search"
          value={searchTerm}
          placeholder="Search project by name"
          onChange={(value) => setDearchTerm(value)}
        />
        <Select
          placeholder="Category"
          options={[
            { label: "111", value: 1 },
            { label: "222", value: 2 },
          ]}
        />
        <Select
          placeholder="Status"
          options={[
            { label: "111", value: 1 },
            { label: "222", value: 2 },
          ]}
        />
        {!areFiltersCleared && (
          <ClearAll onClick={() => setDearchTerm("")}>Clear all</ClearAll>
        )}
      </Filters>
      <TableContainer>
        <Table data={dataTable} columns={columns} />
      </TableContainer>
    </>
  );
}
