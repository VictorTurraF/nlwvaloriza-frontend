import { Col, Row, Space, Typography, Button } from "antd";
import ComplimentCard, { Tag } from "../components/ComplimentCard";
import { SendOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import * as complimentsClient from "../http/compliments";
import { Arr } from "../helpers/array";

export interface Compliment {
  message: string;
  authorName: string;
  tags: Tag[];
}

function ComplimentsPage() {
  const navigate = useNavigate();
  const [compliments, setCompliments] = useState<Compliment[]>([]);

  function mapApiValues(valuesFromApi: any[]) {
    return valuesFromApi.map((item) => {
      return {
        message: item.message,
        authorName: item.author.name,
        tags: (item.tags || []).map((tag: any) => {

          return {
            text: tag.hashtag,
            color: tag.color
          }
        }),
      };
    });
  }

  useEffect(() => {
    async function performComplimentsListingRequest() {
      const { data: compliments } = await complimentsClient.listAll();
      if (compliments) {
        setCompliments(mapApiValues(compliments));
      }
    }

    performComplimentsListingRequest();
  }, []);

  const [fisrtComplimentsChunk, secondComplimentsChunk, thirdComplimentsChunk] =
    useMemo(
      () => new Arr(compliments).sliceInEqualParts(3).get(),
      [compliments]
    );

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Row>
        <Col flex="auto">
          <Typography.Title level={4}>Received Compliments</Typography.Title>
        </Col>
        <Col>
          <Button
            type="dashed"
            icon={<SendOutlined />}
            onClick={() => navigate("new")}
          >
            Send a Compliment
          </Button>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            {!!fisrtComplimentsChunk &&
              fisrtComplimentsChunk.map((compliment: Compliment) => (
                <ComplimentCard
                  message={`"${compliment.message}"`}
                  authorImageUrl=""
                  authorName={compliment.authorName}
                  tags={compliment.tags}
                />
              ))}
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            {!!secondComplimentsChunk &&
              secondComplimentsChunk.map((compliment: Compliment) => (
                <ComplimentCard
                  message={`"${compliment.message}"`}
                  authorImageUrl=""
                  authorName={compliment.authorName}
                  tags={compliment.tags}
                />
              ))}
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical">
            {!!thirdComplimentsChunk &&
              thirdComplimentsChunk.map((compliment: Compliment) => (
                <ComplimentCard
                  message={`"${compliment.message}"`}
                  authorImageUrl=""
                  authorName={compliment.authorName}
                  tags={compliment.tags}
                />
              ))}
          </Space>
        </Col>
      </Row>
    </Space>
  );
}

export default ComplimentsPage;
