import { Button, Form, Input, Select } from "antd";
import { useCallback, useEffect, useState } from "react";
import useDebouce from "../hooks/useDebouce";
import Spinner from "./Spinner";
import { listAll as listAllTags } from "../http/tags";

export interface ComplimentFormProps {
  onSubmit: (form: any) => void;
}

function listUsers() {
  return new Promise<{ data: any }>((resolve) => {
    setTimeout(() => {
      return resolve({
        data: [
          { id: 1, name: "Victor", email: "victor@mail.com" },
          { id: 2, name: "Amanda", email: "amanda@mail.com" },
        ],
      });
    }, 700);
  });
}

export interface Option {
  value: string;
  label: string;
}

function ComplimentForm({ onSubmit = () => {} }: ComplimentFormProps) {
  const [userOptions, setUserOptions] = useState<Option[]>([]);
  const [tagOptions, setTagOptions] = useState<Option[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function mapUsersToOptions(users: any[]) {
    return users.map((user) => ({
      label: user.name,
      value: user.id,
    }));
  }

  function mapTagsToOptions(tags: any[]) {
    return tags.map((tag) => ({
      label: tag.name,
      value: tag.id,
    }));
  }

  async function handleDebouncedUsersSearch(debouncedSearchValue: string) {
    console.log("debounced", debouncedSearchValue);
    const { data: users } = await listUsers();

    if (!!users) {
      const options = mapUsersToOptions(users);
      setUserOptions(options);
    }

    setIsSearching(false);
  }

  async function handleDebouncedTagsSearch(searchValue: string) {
    console.log("debounced tag search", searchValue);
  }

  const handleSearch = (value: string) => {
    setUserOptions([]);
    setIsSearching(true);
    setSearchTerm(value);
  };

  useDebouce({
    onTimeOut: useCallback(handleDebouncedUsersSearch, []),
    valueToBeDebounced: searchTerm,
    timeoutInSeconds: 0.5,
  });

  useDebouce({
    onTimeOut: useCallback(handleDebouncedTagsSearch, []),
    valueToBeDebounced: searchTerm,
    timeoutInSeconds: 0.5,
  });

  useEffect(() => {
    async function requestTagsListing() {
      const response = await listAllTags();
      if (!!response) {
        const {
          data: { data: tags },
        } = response;
        setTagOptions(mapTagsToOptions(tags));
      }
    }

    requestTagsListing();
  }, []);

  return (
    <Form
      name="add_new_compliment_form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="receiver_user_id"
        label="Receiver User"
        rules={[
          {
            required: true,
            message: "The user compliment receiver is required",
          },
        ]}
      >
        <Select
          showSearch
          labelInValue
          placeholder="Type and search by user name"
          filterOption={false}
          onSearch={handleSearch}
          notFoundContent={<Spinner />}
          loading={isSearching}
          options={userOptions}
        />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[
          {
            required: true,
            message: "The message is required",
          },
        ]}
      >
        <Input.TextArea placeholder="Compliment message" rows={2} />
      </Form.Item>
      <Form.Item name="tags" label="Tags">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Tags Mode"
          notFoundContent={<Spinner />}
        >
          {tagOptions.map((tagOption) => (
            <Select.Option key={tagOption.label} value={tagOption.value}>
              {tagOption.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ComplimentForm;
