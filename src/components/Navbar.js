import React from "react";
import { Button } from "antd";
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
        <Button className="nav_left_button">
          <MenuOutlined />
        </Button>
        <Button className="nav_left_button">
          <EnvironmentFilled />
        </Button>
        <Button className="nav_left_button">
          <CalculatorFilled />
        </Button>
        <Button className="nav_left_button">
          <SettingFilled />
        </Button>
        <Button className="nav_left_button">
          <DeleteFilled />
        </Button>
        <Button className="nav_left_button">
          <ShareAltOutlined />
        </Button>
      </div>

      <div></div>
    </div>
  );
}

export default Navbar;
