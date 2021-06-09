import { Select, Col, Row } from "antd";
import React from "react";
import "../../../../stylesheet/CubeWeaponSelection.css";

function CubeWeaponSelection() {
  return (
    <Row gutter={[16, 16]} className="weaponSelection_body">
      <Col lg={6} xs={24}>
        <div className="weaponSelection_text">장비 분류</div>
      </Col>
      <Col lg={6} xs={24}>
        {" "}
        <div className="weaponSelection_box weapon_type">
          <Select className="weaponSelection_select"></Select>
        </div>{" "}
      </Col>
      <Col lg={6} xs={24}>
        <div className="weaponSelection_text">장비 레벨</div>
      </Col>
      <Col lg={6} xs={24}>
        <div className="weaponSelection_box weapon_level">
          <Select className="weaponSelection_select"></Select>
        </div>
      </Col>
      <Col lg={6} xs={24}>
        <div className="weaponSelection_text">잠재옵션 시작등급</div>
      </Col>
      <Col lg={6} xs={24}>
        <div className="weaponSelection_box option_tier">
          <Select className="weaponSelection_select"></Select>
        </div>
      </Col>

      <Col lg={6} xs={24}>
        <div className="weaponSelection_text">에디셔널 잠재옵션 시작등급</div>
      </Col>
      <Col lg={6} xs={24}>
        {" "}
        <div className="weaponSelection_box additional_option_tier">
          <Select className="weaponSelection_select"></Select>
        </div>
      </Col>
    </Row>
  );
}

export default CubeWeaponSelection;
