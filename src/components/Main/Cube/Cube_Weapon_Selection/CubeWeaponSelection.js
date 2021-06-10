import { Select, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  weapontype,
  weaponlevel,
  optiontier,
  additionaloptiontier,
} from "../../../../datas/CubeDatas";
import "../../../../stylesheet/CubeWeaponSelection.css";
import AdditionalCubeOption from "../AdditionalCubeOption";
import CubeButtons from "../CubeButtons";
import CubeCost from "../CubeCost";
import CubeOption from "../CubeOption";

function CubeWeaponSelection() {
  const [weaponType, setWeaponType] = useState(0);
  const [weaponLevel, setWeaponLevel] = useState(0);
  const [optionTier, setOptionTier] = useState(4);
  const [additionalOptionTier, setAdditionalOptionTier] = useState(4);
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [data1, setData1] = useState("큐브를 돌려주세요!");
  const [data2, setData2] = useState("큐브를 돌려주세요!");
  const [data3, setData3] = useState("큐브를 돌려주세요!");
  const [data4, setData4] = useState("큐브를 돌려주세요!");
  const [data5, setData5] = useState("큐브를 돌려주세요!");
  const [data6, setData6] = useState("큐브를 돌려주세요!");

  useEffect(() => {
    handleReset();
  }, [weaponType, weaponLevel, optionTier, additionalOptionTier]);

  const handleReset = () => {
    setPrice(0);
    setCount(0);
    setData1("큐브를돌려주세요!");
    setData2("큐브를돌려주세요!");
    setData3("큐브를돌려주세요!");
    setData4("큐브를돌려주세요!");
    setData5("큐브를돌려주세요!");
    setData6("큐브를돌려주세요!");
  };
  const handleWeaponType = (value) => {
    setWeaponType(value);
  };

  const handleWeaponLevel = (value) => {
    setWeaponLevel(value);
  };

  const handleOptionTier = (value) => {
    setOptionTier(value);
  };

  const handleAdditionalOptionTier = (value) => {
    setAdditionalOptionTier(value);
  };

  const refreshPrice = (newPrice) => {
    setPrice(newPrice);
  };

  const refreshCount = (newCount) => {
    setCount(newCount);
  };

  const refreshData1 = (newData) => {
    setData1(newData);
  };
  const refreshData2 = (newData) => {
    setData2(newData);
  };
  const refreshData3 = (newData) => {
    setData3(newData);
  };

  const refreshData4 = (newData) => {
    setData4(newData);
  };
  const refreshData5 = (newData) => {
    setData5(newData);
  };
  const refreshData6 = (newData) => {
    setData6(newData);
  };

  return (
    <div>
      <div className="cube_body">
        {/* selectionPart */}
        <Row gutter={[16, 16]} className="weaponSelection_body">
          <Col lg={6} xs={24}>
            <div className="weaponSelection_text">장비 분류</div>
          </Col>
          <Col lg={6} xs={24}>
            {" "}
            <div className="weaponSelection_box weapon_type">
              <Select
                onChange={handleWeaponType}
                placeholder="장비 종류를 선택해주세요"
                className="weaponSelection_select"
              >
                {weapontype.map((item) => (
                  <Select.Option
                    className="weaponSelection_option"
                    key={item._id}
                    value={item._id}
                  >
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </div>{" "}
          </Col>
          <Col lg={6} xs={24}>
            <div className="weaponSelection_text">장비 레벨</div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="weaponSelection_box weapon_level">
              <Select
                onChange={handleWeaponLevel}
                placeholder="장비 레벨을 선택해주세요"
                className="weaponSelection_select"
              >
                {weaponlevel.map((item) => (
                  <Select.Option
                    className="weaponSelection_option"
                    key={item._id}
                    value={item._id}
                  >
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="weaponSelection_text">잠재옵션 시작등급</div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="weaponSelection_box option_tier">
              <Select
                onChange={handleOptionTier}
                placeholder="윗잠 등급을 선택해주세요"
                className="weaponSelection_select"
                value="레전드리"
              >
                {optiontier.map((item) => (
                  <Select.Option
                    className="weaponSelection_option"
                    key={item._id}
                    value={item._id}
                  >
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Col>
          <Col lg={6} xs={24}>
            <div className="weaponSelection_text">
              에디셔널 잠재옵션 시작등급
            </div>
          </Col>
          <Col lg={6} xs={24}>
            {" "}
            <div className="weaponSelection_box additional_option_tier">
              <Select
                onChange={handleAdditionalOptionTier}
                placeholder="밑잠 등급을 선택해주세요"
                className="weaponSelection_select"
                value="레전드리"
              >
                {additionaloptiontier.map((item) => (
                  <Select.Option
                    className="weaponSelection_option"
                    key={item._id}
                    value={item._id}
                  >
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Col>
        </Row>
        {/* 윗잠 */}
        <CubeOption
          data1={data1}
          data2={data2}
          data3={data3}
          optionTier={optionTier}
        />
        {/* 밑잠 */}
        <AdditionalCubeOption
          data4={data4}
          data5={data5}
          data6={data6}
          additionalOptionTier={additionalOptionTier}
        />
      </div>
      <div>
        <CubeCost count={count} price={price} />
        <CubeButtons
          refreshData1={refreshData1}
          refreshData2={refreshData2}
          refreshData3={refreshData3}
          refreshData4={refreshData4}
          refreshData5={refreshData5}
          refreshData6={refreshData6}
          refreshCount={refreshCount}
          refreshPrice={refreshPrice}
          weaponType={weaponType}
          weaponLevel={weaponLevel}
          optionTier={optionTier}
          additionalOptionTier={additionalOptionTier}
        />
      </div>
    </div>
  );
}

export default CubeWeaponSelection;
