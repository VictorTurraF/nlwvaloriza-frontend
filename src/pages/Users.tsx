import { useState, useEffect } from "react";
import { Pagination, Space, Typography } from "antd";
import UsersTable, { User } from "../components/UsersTable";
import * as usersClient from "../http/users";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [requestQuery, setRequestQuery] = useState({});

  function handlePaginatorChange(page: number, pageSize: number) {
    setCurrentPage(page);
    setRequestQuery((params) => ({ ...params, page }));
  }

  function mapApiValues(dataFromApi: any[]) {
    return dataFromApi.map((user) => {
      return {
        name: user.name,
        email: user.email,
        isAdmin: user.is_admin,
      };
    });
  }

  useEffect(() => {
    async function requestUsersListing() {
      const users = await usersClient.listAll({ params: requestQuery });

      if (users) {
        const mappedData = mapApiValues(users.data);

        setUsers(mappedData);
        setTotalItems(users.meta.total);
        setPageSize(users.meta.per_page);
      }
    }

    requestUsersListing();
  }, [requestQuery]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={4}>Users</Typography.Title>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePaginatorChange}
      />
      <UsersTable users={users} />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePaginatorChange}
      />
    </Space>
  );
}

export default UsersPage;
