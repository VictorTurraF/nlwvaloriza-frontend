import { Space, Typography } from "antd";
import * as React from "react";
import { Tag, TagList } from "../components/TagList";
import * as tagsClient from "../http/tags";
import { Pagination } from "antd";

export interface RequestParams {
  query: Object;
}

function TagsPage() {
  const [tags, setTags] = React.useState<Tag[]>();
  const [totalItems, setTotalItems] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [requestQuery, setRequestQuery] = React.useState({});

  function handlePaginatorChange(page: number, pageSize: number) {
    setCurrentPage(page);
    setRequestQuery(params => ({ ...params, page }));
  }

  React.useEffect(() => {
    async function performTagsListingRequest() {
      try {
        const response = await tagsClient.listAll({ params: requestQuery });
        return response.data;
      } catch (error) {
        console.warn("Erro ao listar tags");
        console.warn(error);
      }
    }

    async function fetchTags() {
      const tags = await performTagsListingRequest();

      if (!!tags) {
        console.log(tags);
        setTags(tags.data);
        setTotalItems(tags.meta.total);
        setPageSize(tags.meta.per_page);
      }
    }

    fetchTags();
  }, [requestQuery]);

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Typography.Title level={4}>Tags</Typography.Title>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePaginatorChange}
      />
      <TagList tags={tags} />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePaginatorChange}
      />
    </Space>
  );
}

export default TagsPage;
