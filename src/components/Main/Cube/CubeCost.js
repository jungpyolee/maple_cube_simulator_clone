import React from "react";
import "../../../stylesheet/CubeCost.css";
import { Col, Row } from "antd";
function CubeCost(props) {
  return (
    <div className="cubeCost_body">
      <div className="cubeCost">
        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            사용 큐브
          </Col>
          <Col lg={12} xs={24}>
            총&nbsp;{props.count}&nbsp;개
          </Col>
          <Col lg={12} xs={24}>
            사용 금액
          </Col>
          <Col lg={12} xs={24}>
            {props.price.toLocaleString()}원
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CubeCost;
