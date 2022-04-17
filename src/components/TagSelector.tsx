import { Select } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import useDebouce from "../hooks/useDebouce";
import Spinner from "./Spinner";
import { listAll as listAllTags } from "../http/tags";

export interface Option {
  value: string;
  label: string;
}

function TagSelector() {
  const [tagOptions, setTagOptions] = useState<Option[]>([]);
  const [tagSearchTerm, setTagSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);
  const [totalOfPages, setTotalOfPages] = useState(0);

  useEffect(() => {
    async function listNextPageAndAppendToOptions() {
      const response = await listAllTags({ params: { page } });

      if (!!response) {
        const {
          data: { data: tags },
        } = response;
        setTagOptions((prev) => [...prev, ...mapTagsToOptions(tags)]);
      }
    }

    listNextPageAndAppendToOptions();
  }, [page]);

  function handleTagPopupScroll(e: any) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && page < totalOfPages) {
      setPage(() => page + 1);
    }
  }

  function handleTagSearch(value: string) {
    setTagOptions([]);
    setTagSearchTerm(value);
  }

  useEffect(() => {
    async function requestTagsListing() {
      const response = await listAllTags();
      if (!!response) {
        const {
          data: { data: tags, meta },
        } = response;
        setTagOptions(mapTagsToOptions(tags));
        setTotalOfPages(meta.last_page);
      }
    }

    requestTagsListing();
  }, []);

  useDebouce({
    onTimeOut: useCallback(handleDebouncedTagsSearch, []),
    valueToBeDebounced: tagSearchTerm,
    timeoutInSeconds: 0.5,
  });

  async function handleDebouncedTagsSearch(searchValue: string) {
    const response = await listAllTags({
      params: {
        "filter[name]": searchValue === "" ? null : searchValue,
      },
    });

    if (!!response) {
      const {
        data: { data: tags },
      } = response;
      setTagOptions(mapTagsToOptions(tags));
    }

    setIsSearching(false);
  }

  function mapTagsToOptions(tags: any[]) {
    return tags.map((tag) => ({
      label: tag.name,
      value: tag.id,
    }));
  }

  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      filterOption={false}
      placeholder="Search and select hashtags for this post"
      onSearch={handleTagSearch}
      onPopupScroll={handleTagPopupScroll}
      notFoundContent={<Spinner />}
      loading={isSearching}
    >
      {tagOptions.map((tagOption) => (
        <Select.Option key={tagOption.value} value={tagOption.value}>
          {tagOption.label}
        </Select.Option>
      ))}

      {page < totalOfPages && (
        <Select.Option>
          <Spinner />
        </Select.Option>
      )}
    </Select>
  );
}

export default TagSelector;
