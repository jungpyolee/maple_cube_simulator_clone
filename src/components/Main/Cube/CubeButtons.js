import React, { useState } from "react";
import { Row, Col } from "antd";
import "../../../stylesheet/CubeButtons.css";
function CubeButtons(props) {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const onRedCube = () => {
    setCount(count + 1);
    setPrice(price + 1200);
    props.refreshPrice(price + 1200);
    props.refreshCount(count + 1);
  };

  const onBlackCube = () => {
    setCount(count + 1);
    setPrice(price + 2200);
    props.refreshPrice(price + 2200);
    props.refreshCount(count + 1);
  };

  const onAdditionalCube = () => {
    setCount(count + 1);
    setPrice(price + 2400);
    props.refreshPrice(price + 2400);
    props.refreshCount(count + 1);
  };

  return (
    <div className="cubeButtons_container">
      <Row gutter={[16, 16]} className="cubeButtons_row">
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button onClick={onRedCube} className="cubeButtons redCube">
            레드 큐브
          </button>
        </Col>
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button onClick={onBlackCube} className="cubeButtons blackCube">
            블랙 큐브
          </button>
        </Col>
        <Col className="cubeButtons_col" lg={8} xs={24}>
          <button
            onClick={onAdditionalCube}
            className="cubeButtons additionalCube"
          >
            에디셔널 큐브
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default CubeButtons;
