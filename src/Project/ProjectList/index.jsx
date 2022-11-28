import { useMemo, useState } from "react";
import { Breadcrumbs, Icon, InputDebounced, Select, Table } from "shared/components";
import { formatDateTimeForAPI } from "shared/utils/dateTime";
import { Actions, ClearAll, Filters, TableContainer } from "./Styles";

export default function ProjectList() {
  const [searchTerm, setDearchTerm] = useState("");
  const areFiltersCleared = !searchTerm;

  const onEdit = (value) => {
    console.log(444, value);
  }

  const onDelete = (value) => {
    console.log(555, value);
  }

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Project name",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Owner",
        accessor: "owner",
      },
      {
        Header: "Members",
        accessor: "users",
        Cell: ({ value }) => {
          return value.map(el => <div key={el.id}>{el.name}</div>)
        }
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
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        id: 23,
        name: "Project 3",
        description: "description",
        category: "marketing",
        status: "active",
        owner: 17,
        createdAt: "2022-11-25T01:58:20.232Z",
        updatedAt: "2022-11-25T01:58:20.232Z",
        users: [
          {
            id: 17,
            name: "cuong nguyen",
            avatarUrl: null,
            email: "cuong@grr.la",
            createdAt: "2022-11-24T21:39:37.012Z",
            updatedAt: "2022-11-25T03:38:36.161Z",
          },
        ],
      },
      {
        id: 24,
        name: "Project 4",
        description: "description",
        category: "marketing",
        status: "active",
        owner: 17,
        createdAt: "2022-11-25T03:45:31.600Z",
        updatedAt: "2022-11-25T03:45:31.600Z",
        users: [
          {
            id: 17,
            name: "cuong nguyen",
            avatarUrl: null,
            email: "cuong@grr.la",
            createdAt: "2022-11-24T21:39:37.012Z",
            updatedAt: "2022-11-25T03:38:36.161Z",
          },
        ],
      },
    ],
    []
  );

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
        <Table data={data} columns={columns} />
      </TableContainer>
    </>
  );
}
