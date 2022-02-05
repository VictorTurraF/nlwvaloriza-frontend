import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import * as React from "react";

const columns: ColumnsType<User> = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "E-Mail", dataIndex: "email", key: "email" },
  {
    title: "Is Admin",
    dataIndex: "isAdmin",
    key: "isAdmin",
    render: (value) => {
      return value ? "Yes" : "No";
    },
  },
];

export interface User {
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface UsersTableProps {
  users: User[];
}

function UsersTable({ users }: UsersTableProps) {
  return <Table dataSource={users} columns={columns} pagination={false} />;
}

export default UsersTable;
