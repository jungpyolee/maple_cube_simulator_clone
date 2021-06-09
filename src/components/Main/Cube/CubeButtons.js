import React from "react";
import { Row, Col } from "antd";
import "../../../stylesheet/CubeButtons.css";
function CubeButtons() {
  return (
    <div className="cubeButtons_container">
      <Row gutter={[16, 16]} className="cubeButtons_row">
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button className="cubeButtons redCube">레드 큐브</button>
        </Col>
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button className="cubeButtons blackCube">블랙 큐브</button>
        </Col>
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button className="cubeButtons additionalCube">에디셔널 큐브</button>
        </Col>
      </Row>
    </div>
  );
}

export default CubeButtons;
