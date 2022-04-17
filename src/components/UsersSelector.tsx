import { Select } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import Spinner from "./Spinner";
import useDebouce from "../hooks/useDebouce";
import { listAll as listAllUsers } from "../http/users";

export interface Option {
  value: string;
  label: string;
}

function UsersSelector(props: any) {
  const [userOptions, setUserOptions] = useState<Option[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPages, setTotalOfPages] = useState(0);

  function handleSearch(value: string) {
    setUserOptions([]);
    setIsSearching(true);
    setSearchTerm(value);
  }

  async function handleDebouncedUsersSearch(debouncedSearchValue: string) {
    const { data: users, meta } = await listAllUsers({
      params: {
        simplified: true,
        "filter[name]": debouncedSearchValue,
      },
    });

    if (!!users) {
      const options = mapUsersToOptions(users);
      setUserOptions(options);
      setTotalOfPages(meta.last_page);
    }

    setIsSearching(false);
  }

  useDebouce({
    onTimeOut: useCallback(handleDebouncedUsersSearch, []),
    valueToBeDebounced: searchTerm,
    timeoutInSeconds: 0.5,
  });

  function mapUsersToOptions(users: any[]) {
    return users.map((user) => ({
      label: user.name,
      value: user.id,
    }));
  }

  function handlePopupScroll(event: any) {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom && page < totalOfPages) {
      setPage(() => page + 1);
    }
  }

  function handleDropdownVisibleChange(isVisible: any) {
    if (!isVisible) {
      setSearchTerm("");
      setPage(1);
      setTotalOfPages(0);
    }
  }

  useEffect(() => {
    async function requestUsersListing() {
      const { data: users, meta } = await listAllUsers({ params: { simplified: true, page } });

      if (!!users) {
        const options = mapUsersToOptions(users);
        setUserOptions((prev) => [...prev, ...options]);
        setTotalOfPages(meta.last_page);
      }
    }

    requestUsersListing();
  }, [page]);

  return (
    <Select
      showSearch
      labelInValue
      placeholder="Type and search by user name"
      filterOption={false}
      onSearch={handleSearch}
      notFoundContent={<Spinner />}
      onPopupScroll={handlePopupScroll}
      loading={isSearching}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      {...props}
    >
      {userOptions.map((userOption) => (
        <Select.Option key={userOption.value} value={userOption.value}>
          {userOption.label}
        </Select.Option>
      ))}

      {page < totalOfPages && (
        <Select.Option key="spinner">
          <Spinner />
        </Select.Option>
      )}
    </Select>
  );
}

export default UsersSelector;
