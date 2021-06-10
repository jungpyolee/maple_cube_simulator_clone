import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "../../../stylesheet/CubeButtons.css";
import {
  redCubeFirstOption,
  redCubeSecondOption,
  redCubeThirdOption,
  blackCubeFirstOption,
  blackCubeSecondOption,
  blackCubeThirdOption,
  additionalCubeFirstOption,
  additionalCubeSecondOption,
  additionalCubeThirdOption,
} from "../../../datas/CubeDatas";
function CubeButtons(props) {
  useEffect(() => {
    setCount(0);
    setPrice(0);
  }, [
    props.weaponType,
    props.weaponLevel,
    props.optionTier,
    props.additionalOptionTier,
  ]);

  var rwc = require("random-weighted-choice");

  var redFirstOption = rwc(redCubeFirstOption);
  var redSecondOption = rwc(redCubeSecondOption);
  var redThirdOption = rwc(redCubeThirdOption);
  var blackFirstOption = rwc(blackCubeFirstOption);
  var blackSecondOption = rwc(blackCubeSecondOption);
  var blackThirdOption = rwc(blackCubeThirdOption);
  var additionalFirstOption = rwc(additionalCubeFirstOption);
  var additionalSecondOption = rwc(additionalCubeSecondOption);
  var additionalThirdOption = rwc(additionalCubeThirdOption);

  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const onRedCube = () => {
    if (
      !props.weaponType ||
      !props.weaponLevel ||
      !props.optionTier ||
      !props.additionalOptionTier
    ) {
      alert("장비 옵션을 선택해주세요!");
    } else {
      setCount(count + 1);
      setPrice(price + 1200);

      props.refreshPrice(price + 1200);
      props.refreshCount(count + 1);
      props.refreshData1(redFirstOption);
      props.refreshData2(redSecondOption);
      props.refreshData3(redThirdOption);
    }
  };

  const onBlackCube = () => {
    if (
      !props.weaponType ||
      !props.weaponLevel ||
      !props.optionTier ||
      !props.additionalOptionTier
    ) {
      alert("장비 옵션을 선택해주세요!");
    } else {
      setCount(count + 1);
      setPrice(price + 2200);
      props.refreshPrice(price + 2200);
      props.refreshCount(count + 1);

      props.refreshPrice(price + 1200);
      props.refreshCount(count + 1);
      props.refreshData1(blackFirstOption);
      props.refreshData2(blackSecondOption);
      props.refreshData3(blackThirdOption);
    }
  };

  const onAdditionalCube = () => {
    if (
      !props.weaponType ||
      !props.weaponLevel ||
      !props.optionTier ||
      !props.additionalOptionTier
    ) {
      alert("장비 옵션을 선택해주세요!");
    } else {
      setCount(count + 1);
      setPrice(price + 2400);
      props.refreshPrice(price + 2400);
      props.refreshCount(count + 1);
      props.refreshData4(additionalFirstOption);
      props.refreshData5(additionalSecondOption);
      props.refreshData6(additionalThirdOption);
    }
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
