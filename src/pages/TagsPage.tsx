import { Space, Typography } from "antd";
import * as React from "react";
import { Tag, TagList } from "../components/TagList";
import { listAll as listAllTags } from "../http/tags";
import { Pagination } from "antd";

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

    async function requestTagsListing() {
      const response = await listAllTags({ params: requestQuery });

      if (!!response) {
        const { data: { data: tags, meta }} = response
        setTags(tags);
        setTotalItems(meta.total);
        setPageSize(meta.per_page);
      }
    }

    requestTagsListing();
  }, [requestQuery]);

  console.log(pageSize);
  console.log(currentPage);

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
