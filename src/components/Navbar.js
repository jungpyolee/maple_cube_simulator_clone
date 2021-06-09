import React from "react";
import { Button, Col, Row } from "antd";
import {
  CalculatorFilled,
  DeleteFilled,
  EnvironmentFilled,
  MenuOutlined,
  SettingFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import "../stylesheet/Navbar.css";
function Navbar() {
  return (
    <div className="nav_body">
      <div className="nav_left">
        <Row gutter={[12, 16]}>
          <Col lg={4}>
            <button className="nav_left_button">
              <MenuOutlined />
            </button>
          </Col>
          <Col lg={4}>
            {" "}
            <button className="nav_left_button">
              <EnvironmentFilled />
            </button>
          </Col>
          <Col lg={4}>
            {" "}
            <button className="nav_left_button">
              <CalculatorFilled />
            </button>
          </Col>
          <Col lg={4}>
            {" "}
            <button className="nav_left_button">
              <SettingFilled />
            </button>
          </Col>
          <Col lg={4}>
            <button className="nav_left_button">
              <DeleteFilled />
            </button>
          </Col>
          <Col lg={4}>
            {" "}
            <button className="nav_left_button">
              <ShareAltOutlined />
            </button>
          </Col>
        </Row>
      </div>

      <div></div>
    </div>
  );
}

export default Navbar;
