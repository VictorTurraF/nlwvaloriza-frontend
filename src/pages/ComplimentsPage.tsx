import { Col, Row, Space, Typography } from "antd";
import ComplimentCard from "../components/ComplimentCard";

function ComplimentsPage() {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Typography.Title level={4}>Compliments</Typography.Title>
      <Row gutter={12}>
        <Col span={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <ComplimentCard
              message={'"Well done! You think so smart!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#e01b24", text: "#amazing" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#f5c211", text: "#inovation" },
              ]}
            />
            <ComplimentCard
              message={'"No! I am your father."'}
              authorImageUrl=""
              authorName="Darth vader"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"With great powers, come greats responsabilities"'}
              authorImageUrl=""
              authorName="Uncle Ben"
              tags={[
                { color: "#e66100", text: "#inpiration" },
                { color: "#865e3c", text: "#classic" },
                { color: "#e01b24", text: "#amazing" },
              ]}
            />
            <ComplimentCard
              message={
                '"Muchas gracias afición, esto es para vosotros!! Siuuuuuuuuuuuuuu!"'
              }
              authorImageUrl=""
              authorName="Cristiano Ronaldo"
              tags={[
                { color: "#e66100", text: "#inpiration" },
                { color: "#865e3c", text: "#classic" },
                { color: "#e01b24", text: "#amazing" },
              ]}
            />
            <ComplimentCard
              message={'"So far, so good!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Dale!"'}
              authorImageUrl=""
              authorName="Uncle bob"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <ComplimentCard
              message={'"You\'re, so far, the best programmer ever!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"So far, so good!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Dale!"'}
              authorImageUrl=""
              authorName="Uncle bob"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Show me the code"'}
              authorImageUrl=""
              authorName="Uncle bob"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Well done! You think so smart!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#e01b24", text: "#amazing" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#f5c211", text: "#inovation" },
              ]}
            />
            <ComplimentCard
              message={'"No! I am your father."'}
              authorImageUrl=""
              authorName="Darth vader"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical">
            <ComplimentCard
              message={'"With great powers, come greats responsabilities"'}
              authorImageUrl=""
              authorName="Uncle Ben"
              tags={[
                { color: "#e66100", text: "#inpiration" },
                { color: "#865e3c", text: "#classic" },
                { color: "#e01b24", text: "#amazing" },
              ]}
            />
            <ComplimentCard
              message={
                '"Muchas gracias afición, esto es para vosotros!! Siuuuuuuuuuuuuuu!"'
              }
              authorImageUrl=""
              authorName="Cristiano Ronaldo"
              tags={[
                { color: "#e66100", text: "#inpiration" },
                { color: "#865e3c", text: "#classic" },
                { color: "#e01b24", text: "#amazing" },
              ]}
            />
            <ComplimentCard
              message={'"Show me the code"'}
              authorImageUrl=""
              authorName="Uncle bob"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"So far, so good!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Dale!"'}
              authorImageUrl=""
              authorName="Uncle bob"
              tags={[
                { color: "#3584e4", text: "#smart" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#3584e4", text: "#ci-cd" },
              ]}
            />
            <ComplimentCard
              message={'"Well done! You think so smart!"'}
              authorImageUrl=""
              authorName="Victor"
              tags={[
                { color: "#e01b24", text: "#amazing" },
                { color: "#0fe8db", text: "#tecnology" },
                { color: "#f5c211", text: "#inovation" },
              ]}
            />
          </Space>
        </Col>
      </Row>
    </Space>
  );
}

export default ComplimentsPage;
