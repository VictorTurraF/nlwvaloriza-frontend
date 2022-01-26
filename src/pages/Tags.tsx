import { Space } from "antd";
import * as React from "react";
import { Tag, TagList } from "../components/TagList";
import { listAll } from "../http/tags";

function TagsPage() {
  const [tags, setTags] = React.useState<Tag[]>();

  React.useEffect(() => {
    async function performTagsListingRequest() {
      try {
        const response = await listAll();
        return response.data.data;
      } catch (error) {
        console.warn("Erro ao listar tags");
        console.warn(error);
      }
    }

    async function fetchTags() {
      const tags = await performTagsListingRequest();

      if (!!tags) {
        console.log(tags);
        setTags(tags);
      }
    }

    fetchTags();
  }, []);

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <TagList tags={tags} />
    </Space>
  );
}

export default TagsPage;
