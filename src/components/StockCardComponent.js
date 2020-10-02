import React from "react";
import { Statistic, Card, Row, Col, Layout } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Content } = Layout;

class StockCard extends React.Component {
  render() {
    return (
        <Layout className="site-layout">
            <Content style={{ margin: '0 0px' }}>
      <div className="site-statistic-demo-card">
        <Row>
          <Col>
            <Card className="stock-card">
              <Statistic
                title={<span style={{ fontFamily: 'Heebo', color: "white", fontWeight: "800", fontSize: "36px" }}>SYMB</span>}
                value={11.28}
                valueStyle={{ color: "#0FBE00", fontFamily: 'Calistoga', fontSize: "24px" }}
                prefix="$"
                suffix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col>
            <Card className="stock-card">
              <Statistic
                className="card-content"
                title={<span style={{ fontFamily: 'Heebo', color: "white", fontWeight: "800", fontSize: "36px" }}>SYMB</span>}
                value={90.23}
                precision={2}
                valueStyle={{ color: "#F40000", fontFamily: 'Calistoga' }}                
                prefix="$"
                suffix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col>
            <Card className="stock-card">
              <Statistic
                title={<span style={{ fontFamily: 'Heebo', color: "white", fontWeight: "800", fontSize: "36px" }}>SYMB</span>}
                value={112.65}
                precision={2}
                valueStyle={{ color: "#F40000", fontFamily: 'Calistoga' }}                
                prefix="$"
                suffix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
      </div>
      </Content>
      </Layout>
    );
  }
}

export { StockCard };
