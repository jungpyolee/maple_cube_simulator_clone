import { Select, Col, Row } from "antd";
import React, { useState } from "react";
import {
  weapontype,
  weaponlevel,
  optiontier,
  additionaloptiontier,
} from "../../../../datas/CubeDatas";
import "../../../../stylesheet/CubeWeaponSelection.css";
import AdditionalCubeOption from "../AdditionalCubeOption";
import CubeOption from "../CubeOption";

function CubeWeaponSelection() {
  const [weaponType, setWeaponType] = useState(0);
  const [weaponLevel, setWeaponLevel] = useState(0);
  const [optionTier, setOptionTier] = useState(0);
  const [additionalOptionTier, setAdditioanlOptionTier] = useState(0);

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
    setAdditioanlOptionTier(value);
  };

  return (
    <div>
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
          <div className="weaponSelection_text">에디셔널 잠재옵션 시작등급</div>
        </Col>
        <Col lg={6} xs={24}>
          {" "}
          <div className="weaponSelection_box additional_option_tier">
            <Select
              onChange={handleAdditionalOptionTier}
              placeholder="밑잠 등급을 선택해주세요"
              className="weaponSelection_select"
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
      <CubeOption optionTier={optionTier} />
      <AdditionalCubeOption additionalOptionTier={additionalOptionTier} />
    </div>
  );
}

export default CubeWeaponSelection;
